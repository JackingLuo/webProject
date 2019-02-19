<template>
    <div class="afterReply">
      <div class="topBox">
        <div class="topTit">
          <h2>总监级的思考</h2>
          <div class="attention">+ 关注</div>
        </div>
        <div class="nameHead">
          <span>微笑</span>
          <div class="imgBox"></div>
        </div>
        <div class="topBot">
          <span style="margin-left: 0.8rem;">2018-8-18</span>
          <span><Icon type="ios-eye" color="#aaa" size="20" style="margin-right: 0.08rem;"/>120</span>
          <span><Icon type="md-text" color="#aaa" size="18" style="margin-right: 0.08rem;"/>1200</span>
          <div class="myCollect" @mouseenter="enterNum=2" @mouseleave="enterNum=1">
            <Icon v-if="enterNum==1" type="md-star-outline" color="#aaa" size="28" style="position: absolute;top: 50%;transform: translateY(-50%);left: -5px;"/>
            <Icon v-if="enterNum==2" type="md-star"  color="#ffd026" size="28" style="position: absolute;top: 50%;transform: translateY(-50%);left: -5px;"/>
            <span style="font-size: 18px;" :class="enterNum==2?'coll':''">收藏</span>
          </div>
        </div>
      </div>
      <div class="explain">
        <h2>名词解释</h2>
        <div class="explainCont">
          <div class="cont">
            一大段文字
          </div>
          <div class="expImg">
            图片
          </div>
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
  export default {
        name: "index",
        layout:"topNav",
        components:{
          rightSwiper,
          critical
        },
        data(){
          return{
            enterNum:1
          }
        },
        created(){
          this.init()
        },
        methods:{
          init(){
            
          }
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
