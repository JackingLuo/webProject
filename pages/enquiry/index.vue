<template>
    <div class="enquiry">
      <div class="goBack">
        <span>返回</span>
      </div>
      <div class="enquiryCont">
        <div class="flag">
          <img src="~static/imgs/yellowFlag.png">
        </div>
        <div class="progress">
          <Progress :percent="percentageNum" hide-info :stroke-width="20" />
        </div>
        <div class="problem">
          <div class="proTit">
            <span>1.</span><span>你的身份是 (</span><span class="aOption">A</span><span>)</span>
          </div>
          <div class="proAnswer">
            <p class="aOption">A.在校学生</p>
            <p>B.离职人员</p>
            <p>C.在职人员</p>
          </div>
        </div>
        <div class="btnBox">
          <!--<div class="one"><span>下一题</span></div>-->
          <div class="two">
            <span>上一题</span>
            <span>下一题</span>
          </div>
          <!--<div class="one"><span>上一题</span></div>-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      layout:"topNav",
      data(){
          return{
            percentageNum:25,//第几个/总数*100
          }
      }
    }
</script>

<style scoped>

  .goBack{
    text-align: right;
    padding:0.1rem 0 0.5rem 0;
  }
  .goBack span{
    padding: 12px 36px;
    background-color: #ffd026;
    color: #fff;
    cursor: pointer;
  }
  .enquiryCont{
    background-color: #f5f5f5;
    height: 6.25rem ;
    padding:0.5rem 2.5rem 0.6rem 1.5rem ;
    position: relative;
  }
  .flag{
    position: absolute;
    right: 0.62rem;
    top: 0;
    width: 0.35rem;
  }
  .flag img{
    width: 100%;
  }
  .problem{
    padding-top: 0.4rem;
  }
  .proTit{
    font-size: 24px;
    padding-bottom: 0.3rem;
  }
  .aOption{
    color: #3875f2;
  }
  .proAnswer{
    font-size: 24px;
  }
  .proAnswer p{
    margin-bottom: 0.2rem;
    cursor: pointer;
  }
  .btnBox{
    position: absolute;
    bottom: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  .one span{
    padding: 12px 30px;
    background-color: #ffd026;
    color: #333;
    cursor: pointer;
  }
  .two span{
    padding: 12px 30px;
    background-color: #ffd026;
    color: #333;
    cursor: pointer;
    margin-left: 1rem;
  }
</style>
