<template>
<div>
  <div class="myComment">
    <div class="comtTit1">
      <h3>面对消费升级</h3>
      <div v-text="type=='1'?'回答':'评论'" :class="type=='1'?'comtLeft':''"></div>
    </div>
    <!--上下两个模板-->
    <!--<div class="comtTit2">-->
      <!--<div>回复<span>张三</span></div>-->
      <!--<p>面对消费者的</p>-->
    <!--</div>-->
    <div style="padding:10px 0 0 1.06rem; position: relative;">
      <div class="comtCont">
        <div class="triangle_border_up">
          <span></span>
        </div>
        <p>这是评论的内容</p>
      </div>
      <div class="headDate">
        <div class="image"></div>
        <p>2018-08-18</p>
      </div>
    </div>
  </div>
  <div class="myComment">
    <!--<div class="comtTit1">-->
      <!--<h3>面对消费升级</h3>-->
      <!--<div v-text="type=='1'?'回答':'评论'" :class="type=='1'?'comtLeft':''"></div>-->
    <!--</div>-->
    <!--上下两个模板-->
    <div class="comtTit2">
    <div>回复<span>张三</span></div>
    <p>面对消费者的</p>
    </div>
    <div style="padding:10px 0 0 1.06rem; position: relative;">
      <div class="comtCont">
        <div class="triangle_border_up">
          <span></span>
        </div>
        <p>这是评论的内容</p>
      </div>
      <div class="headDate">
        <div class="image"></div>
        <p>2018-08-18</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "myComment",
      data(){
          return{
            type:"1",//控制左上角的显示
          }
      }
    }
</script>

<style scoped>
  .myComment{
    border-top: 1px solid #ddd;
    padding-bottom: 0.3rem;
  }
  .comtCont{
    position: relative;
    background-color: #f2f2f2;
    padding: 0.1rem 0.2rem;
  }
  .comtTit1{
    padding: 0.25rem 0 0.25rem 1.06rem;
    position: relative;
  }
  .comtTit1 h3{
    font-size: 16px;
  }
  .comtTit1 div{
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #ffd026;
    font-size: 18px;
  }
  .comtTit1 .comtLeft{
    color: #00a0e9;
  }
  .comtTit2{
    padding-left: 1.06rem;
    padding-top: 0.27rem;
    font-size: 16px;
    font-weight: 600;
    color: #00a0e9;
  }
  .comtTit2 p{
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }
.headDate{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  text-align: center;
}
.headDate .image{
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: #ddd;
  overflow: hidden;
}
.headDate p{
  font-size: 12px;
}








  /*小三角形*/
  .triangle_border_up{
    width:0;
    height:0;
    border-width:0 7px 10px;
    border-style:solid;
    border-color:transparent transparent #f2f2f2;/*透明 透明  灰*/
    /*margin:40px auto;*/
    position:absolute;
    top: -10px;
    left: 15%;
  }
</style>
