<template>

  <div ref="stockRate" class="stockRate-wrapper">

  </div>
</template>

<script>
  import { $, datazoom, resizeMixin } from 'assets/js/common'
  import { dataZoom, tooltipStyle, axisLabel, legend } from 'assets/js/echarts-style'

  export default {
    name: 'stockRate',
    mixins: [resizeMixin],
    props: {
      stockRateData: {
        type: Array,
        default: ()=>[]
      },
      area:{
      	type:String,
      	default: "山东"
      },
      unit:{
      	type:String,
      	default: "月"
      }

    },
    watch: {
      stockRateData: {
        handler: function (val, oldVal) {
//                  console.log("watch")
          this.initOption() 
          this.initChart() 
        },
        deep: true  //增加deep 观察对象的子对象变化
      }
    },
    data() { 
      return {
      	option:null,
      };
    }, 
    mounted() { 
      this.myChart = this.$echarts.init(this.$refs.stockRate) 
      this.initOption() 
    },

    methods: { 
      initOption() { 
//    	console.log(this.area) 
        if (Object.keys(this.stockRateData).length) { 
          this.option = { 
            tooltip: { 
            	...tooltipStyle,
              trigger: 'axis',
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
            
            legend: {
            	type:'scroll',
            	width:'850',
              left: 'center',
	            top:'13',
	            itemWidth: 15,
	            itemHeight: 7,
	            itemGap: 30, //两图例之间距离
	            textStyle: {
	              color: '#fff',
	              fontSize: 18
	            },
	            icon:"line",
              data: [],
            },
            grid: {
              left: '100',
              right: '100',
              bottom: '25%',
              top: "20%",
              containLabel: false  //总宽度是否包含坐标轴标签
            },
            
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
            	  name: '                  库容比同比变化率（%）',
	              nameTextStyle: {
	              	color: '#fff',
		              fontSize: 16,
		            },
		            nameGap:26,
	              type: 'value',
	              show: true,
	              axisLabel: axisLabel,
	              axisLine: {
	                show: false,
	              },
	              splitLine: {
	                lineStyle: {
	                  color: '#004574',
	                  type: "dashed",
	
	                }
	              },
	              axisLabel: {
		              formatter: '{value}',
		              textStyle: {
		                color: "#fff",
		                fontSize: 16
		              }
		            }
	           },
	           {
                name: '批发价格变化率（%）                  ',
                nameTextStyle: {
	              	color: '#fff',
		              fontSize: 16,
		            },
		            nameGap:26,
	              type: 'value',
	              show: true,
	              axisLabel: axisLabel,
	              axisLine: {
	                show: false,
	              },
	              splitLine: {
	                show:false
	              },
	              axisLabel: {
		              formatter: '{value}',
		              textStyle: {
		                color: "#fff",
		                fontSize: 16
		              }
		            }
              }
            ],
            series: [],


          };


        }
      },
      initChart() {

        let newSeries = [];
        let legendData = [];
        let color = {
            ser0:['#FF806B','#FF7200'] ,  
            ser1:['#91C7AE','#D2C62D'] 
         }
        this.stockRateData.forEach((val,index)=>{
          newSeries.push({
            type: "line",
            name: val.name+"库容比同比变化率",
            symbolSize: 13,
            smooth:true,
            symbol: "circle",
            icon: "none",
            data: val.capacityRate,
            lineStyle: {
              normal: {
                color: color.ser0[index],
                width: 4,
              },
            },
            itemStyle: {
              normal: {
              	color: color.ser0[index],
                borderColor: "#FFF500",
                borderWidth: 2,
              },
              emphasis: {
                borderColor: '#FFF500'
              }
            }
          },{
            type: "line",
            name: val.name == "陕西" ? val.name+"出库价格变化率" :val.name+"富士苹果批发价同比变化率",
            smooth:true,
            symbolSize: 13,
            yAxisIndex: 1,
            symbol: "circle",
            icon: "none",
            data: val.priceRate,
            lineStyle: {
              normal: {
              	color: color.ser1[index],
//              color: ,
                width: 4,
              },
            },
            itemStyle: {
              normal: {
                color: color.ser1[index],
                borderColor: "#FFF500",
                borderWidth: 2,
              },
              emphasis: {
                borderColor: '#FFF500'
              }
            }
          })
          
        	legendData.push({
        		name:val.name+"库容比同比变化率"
        	},{
        		name:val.name == "陕西" ? val.name+"出库价格变化率" : val.name+"富士苹果批发价同比变化率"
        	})
//        console.log(val.time)
          this.option.xAxis.data = val.time
          this.option.legend.data = legendData
          this.option.yAxis[1].name = val.name == "陕西" ? '出库价格变化率（%）                  ' : '富士苹果批发价同比变化率（%）                              '
        })

        this.option.series = newSeries
        this.option.tooltip.formatter = (params) => {
          let tooltip = "<div style='text-align:left'>" + params[0].name+this.unit + "<br/>"
          	params.forEach((val,index)=>{
          		tooltip += val.marker + val.seriesName + "：" + val.value + "%<br/>"
          	})
          return tooltip + "</div>"
        }
        this.myChart.setOption(this.option, true);
      },
      _windowResizeHandler() {
        this.myChart.resize()
      },
      _destroyEchart() {
        this.myChart.dispose()
      }
    },
//      components: {},

  };
</script>

<style lang="scss" scoped>
  @import "./../../../assets/css/_variable.scss";
  @import "./../../../assets/css/_mixin.scss";

  .stockRate-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
