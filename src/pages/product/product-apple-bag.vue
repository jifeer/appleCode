<template>
  <div class="product-apple-bag big-wrapper">
    <div class="true-title">
      <p>我国苹果主产区套袋量监测</p>
    </div>
    <!--<div class="bigW-intro"></div>-->
    <div class="bigW-option">
      <!-- <p> -->
      <!--地区多选组件-->
      <!--<selectArea url="apple/production/region" @change="_changeArea"></selectArea>-->
      <selectTime @chooseTime="_chooseTime" url="/apple/production/bagging/times" defaultTimeType="年度"></selectTime>
      <selectTree :url="url" @change="_changeArea" class="mr" :fixAreas="params.area"></selectTree>
      <!-- </p> -->
      <explain :eText="eText"></explain>
    </div>
    <!--<div class="apple-bag">-->
    <!--<ul class="bag-list">-->
    <!--&lt;!&ndash;<li :class="{checked: item.active}" v-for="(item, index) in bagType" @click="_changeBagType(index)">&ndash;&gt;-->
    <!--<li :class="{checked: true}" v-for="(item, index) in bagType" @click="_changeBagType(index)">-->
    <!--<span>{{item.name}}</span>-->
    <!--<img :src="item.src">-->
    <!--&lt;!&ndash;<img src='../../assets/img/applebag{{index}}.jpg' alt="">&ndash;&gt;-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <div class="chart">
      <appleBag ref="appleBag" :echartsData="echartsData" :width="width" :height="height"></appleBag>
    </div>
  </div>
</template>
<script>
  // import selectArea from 'components/selectArea/selectArea';
  import selectTime from 'components/selectTime/selectTimeYearSingle';
  import selectTree from 'components/selectTree/selectTree2';
  import explain from 'components/explain/explain';
  import appleBag from 'pages/product/echarts/product-applebag-big';
  import timeScroll from 'components/timeScroll/timeScroll'
  import { rightBarMixin } from 'assets/js/common.js'

  export default {
    name: 'applebag',
    data() {
      return {
        eText: '数据来源于农业农村部，起始于1982年，级别为全国、省级。',
        echartsData: {
          data: [],
        },
        width: '100%',
        height: '100%',
        params: {
          // 地区,
          area: '',
          // 数据类型 采购总量/产量/单产  default:112716
          type: ''
        },
        time: '',
        url: ''
      }
    },

    computed: {
      apiParams() {
        return {
          Area: this.params.area,
          year: this.time
          //type: this.params.type
        }
      },
    },

    watch: {
      apiParams(newVal) {
        if (newVal.Area) {
          this.getChartData()
        }
      },
    },

    methods: {
      // 切换纸袋类别
      _changeBagType(index) {
        this.bagType.forEach((v) => {
          v.active = false
        })
        this.bagType[index].active = true
      },

      // 切换地区
      _changeArea(v) {
        // console.log(v)
        this.params.area = v
      },

      // 获取数据
      getChartData() {
        // 发送ajax请求数据
        this.$xhr.get(`apple/production/bagging`, {
            params: {
              ...this.apiParams
            }
          })
          .then((res) => {
            this.echartsData.data = res.data
            //this.echartsData.xdata = res.data.xdata
          })
          .catch((err) => {
            console.log(err)
          })
      },

      _chooseTime(time) {
        this.time = time.time
        this.url = `/apple/production/bagging/region?year=${time.time}`
      }
    },
    components: {
      // selectArea,
      selectTree,
      explain,
      appleBag,
      selectTime
    }

  };

</script>
<style lang="scss" scoped>
  @import "./../../assets/css/_variable.scss";
  @import "./../../assets/css/_mixin.scss";
  .product-apple-bag {
    height: calc(100% - 0.5rem);
    .true-title {
      width: calc(100% - 3.4rem);
      height: 0.9rem;
      position: absolute;
      top: 0;
      left: 1.7rem;
      p {
        width: 100%;
        height: 100%;
        line-height: 0.9rem;
        font-size: 0.36rem;
        font-weight: bold;
        text-align: center;
      }
    }
    .apple-bag {
      width: 100%;
      .bag-list {
        width: 72%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        display: -moz-box;
        justify-content: space-between;
        align-items: center;
        li {
          width: 2.4rem;
          height: 100%;
          cursor: pointer;
          font-size: 0.18rem;
          color: #0372b1;
          span {
            text-align: center;
            width: 100%;
            height: .4rem;
            line-height: .4rem;
            display: inline-block;
          }
          img {
            border: 1px solid #06375d;
            -webkit-filter: brightness(30%);
            /* Chrome, Safari, Opera */
            filter: brightness(30%);
          }
        }
        .checked {
          color: #00af67;
          img {
            -webkit-filter: brightness(100%);
            /* Chrome, Safari, Opera */
            filter: brightness(100%);
          }
        }
      }
    }
    .chart {
      width: 100%;
      padding-top: 0.15rem;
      /*height: calc(100% - 2.52rem);*/
      height: calc(100% - 0.75rem);
    }
    .bigW-intro {
      height: 0;
    }
    .timeScroll-wrapper {
      width: 100%;
      height: 40px;
    }
    .bigW-option {
      @include flex(flex-end);
      height: 0.4rem;
      p {
        margin-right: 0.2rem;
      }
    }
  }
  .mr {
    margin-right: 0.13rem;
  }

</style>
