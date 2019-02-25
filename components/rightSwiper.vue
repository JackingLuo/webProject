<template>
  <div class="pepRight">
    <search @giveParent="getInputText"></search>
    <component :is ="$store.state.isLogin?'login':'notLogin'"></component>
    <div class="botSwiper">
      <Carousel v-model="value1" dots="outside" radius-dot :loop="false" style="width: 100%;height: 100%; margin-top: 0.23rem;" arrow="never">
        <CarouselItem>
          <div class="hotRB">
            <div class="hotTitle"><span></span>热榜</div>
            <div class="hotBody" v-if="swiperType==2">
              <div class="listOne" v-for="(item,index) in hotPeople" :key="index">
                <div class="oneImg"><img :src="item.headPortrait"></div>
                <div class="oneName" v-text="item.nickname"></div>
                <div class="oneFollow" @click="clickFollow(item,index)" v-text="item.isfollow=='Y'?'已关注':'+ 关注'"></div>
              </div>
            </div>
            <div class="hotBody2" v-if="swiperType==1">
              <Row class="oneList">
                <Col span="9" class="colBox"><img src=""></Col>
                <Col span="15" style="position: relative">
                  <h3></h3>
                  <div class="date">

                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </CarouselItem>
        <!--<CarouselItem>-->
          <!--<div class="demo-carousel">2</div>-->
        <!--</CarouselItem>-->
        <!--<CarouselItem>-->
          <!--<div class="demo-carousel">3</div>-->
        <!--</CarouselItem>-->
      </Carousel>
    </div>
  </div>
</template>

<script>
  import axios from "../plugins/axios";
  import {ADD_FOLLOW,DEL_FOLLOW,INFO_SEARCH} from "~/server/api"
  import search from "./search";
  import notLogin from "./notLogin";
  import login from "./login";
  export default {
        name: "rightSwiper",
      components:{
        search,
        notLogin,
        login
      },
      props: {
        hotPeople: {
          default: []
        },
        swiperType:{//1表示文章类型的,2表示网络红人类型的
          default: 1,
        }
      },
      data(){
          return{
            whereCompoent:'notLogin',
            value1:0,
            list:[1,2],
            hotPopRes:{
              param:{
                toUserId:'',
              },
              userId:this.$store.state.userId,
            }
          }
      },
      created(){
        if(process.browser){
          const loginInfo= JSON.parse(localStorage.getItem('LOGININFO'));
          if(loginInfo){
            this.$store.commit('getpesonInfo',loginInfo);//获取缓存到的登录信息
          }
        }
      },
      methods:{
          //关注事件
        clickFollow(item,index){
          if(item.isfollow=='Y'){
            this.hotPopRes.param.toUserId = item.userId;
            axios.post(DEL_FOLLOW,this.hotPopRes).then((res)=>{
              if(res.status==200){
                this.hotPeople[index].isfollow = 'N'
              }else{
                this.$Notice.error({
                  title:res.data.errorMsg,
                });
              }
            })
          }else{
            this.hotPopRes.param.toUserId = item.userId;
            axios.post(ADD_FOLLOW,this.hotPopRes).then((res)=>{
              if(res.status==200){
                this.hotPeople[index].isfollow = 'Y'
              }else{
                this.$Notice.error({
                  title:res.data.errorMsg,
                });
              }
            })
          }
        },
        //搜索组件返回的输入框数据
        getInputText(inputText){

        },
      }
    }
</script>

<style scoped>
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
  .oneImg img{
    width: 100%;
    height: 100%;
  }

  .hotBody2{
    background-color: #fff;
    margin-top: 0.25rem;
  }
  .oneList{
    padding: 0.25rem 0.15rem;
  }
  .colBox{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .colBox img{
    width: 100%;
    height: 100%;

  }
  .date{
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
