<template>
  <div class="flow-large-wrapper">
  	<div>
  		 <div class="top-wrapper">
  		 	<selectTime class="left" :area="area" @chooseTime="_chooseTime" url="apple/circulation/capacityTimes"  defaultTimeType="月度" :timeTypeData="timeTypeData" ></selectTime>
  			    <selectArea class="left"  @change="_changeDiy" url="apple/circulation/capacityArea" defaultOption="山东"></selectArea>
  		</div>
  		<stockChart :area="area" :unit="unit" :data="echartsData" v-if="echartsData.length" class="world-chart"></stockChart>
  		<stockRate :area="area" :unit="unit" :stockRateData="stockRateData"  class="world-chart"></stockRate>
  		
  	</div>

  </div>
</template>
<script>
  import { rightBarMixin } from 'assets/js/common.js'
  import stockChart from  'pages/flow/echarts/flow-stockline.vue'
  import stockRate from  'pages/flow/echarts/flow-stockRate.vue'
  import { dataZoom, tooltipStyle, axisLabel } from 'assets/js/echarts-style'
  import selectArea from 'components/selectArea/selectArea'
  import selectTime from 'components/selectTime/selectTimeLimit'
  
  export default {
    data() {
      return {
        time: '',
        area:"山东",
        timeType:'',
        echartsData: [],
        stockRateData:[],
        timeTypeData: ["周度","月度"],   // selectTime 组件
        unit:"",
        requestYears:'',
      };
    },
    computed: {
    	ApiSChartParms(){
    		return {
    			time:this.time,
    			areaName:this.area,
    			timeType:this.timeType,
    			requestYears:this.requestYears
    		}
    	}
    },
    watch: {
      ApiSChartParms(newVal) {
        if (newVal.time && newVal.areaName && newVal.timeType) {
          this.getData()
          this.getDatas()
        }
      }
    },
    mounted() {
//    this.getData()
//    this.getDatas()
    },
    methods: {
    	//仓容比
      getData() {
//    	console.log(typeof(this.ApiSChartParms))
        this.$xhr.get('apple/circulation/capacity',{
        	params: {
            ...this.ApiSChartParms

          }
        }).then((res) => {
//      	console.log(res)
          this.echartsData = res.data
})
        
      },
      //变化率
      getDatas() {
        this.$xhr.get('apple/circulation/priceCapacityCompare',{
        	params: {
            ...this.ApiSChartParms
          }
        }).then((res) => {
          this.stockRateData=res.data
        })
        
      },
      //地区
      _changeDiy(val){
      	this.area = val
//    	console.log(this.area)
      },
      //时间
      _chooseTime(val){
      	this.time = val.time
      	this.requestYears = val.years
//	    	console.log(val)
      	this.timeType = val.timeType
        if(this.timeType == "week"){
        	this.unit ="周"
        }
        if(this.timeType == "month"){
        	this.unit ="月"
        }
      }
    },

    components: {
      stockChart,
      stockRate,
      selectArea,
      selectTime,
    }
  };

</script>
<style lang="scss" scoped>
  @import "./../../assets/css/_variable.scss";
  @import "./../../assets/css/_mixin.scss";
  .big-window-cont >div{
    height:100%;
  }
.flow-large-wrapper{
	&>div{
		height:100%;
		.top-wrapper{
			display: flex;
			justify-content: flex-end;
			padding-right: 0.4rem;
		  margin-bottom: 0.1rem;
		}
		.world-chart{
			height: 44%;
		}
		.left{
			margin-left: 0.2rem;
		}
	}
}

</style>
