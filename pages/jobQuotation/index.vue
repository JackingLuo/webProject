<template>
    <div class="jobQuotation">
      <div class="jobLeft">
        <div class="jlTit">
          <span>地区</span>
          <div class="cityBtn">武汉</div>
        </div>
        <ul class="listB">
          <li :class="whoActive==1?'active':''" @click="toHot">热门</li>
          <li :class="whoActive==2?'active':''" @click="toRecommend">推荐</li>
        </ul>
      </div>
      <component :is ='where'></component>
      <rightSwiper></rightSwiper>
    </div>
</template>

<script>
  import jobHot from "../../components/jobHot";
  import jobRecommend from "../../components/jobRecommend";
  import rightSwiper from "../../components/rightSwiper";
    export default {
      name: "index",
      layout:"topNav",
      components:{
        jobHot,
        jobRecommend,
        rightSwiper
      },
      data(){
        return{
          whoActive:1,
          where:"jobHot"
        }
      },
      methods:{
        toRecommend(){
          this.whoActive = 2;
          this.where = "jobRecommend"
        },
        toHot(){
          this.whoActive = 1;
          this.where = "jobHot"
        }
      }
    }
</script>

<style scoped>
  .jobQuotation{
    position: relative;
    padding-left: 2rem;
  }
  .jobLeft{
    position: fixed;
    top: 1.35rem;
    left: 1.6rem;
  }
  .jlTit{
    position: relative;
    font-size: 0.26rem;
    font-weight: 600;
    width: 1.43rem;
  }
  .cityBtn{
    position: absolute;
    top: 50%;
    left: 0.6rem;
    transform: translateY(-50%);
    background-color: #3875f2;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    padding: 0.04rem 0.06rem;
    font-weight: 500;
  }
  .listB{
    margin-top: 0.2rem;
  }
  .listB li{
    width: 100%;
    height: 0.56rem;
    color: #000;
    text-align: center;
    line-height: 0.56rem;
    font-size: 0.24rem;
    font-weight: 500;
    cursor: pointer;
  }
  .listB .active{
    background-color: #ffd026;
    color: #fff;
  }







</style>
