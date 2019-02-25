<template>
    <div class="popular">
      <div class="popLeft">
        <div class="swiper">
          <swiper :imgs="imgs"></swiper>
        </div>
        <div class="cardBox" v-for="(item,index) in imgs" :key="index">
            <div class="cardOne" v-if="typeof item.imageUrls=='string'">
              <div class="cardLeft">
                <img :src="item.imageUrls">
              </div>
              <div class="cardRight">
                <p v-text="item.title"></p>
              </div>
              <div class="cardBottom" style="font-size: 12px;margin-top: 15px;">
                <span v-text="new Date(item.createTime).toLocaleDateString().replace(/\//g,'-')"></span><span style="margin-left: 0.2rem;" v-text="item.author"></span>
                <span style="margin-left: 1.6rem;"><Icon type="ios-eye" size="20" />{{item.queryCount}}</span>
              </div>
            </div>
            <div class="cardTwo" v-else>
              <h3 v-text="item.title"></h3>
              <Row>
                <Col :span="1/item.imageUrls.length*24" v-for="(items,inde) in item.imageUrls" :key="inde"><img :src="items" width="90%"></Col>
              </Row>
              <div style="font-size: 12px">
                <span v-text="new Date(item.createTime).toLocaleDateString().replace(/\//g,'-')"></span><span style="margin-left: 0.2rem;"  v-text="item.author"></span>
                <span style="margin-left: 3rem"><Icon type="ios-eye" size="20"/>{{item.queryCount}}</span>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
  import swiper from "../../components/swiper";
  import axios from "../../plugins/axios";
  import {HOME_PAGE} from "~/server/api"
  export default {
      name: "popular",
      components: {
        swiper,
      },
      data() {
        return {
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
          },
          imgs:[],
          value:0,
        }
      },
      created(){
        this.init()
      },
      mounted(){

      },
      methods: {
        init(){
          axios.post(HOME_PAGE,this.requestRes).then((res)=>{
            if(res.status==200){
              this.imgs = res.data.data.list;
              let regExp = /\|/;
              for(let i = 0;i<this.imgs.length;i++){
                if(regExp.exec(this.imgs[i].imageUrls)){
                  let newArr = this.imgs[i].imageUrls.split('|');
                  this.imgs[i].imageUrls =newArr;
                }
              }
            }else{
              this.$Notice.error({
                title: "获取内容失败,请检查当前网络!",
              });
            }
          })
        },
      }
    }
</script>

<style scoped>
  .popular{
    position: relative;
  }
.popLeft{
  width: 8.5rem;
}
.swiper{
  width: 100%;
  height: 3.4rem;
  overflow: hidden;
  margin-bottom: 0.27rem;
}
.cardBox{
  /*margin-top: 0.3rem;*/
}
.cardOne,.cardTwo{
  padding: 0.3rem 0 ;
  border-top: 1px solid #f5f5f5;
  position: relative;
}
.cardLeft{
  width: 1.58rem;
  height: 1rem;
}
.cardLeft img{
  width: 100%;
  height: 100%;
}
.cardRight{
  position: absolute;
  top: 0.3rem;
  left: 1.8rem;
}
.cardRight p{
  font-weight: 700;
  font-size: 0.2rem;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
.cardBottom{
  position: absolute;
  bottom: 0.3rem;
  left: 1.8rem;
}
.cardTwo h3{
  font-size: 0.2rem;
  padding-bottom: 0.2rem;
}


</style>
