<template>
  <div ref="chart" class="stockLine-wrapper"></div>
</template>
<script>
  import { $, datazoom, resizeMixin } from 'assets/js/common'
  import { dataZoom, tooltipStyle, axisLabel, legend } from 'assets/js/echarts-style'
  export default {
    mixins: [resizeMixin],
    name: 'trade-chart',
    props: {
      data: {
        type: Array,
        default: () => []
      },
      time: {
        type: String,
        default: ''
      },
      area:{
      	type:String,
      	default: "成都"
      },
      unit:{
      	type:String,
      	default: "月"
      }
    },
    data() {
      return {
      	option:'',
      }
    },
    mounted() {
	     this.myChart = this.$echarts.init(this.$refs.chart)
	     this.initOption()
       this.initChart()
    },
    watch: {
      data: {
        handler: function(val, oldVal) {
        	this.initOption()
		          this.initChart()
        },
        deep: true //增加deep 观察对象的子对象变化
      }
    },
    methods: {
      initOption() {
      if (Object.keys(this.data).length) {
        this.option = {
          grid: {
            left: '5%',
            right: '5%',
            bottom: '20%',
            top: '20%',
            containLabel: true
          },
           tooltip: {
            	...tooltipStyle,
              trigger: 'axis',
            },
          legend: {
            left: 'center',
            top:'13',
            itemWidth: 15,
            itemHeight: 7,
            itemGap: 30, //两图例之间距离
            textStyle: {
              color: '#fff',
              fontSize: 18
            },

            data: [],
            //,'山东相比去年同期','陕西相比去年同期'
          },
          dataZoom: [{
	            show: true,
	            height: 15,
	            xAxisIndex: [0],
	            left: '60',
	            right: '60',
	            bottom: '16',
	            backgroundColor: 'rgba(3, 114, 177, .6)',
	            dataBackground: {
	              areaStyle: {
	                color: 'rgba(3, 114, 177, .7)'
	              },
	              lineStyle: {
	                opacity: 0.8,
	                color: '#8392A5'
	              }
	            },
	            fillerColor: '#063052',
	            borderColor: '#276b9f',
	            start: 0,
	            end: 100,
	            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
	            handleSize: '110%',
	            handleStyle: {
	              color: '#00ADFA',
	              shadowBlur: 0,
	              shadowColor: 'rgba(255, 0, 0, 1)',
	              shadowOffsetX: 0,
	              shadowOffsetY: 0
	            },
	            textStyle: {
	              color: "#11caff",
	              fontSize: '12'
	            }
	          },{
	              type: "inside",
	              show: true,
	              height: 13,
	              start: 1,
	              end: 35
            }],
          xAxis: {
	            type: 'category',
	            data: [],
	            splitLine: {
	              show: false,
	            },
	            axisLabel: axisLabel,
	            axisTick: {
	              show: true, //显示刻度
	            },
	            axisLine: {
	              lineStyle: {
	                color: '#036ca8'
	              }
	            }
          },
          yAxis: [{
            name: "                      苹果冷库库容比（%）",
            nameTextStyle: {
              fontSize: 16,
            },
            nameGap:26,
            type: 'value',
            //interval: 700,
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: "#fff",
                fontSize: 16
              }
            }
          }],
          series: []
        };
       }
      },
      initChart(){
       let dataArr = [];
       let legendData = [];
       let time = []
       let color = ["#33A0EA","#D2C62D"];
        this.data.forEach((val, index) => {
          let value = val.name.substring(0,2)+"苹果冷库库容比"
          dataArr.push({
	          type: 'bar',
	          name:value,
	          barMaxWidth: 16,
	          data:val.data,
	          label: {
	            normal: {
	              show: false,
	              position: 'right',
	              formatter: "{c}%"
	            }
	          },
	          itemStyle: {
	            normal: {
	              color: color[index]
	            }
	          }
	        })
          legendData.push(value)
          this.option.xAxis.data = this.data[0].time
        })
        this.option.series = dataArr
        this.option.legend.data = legendData
        this.option.tooltip.formatter = (params) => {
          let tooltip = "<div style='text-align:left'>" + params[0].name+this.unit + "<br/>"
          	params.forEach((val,index)=>{
          		tooltip += val.marker + val.seriesName + "：" + val.value + "%<br/>"
          	})
          return tooltip + "</div>"
        }
//      console.log(this.option)
        //如果有新的配置项的变化 深度拷贝
        this.myChart.setOption(this.option, true)
      },
      // echats 图表自适应
      _windowResizeHandler() {
        this.myChart.resize()
      },
      // 销毁echats图表方法
      _destroyEchart() {
        this.myChart.dispose()
      }
    },

  }

</script>
<style lang="scss" scoped>
  @import "~assets/css/_variable.scss";
  @import "~assets/css/_mixin.scss";
  .stockLine-wrapper{
  	    background-color: #0a1c34 !important;
  }
</style>
