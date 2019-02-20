<template>
    <div class="afterReply">
      <div class="topBox">
        <div class="topTit">
          <h2 v-text="detailNews.title"></h2>
          <!--<div class="attention" v-text="detailNews.isFollowed>0?'已关注':'+ 关注'" @click="clickFollow"></div>-->
        </div>
        <div class="nameHead">
          <span  v-text="detailNews.author"></span>
          <div class="imgBox"><img :src="detailNews.authorUrl"></div>
        </div>
        <div class="topBot">
          <span style="margin-left: 0.8rem;"  v-text="new Date(detailNews.createTime).toLocaleDateString().replace(/\//g,'-')"></span>
          <span><Icon type="ios-eye" color="#aaa" size="20" style="margin-right: 0.08rem;" v-text="detailNews.queryCount"/></span>
          <span><Icon type="md-text" color="#aaa" size="18" style="margin-right: 0.08rem;" v-text="detailNews.commentCount"/></span>
          <div class="myCollect" @mouseenter="enterNum=2" @mouseleave="enterNum=1">
            <Icon v-if="enterNum==1" type="md-star-outline" color="#aaa" size="28" style="position: absolute;top: 50%;transform: translateY(-50%);left: -5px;"/>
            <Icon v-if="enterNum==2" type="md-star"  color="#ffd026" size="28" style="position: absolute;top: 50%;transform: translateY(-50%);left: -5px;"/>
            <span style="font-size: 18px;" :class="enterNum==2?'coll':''" v-html="detailNews.isCollect=='Y'?'已收藏':'收藏'" @click="collection"></span>
          </div>
        </div>
      </div>
      <div class="explain">
        <h2>名词解释</h2>
        <div class="explainCont">
          <div class="cont" v-html="detailNews.contents"></div>
          <!--<div class="expImg" v-for="(item,index) in detailNews.imageUrls" :key="index"><img :src="item"></div>-->
        </div>
        </div>

    <div class="botLine">
      <critical></critical>
    </div>
    <rightSwiper></rightSwiper>
    </div>
</template>

<script>
  import rightSwiper from "../../components/rightSwiper";
  import critical from "../../components/critical";
  import axios from "../../plugins/axios";
  import {NEWS_CONTENT,ADD_COLLECT,DEL_COLLECT,ADD_FOLLOW,DEL_FOLLOW} from "~/server/api"
  export default {
        name: "index",
        layout:"topNav",
        components:{
          rightSwiper,
          critical
        },
        data(){
          return{
            enterNum:1,
            detailNews:{},
            followRes:{
              param:{
                toUserId:0,
              },
              userId:19,
            },
            collectRes:{
              param:{
                mainId:0,
                type:'news'
              },
              userId:19,
            },
            requestRes:{
              param:{
                id:0,
              },
              userId:19,
            }
          }
        },
        created(){
          this.requestRes.param.id = this.$route.query.id;
          this.collectRes.param.mainId = this.$route.query.id;
          this.init()
        },
        methods:{
          init(){
            axios.post(NEWS_CONTENT,this.requestRes).then((res)=>{
              if(res.status==200){
                this.detailNews = res.data.data.detailNews;
                let regExp = /\|/;
                let newArr = null;
                if(regExp.exec(this.detailNews.imageUrls)){
                  newArr = this.detailNews.imageUrls.split('|');
                }else{
                  newArr = [];
                  newArr.push(this.detailNews.imageUrls);
                }
                this.detailNews.imageUrls =newArr;
              }else{
                this.$Notice.error({
                  title: "获取内容失败,请检查当前网络!",
                });
              }
            })
          },
          collection(){
            if(this.detailNews.isCollect=='Y'){
              axios.post(DEL_COLLECT,this.collectRes).then((res)=>{
                if(res.status==200 && res.data.resultCode==0){
                  if(res.data.extra.ifCollect==0){
                    this.detailNews.isCollect ='N';
                  }
                }else{
                  this.$Notice.error({
                    title: res.data.errorMsg,
                  });
                }
              })
            }else{
              axios.post(ADD_COLLECT,this.collectRes).then((res)=>{
                if(res.status==200 && res.data.resultCode==0){
                  if(res.data.extra.ifCollect==1){
                    this.detailNews.isCollect ='Y';
                  }
                }else{
                  this.$Notice.error({
                    title: res.data.errorMsg,
                  });
                }
              })
            }
          },
          // clickFollow(){
          //   if(this.detailNews.isFollowed>0){//已关注
          //     axios.post(DEL_FOLLOW,this.followRes).then((res)=>{
          //       if(res.status==200){
          //         console.log(res.data);
          //       }else{
          //         this.$Notice.error({
          //           title: res.data.errorMsg,
          //         });
          //       }
          //     })
          //   }else{
          //     axios.post(ADD_FOLLOW,this.followRes).then((res)=>{
          //       if(res.status==200){
          //         console.log(res.data);
          //       }else{
          //         this.$Notice.error({
          //           title: res.data.errorMsg,
          //         });
          //       }
          //     })
          //   }
          // }
        }
    }
</script>

<style scoped>
.afterReply{
  position: relative;
  padding-right: 4.4rem;
}
  .topBox{
    border: 1px solid #ddd;
    padding: 0.25rem 0.6rem 0.25rem 0.28rem;
  }
  .topTit{
    position: relative;
  }
  .topTit h2{
    font-size: 0.28rem;
  }
  .attention{
    position: absolute;
    top: 0;
    right: 0;
    background-color: #3875f2;
    padding: 0.04rem 0.1rem;
    color: #fff;
    cursor: pointer;
  }
  .nameHead{
    padding: 0.28rem 0 0.28rem 0.68rem;
    position: relative;
  }
  .nameHead .imgBox{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #ddd;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
.nameHead .imgBox img{
  width: 100%;
  height: 100%;
}
  .topBot{
    position: relative;
  }
  .myCollect{
    padding-left: 23px;
    position: absolute;
    right: 0.98rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .coll{
    color: #ffd026;
  }
  .topBot>span{
    margin-left: 1.2rem;
  }
  .myCollect{
    cursor: pointer;
    vertical-align:middle;
  }
.explain{
  margin-top: 0.3rem;
  border-top: 2px solid #ffd026;
}
.explain h2{
  padding-top: 0.25rem;
}
.explainCont .cont{
  padding:0.2rem 0 0.25rem 0;
}

  .botLine{
    margin-top: 0.3rem;
    border-top: 2px solid #ffd026;
    padding-top: 0.3rem;
  }
</style>
