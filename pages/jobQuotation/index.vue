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
      <div class="pepRight">
        <search @giveParent="getInputText"></search>
        <notLogin></notLogin>
        <div class="botSwiper">
          <Carousel v-model="value1" dots="outside" radius-dot :loop="false" style="width: 100%;height: 100%; margin-top: 0.23rem;" arrow="never">
            <CarouselItem>
              <div class="hotRB">
                <div class="hotTitle"><span></span>热榜</div>
                <div class="hotBody">
                  <div class="listOne" v-for="(item,index) in list" :key="index">
                    <div class="oneImg"></div>
                    <div class="oneName">名字</div>
                    <div class="oneFollow">+ 关注</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">2</div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">3</div>
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </div>
</template>

<script>
  import jobHot from "../../components/jobHot";
  import jobRecommend from "../../components/jobRecommend";
  import search from "../../components/search";
  import notLogin from "../../components/notLogin";
    export default {
      name: "index",
      layout:"topNav",
      components:{
        search,
        notLogin,
        jobHot,
        jobRecommend
      },
      data(){
        return{
          whoActive:1,
          value1:0,
          list:[1,2],
          where:"jobHot"
        }
      },
      methods:{
        getInputText(data){
          console.log(data);
        },
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






  .pepRight{
    width: 3.8rem;
    position: absolute;
    right: 0;
    top: 0;
  }
  /*右下轮播样式*/
  .hotRB{
    background-color: #f5f5f5;
    padding: 0.2rem;
    height: auto;
  }
  .hotTitle{
    position: relative;
    font-size: 0.22rem;
    font-weight: 600;
    padding-left: 0.18rem;
  }
  .hotTitle span{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 2px;
    height: 100%;
    background-color: #ffd206;
  }
  .hotBody{
    background-color: #fff;
    margin-top: 0.25rem;
  }

  .listOne{
    padding: 0.52rem 0 0.48rem 1rem;
    position: relative;
    border-bottom: 1px solid #f5f5f5;
  }
  .oneFollow{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.2rem;
    color: #2d8cf0;
    padding: 0.05rem 0.07rem;
    border: 1px solid #2d8cf0;
    font-size: 12px;
    cursor: pointer;
  }
  .oneFollow:hover{
    background-color: #2d8cf0;
    color: #fff;
  }
  .oneImg{
    position: absolute;
    top: 50%;
    left: 0.2rem;
    transform: translateY(-50%);
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    overflow: hidden;
    background-color: #bbb;
  }
</style>
