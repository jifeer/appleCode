<template>
  <div class="product-trend-wrapper">
    <div class="true-title"><p>{{titleInfo.province?titleInfo.province:''}}{{titleInfo.city?titleInfo.city:''}}{{titleInfo.county?titleInfo.county:''}}苹果生产及占水果比重走势</p></div>
    <div class="chart-up">
      <div class="chart-option">
        <!--<div class="title-info">2002-2016年，<span class="title-num">{{popAreaInfo[0]}}</span>苹果产量年平均增长率<span class="title-num">11.70</span>%</div>-->
        <div class="center-assist"></div>
        <selectTime @chooseTime="_chooseTime" url="apple/production/CountyTime" defaultTimeType="年度" :timeTypeData="timeTypeData" :areaId="areaId"></selectTime>
        <p>
          <selectBtn :btnIndex.sync='btnIndex' :btnData="btnData" @changeBtn="_changeBtn"></selectBtn>
        </p>
        <explain :eText="eTextUp"></explain>
      </div>
      <div class="chart-wrapper">
        <productHistorcal ref="productHistorcal" :echartsData="echartsDataUp" :axisData="axisData" :width="width" :height="height"></productHistorcal>
      </div>
    </div>
    <div class="chart-down">
      <!--<div class="chart-option">
        <div class="title-info">{{popAreaInfo[1]}}年，<span class="title-num">{{popAreaInfo[0]}}</span>苹果园占果园面积<span class="title-num">20.04</span>%，产量占<span class="title-num">19.61</span>%</div>
        <div class="center-assist"></div>
        <selectTime :timeType="timeType"></selectTime>
        <selectDiy :selectData="selectData"></selectDiy>
        <explain :eText="eTextDown"></explain>
      </div>-->
      <div class="chart-wrapper">
        <productAreaProportionFull ref="productAreaProportionFull" :echartsData="echartsDataDown" :width="width" :height="height"></productAreaProportionFull>
      </div>
    </div>

  </div>
</template>

<script>
  import selectTime from 'components/selectTime/selectTime';
  import selectBtn from 'components/selectBtn/selectBtn';
  import explain from 'components/explain/explain';
  import productHistorcal from './echarts/product-historical-big.vue';
  import productAreaProportionFull from './echarts/product-area-full.vue';
  import {rightBarMixin} from 'assets/js/common.js'

  export default {
    name: 'line',
    props: {
      popAreaInfo: {
        type: Array,
        default: []
      },
    },

    data() {
      return {
        btnData:['采购总量', '产量', '单产'],
        btnIndex: 0,
        eTextUp:'数据起始于1982年，级别为县级，来源于农业农村部。',
        timeTypeData: [],
        areaId: '370000',
        echartsDataUp:{
          data: {},
        },
        echartsDataDown:{
          data: {},
          isXian: true,
        },
        // 上大图 轴线&legend 数据 默认值
        axisData: {
          yAxisNameL: '产量（个）',
          yAxisNameR: '变化率（%）',
          type: '产量',
          isXian: true,
        },
        params: {
          // 时间段 2002,2003,2004,2005,2005,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016
          time: '',
          // 地区 全国，北京，山东
          area: '',
          // 数据类型 采购总量/产量/单产  default:112716
          type: ''
        },
        width: '100%',
        height: '100%',
        timeType:'year',
        titleInfo: {}
      }
    },
    mounted(){
//      this.renderChart()
    },

    computed:{
      apiUpParams() {
        return {
          AREA_NAME: this.popAreaInfo[0],
          TIME_ID: this.params.time,
          type: this.params.type
        }
      },
      apiDownParams() {
        return {
          AREA_NAME: this.popAreaInfo[0],
          TIME_ID: this.params.time,
        }
      }
    },

    watch: {
      apiUpParams(newVal) {
        if(newVal.AREA_NAME && newVal.TIME_ID && newVal.type){
          this.getUpChartData()
        }
      },

      apiDownParams(newVal) {
        if(newVal.AREA_NAME && newVal.TIME_ID){
          this.getDownChartData()
        }
      }
    },

    methods:{
      // 改变数据 类型
      _changeBtn(name){
        if(name === '采购总量'){
          this.params.type = '121689'
          this.axisData.yAxisNameL = '面积（万亩）'
          this.axisData.type = '采购总量'
        } else if(name === '产量'){
          this.params.type = '112716'
          this.axisData.yAxisNameL = '产量（个）'
          this.axisData.type = '产量'
        } else if(name === '单产'){
          this.params.type = '单产'
          this.axisData.yAxisNameL = '万元/个'
          this.axisData.type = '单产'
        }
      },

      // 修改日期 拼接成字符串
      _chooseTime(time) {
        this.params.time = time.time
      },

      // get data from server 获取上图数据
      getUpChartData() {
        // 发送ajax请求数据
        this.$xhr.get(`apple/production/change`, {
          params: {
            ...this.apiUpParams
          }
        })
          .then((res) => {
            this.echartsDataUp.data = res.data
            this.titleInfo = res.data.titleInfo
          })
          .catch((err) => {
            console.log(err)

          })
      },

      // get data from server 获取下图数据
      getDownChartData() {
        this.$xhr.get(`apple/production/pAcFor`, {
          params: {
            ...this.apiDownParams
          }
        })
          .then((res) => {
            this.echartsDataDown.data = res.data
          })
          .catch((err) => {
            console.log(err)
          })
      },

    },
    components: {
      selectTime,
      selectBtn,
      explain,
      productHistorcal,
      productAreaProportionFull
    }

  };
</script>

<style lang="scss" scoped>
  @import "./../../assets/css/_variable.scss";
  @import "./../../assets/css/_mixin.scss";
  .product-trend-wrapper {
    /*height:calc(100% - 0.2rem);*/
    height: 100%;
    .true-title {
      width: calc(100% - 3.4rem);
      height: 0.9rem;
      position: absolute;
      top:0;
      left: 1.7rem;
      p {
        width: 100%;
        height:100%;
        line-height: 0.9rem;
        font-size: 0.36rem;
        font-weight: bold;
        text-align: center;
      }
    }
    .chart-up{
      height:55%;
      background-color: #0a1c34;
      .chart-option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 18%;
        padding: 0 .5rem;
        .title-info {
          align-self: center;
          font-size: 26px;
          .title-num {
            color: #00af67;
          }
        }
        .center-assist {
          flex: 1;

        }
        .select-wrapper {
          width: 1.5rem;
          margin-right: 0.2rem;
        }
        p {
          margin-right: 0.1rem;
        }
      }
      .chart-wrapper {
        height: 82%;
        padding: 0 .5rem;
      }
    }
    .chart-down {
      height: 45%;
      background-color: transparent;
      .chart-wrapper {
        box-sizing: border-box;
        padding: 0.2rem 0.5rem 0;
        height: 100%;
      }
    }
  }

</style>
