<template>
  <div class="body">
    <div class="left">
      <leftNav></leftNav>
    </div>
    <div class="right" style="position: relative">
      <nuxt />
      <div class="popRight">
        <search @giveParent="getInputText"></search>
        <login></login>
        <div class="swiperBox">
          <Carousel v-model="value" dots="outside" radius-dot :loop="false" style="width: 100%;height: 100%; margin-top: 0.23rem;" arrow="never" class="carouselBox">
            <CarouselItem>
              <div class="hot">
                <div class="hotTitle"><span></span>热榜</div>
                <div class="hotBody" v-for="(item,index) in hotList" :key="index">
                  <div class="person">
                    <Row>
                      <Col span="8"><div class="smallHead"><img :src="item.authorUrl"></div></Col>
                      <Col span="9">
                        <div>
                          <h3 style="font-size: 14px;" v-text="item.author"></h3>
                          <p style="margin-top: 0.05rem; font-size: 12px"  v-text="new Date(item.createTime).toLocaleDateString().replace(/\//g,'-')"></p>
                        </div>
                      </Col>
                      <Col span="7" style="text-align: right"><div class="follow" v-text="item.isFollowed>0?'已关注':'+ 关注'"></div></Col>
                    </Row>
                  </div>
                  <!--<div class="info">-->
                    <!--<div class="infoTit" v-text="item.title"></div>-->
                    <!--<div class="infoImg"><img src=""></div>-->
                  <!--</div>-->
                  <div class="textCard info">
                    <h3 v-text="item.title"></h3>
                    <div class="text" v-html="item.contents"></div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <!--<CarouselItem>-->
              <!--<div class="demo-carousel">2</div>-->
            <!--</CarouselItem>-->
            <!--<CarouselItem>-->
              <!--<div class="demo-carousel">3</div>-->
            <!--</CarouselItem>-->
            <!--<CarouselItem>-->
              <!--<div class="demo-carousel">4</div>-->
            <!--</CarouselItem>-->
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftNav from "../components/leftNav";
import search from "../components/search";
import login from "../components/login";
import axios from "../plugins/axios";
import {HOME_PAGE} from "~/server/api"
export default {
  layout:"topNav",
  components: {
    leftNav,
    search,
    login
  },
  data(){
    return{
      value:0,
      hotList:[],
      requestRes:{
        param:{
          positionType:1,
          pageSize:'',
          pageNo:'',
          orderBy:'',
          keyword:'',
          positionName:'',
          slide:'yes',
          recommend:'yes',
          hot:'yes',
        },
        userId:this.$store.state.userId
      }
    }
  },
  created(){
    this.init();
  },
  methods:{
    init(){
      axios.post(HOME_PAGE,this.requestRes).then((res)=>{
        if(res.status==200){
          this.hotList = res.data.data.list;
          let regExp = /\|/;
          for(let i = 0;i<this.hotList.length;i++){
            if(regExp.exec(this.hotList[i].imageUrls)){
              let newArr = this.hotList[i].imageUrls.split('|');
              this.hotList[i].imageUrls =newArr;
            }
          }
        }else{
          this.$Notice.error({
            title: "获取内容失败,请检查当前网络!",
          });
        }
      })
    },
    //获取到子组件返回来的input框输入值
    getInputText(data){

    }
  }
}
</script>

<style>
  .body{
    padding-left: 2.08rem;
  }
  .left{
    position: fixed;
    top: 1.35rem;
    left: 1.65rem;
  }
  /*最右边样式*/
  .popRight{
    position: absolute;
    top: 0;
    right: 0;
    width: 3.8rem;
  }
  .swiperBox{
    position: relative;
  }




  /*右下轮播样式*/
  .hot{
    background-color: #f5f5f5;
    padding: 0.2rem;
    height: auto;
  }
  .hotTitle{
    position: relative;
    font-size: 0.22rem;
    font-weight: 600;
    padding-left: 0.18rem;
    margin-bottom: 0.2rem;
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
    padding:0 0.2rem 0 0;
  }
  .person{
    padding: 0.2rem 0 0.2rem 0.2rem ;
    border-bottom: 1px solid #f5f5f5;
  }
  .smallHead{
    width: 0.58rem;
    height: 0.58rem;
    border-radius: 50%;
    text-align: right;
    background-color: #ddd;
    margin-left: 0.25rem;
    overflow: hidden;
  }
  .smallHead img{
    width: 100%;
    height: 100%;
  }
  .info{
    padding: 0.2rem 0 0.2rem 0.2rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .infoImg{
    padding-top: 0.2rem;
  }
  .textCard .text{
    margin-top: 0.2rem;
    /*display: -webkit-box;*/
    /*!* -webkit-box-orient: vertical; *!*/
    /*!* !autoprefixer: off *!*/
    /*-webkit-box-orient: vertical;*/
    /*-webkit-line-clamp: 2;*/
    /*overflow: hidden;*/
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .follow{
    display: inline-block;
    text-align: right;
    margin-top: 0.1rem;
    border: 1px solid #3875f2;
    text-align: center;
    padding: 0.04rem 0.05rem;
    font-size: 12px;
    cursor: pointer;
  }

</style>

