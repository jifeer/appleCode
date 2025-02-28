<template>
  <div ref="mapChart" class="mapChart-wrapper">
  </div>
</template>
<script>
  import { $, resizeMixin, reverseObj } from 'assets/js/common'
  import { tooltipStyle } from 'assets/js/echarts-style'
  import { worldGeoCoordMap, nameMap } from 'assets/js/mapname'

  // require('echarts/lib/chart/map')
  // require('echarts/map/js/world.js')
  // require('echarts/map/json/world.json')

  export default {
    name: 'mapecharts',
    mixins: [resizeMixin],
    props: {
      data: {
        type: Array,
        default: () => []
      },
      flowData: {
        type: Array,
        default: () => []
      },
      dir: {
        type: String,
        default: '出口'
      },
      appleType: {
        type: String,
        default: '苹果干'
      },
      time: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    mounted() {
      this.initChart()
    },
    methods: {
      initChart() {
        this.myChart = this.$echarts.init(this.$refs.mapChart)

        // 贸易分布的数据
        let areaData = []
        this.data.forEach((item, index) => {
          let name = reverseObj(nameMap)[item.name]
          if (name) {
            areaData.push({
              name: name,
              value: item.value,
              rate: item.rate
            })
          }
        })

        // 流向地图处理函数
        let me = this

        function handleResData(resData) {
          let color = ['#a6c84c', '#ffa022'];
          let series = [];
          resData.forEach(function(item, i) {
            series.push({ //线
              name: item.name,
              type: 'lines',
              zlevel: 2,
              effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 1
              },
              lineStyle: {
                normal: {
                  color: '#a6c84c', //color[i],
                  width: 1,
                  curveness: 0.2,
                  type: 'solid' //dash
                }
              },
              data: me.convertFakeData(item.data)
            }, { //移动 点
              name: item.name,
              type: 'lines',
              zlevel: 3,
              effect: {
                show: true,
                period: 6,
                trailLength: 0,
                //symbol: planePath,
                symbolSize: 5
              },
              lineStyle: {
                normal: {
                  color: '#a6c84c',
                  width: 1,
                  opacity: 0.4,
                  curveness: 0.2
                }
              },
              data: me.convertFakeData(item.data)
            }, { //省份圆点
              name: item.name,
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 4,
              effectScatter: {
                symbol: 'diamond'

              },
              rippleEffect: {
                brushType: 'stroke',
                scale: 4
              },
              label: {
                normal: {
                  show: false,
                  position: 'right',
                  formatter: '{b}'
                }
              },
              symbolSize: 5,
              itemStyle: {
                normal: {
                  color: color[i]
                }
              },
              data: item.data.map(function(dataItem) {
                // 缺少经纬度而做的
                if (worldGeoCoordMap[dataItem[1].name]) {
                  return {
                    name: dataItem[1].name,
                    value: worldGeoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                  }
                }
              })
            });
          });
          series.push({
            name: '全球鲜苹果出口贸易分布',
            type: 'map',
            geoIndex: 1,
            zlevel: 1,
            showLegendSymbol: false,
            zoom: 1.25,
            roam: false,
            itemStyle: {
              normal: {
                // areaColor: 'rgba(122, 247, 179, 0.9)',
                areaColor: '#fff',
                borderColor: '#20508a'
              },
              emphasis: {
                areaColor: '#3952ca'
              }
            },
            mapType: 'world',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                formatter: function(d) {
                  return nameMap[d.name]
                }
              }
            },
            data: areaData
          });
          return series
        }
        // 流向地图基本样式
        let option = {
          tooltip: {
            trigger: 'item',
            ...tooltipStyle,
            formatter: function(params) {
              let str = ''
              // 流向的
              if (params.componentSubType === 'effectScatter') {
                if (me.dir === '出口') {
                  str = `${params.seriesName} > ${params.name} <br> 交易量：${params.value[2][0]}吨（${params.value[2][1]}%）`
                } else {
                  str = `${params.name} > ${params.seriesName} <br> 交易量：${params.value[2][0]}吨（${params.value[2][1]}%）`
                }
              } else if (params.componentSubType === 'map') {
                let unite = me.appleType === '苹果干' ? '吨' : '个'
                if (params.value) {
                  return `${me.time}年${nameMap[params.name]}<br>${me.dir}量：${params.value}${unite}`
                }
              }
              return str
            }
          },
          geo: {
            map: 'world',
            zoom: 1.25,
            zlevel: 0,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            roam: false,
            itemStyle: {
              normal: {
                areaColor: 'rgba(76, 159, 129,0.9)',
                borderColor: '#20508a'
              },
              emphasis: {
                areaColor: '#3952ca'
              }
            }
          },
          visualMap: {
            show: false,
            type: 'piecewise',
            min: 0,
            max: 2500,
            color: ['#ff3000', '#ff7800', '#ffc000', '#eaff00', '#4ad9c6', '#007acf'],
            splitNumber: 6,
            pieces: [{
              min: 50,
              label: '>50',
              color: '#ff3000'
            }, {
              min: 30,
              max: 50,
              label: '30-50',
              color: '#ff7800'
            }, {
              min: 20,
              max: 30,
              label: '20-30',
              color: '#ffc000'
            }, {
              min: 10,
              max: 20,
              label: '10-20',
              color: '#eaff00'
            }, {
              min: 5,
              max: 10,
              label: '5-10',
              color: '#007acf'
            }, {
              min: 1,
              max: 5,
              label: '1-5',
              color: '#4ad9c6'
            }],
            left: '0',
            bottom: '20',
            // text: ['高', '低'], // 文本，默认为数值文本
            textStyle: {
              color: '#fff'
            },
            calculable: true
          },
          // visualMap: {
          //   show: false,
          //   type: 'piecewise', //分段型。
          //   splitNumber: 6,
          //   inverse: false,
          //   pieces: [{
          //     min: 50,
          //     label: '>50',
          //     color: '#00934E'
          //   }, {
          //     min: 30,
          //     max: 50,
          //     label: '30-50',
          //     color: '#22AD6C',

          //   }, {
          //     min: 20,
          //     max: 30,
          //     label: '20-30',
          //     color: '#10BD6C'
          //   }, {
          //     min: 10,
          //     max: 20,
          //     label: '10-20',
          //     color: '#12CA6D'

          //   }, {
          //     min: 5,
          //     max: 10,
          //     label: '5-10',
          //     color: '#41DA89'

          //   }, {
          //     min: 1,
          //     max: 5,
          //     label: '1-5',
          //     color: '#75F8B1'
          //   }],
          //   left: '4%',
          //   bottom: '6%',
          //   itemGap: 0,
          //   itemWidth: 20,
          //   itemHeight: 30,
          //   inRange: {
          //     symbol: 'rect',
          //   },
          //   textStyle: {
          //     color: '#fff'
          //   }
          // },
          series: handleResData(this.flowData)
        }

        this.myChart.setOption(option, true)
      },
      convertData(data) {
        let me = this
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = worldGeoCoordMap[dataItem[0].name];
          var toCoord = worldGeoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            if (me.dir === '出口') {
              res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                // value: dataItem[1].value
                value: dataItem[1].value[1]
              })
            } else {
              res.push({
                fromName: dataItem[1].name,
                toName: dataItem[0].name,
                coords: [toCoord, fromCoord],
                // value: dataItem[1].value
                value: dataItem[1].value[1]
              })
            }
          }
        }
        return res;
      },
      convertFakeData(data) {
        let me = this
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = worldGeoCoordMap[dataItem[0].name];
          var toCoord = worldGeoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            if (me.dir === '出口') {
              res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                // value: dataItem[1].value
                value: []
              })
            } else {
              res.push({
                fromName: dataItem[1].name,
                toName: dataItem[0].name,
                coords: [toCoord, fromCoord],
                // value: dataItem[1].value
                value: []
              })
            }
          }
        }
        return res;
      },
      _windowResizeHandler() {
        this.myChart.resize()
      },
      _destroyEchart() {
        this.myChart.dispose()
      }
    },
    watch: {
      data: {
        handler: function(val, oldVal) {
          if (this.myChart) {
            this.myChart.dispose()
          }
          this.initChart()
        },
        deep: true //增加deep 观察对象的子对象变化
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "./../../../assets/css/_variable.scss";
  @import "./../../../assets/css/_mixin.scss";
  .mapChart-wrapper {
    width: 100%;
    height: 100%;
  }

</style>
