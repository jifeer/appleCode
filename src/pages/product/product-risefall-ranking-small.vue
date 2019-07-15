<template>
  <div class="small-wrapper">
    <riseFall :echartsData="echartsData" :width="width" :height="height"></riseFall>
  </div>
</template>

<script>
  import riseFall from 'pages/product/echarts/product-risefall';
  import {rightBarMixin} from 'assets/js/common.js'
  export default {
    name: 'risefall-small',
    data(){
      return {
        echartsData: {
          xdata: [],
          data: [],
        },
        width: '100%',
        height: '100%',
      }
    },
    mounted() {
      this.renderChart()
    },
    methods: {
      renderChart(){
        //  在这里修改数据
        this.$xhr.get('static/json/sample/prd/rise_pas.json?TIME_ID=2016&type=121689')
          .then((res)=>{
              this.echartsData.xdata = res.data.xdata
            this.echartsData.data = res.data.data
          })
          .catch((err)=>{
              console.log(err)
          })
      },
    },
    components: {
      riseFall
    }

  };
</script>

<style lang="scss" scoped>
  @import "./../../assets/css/_variable.scss";
  @import "./../../assets/css/_mixin.scss";

  .small-wrapper {
    height: 100%;
    padding: 0 0.2rem;
  }
</style>
