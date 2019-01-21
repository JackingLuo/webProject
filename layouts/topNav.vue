<template>
    <div class="all">
      <div class="Topnav">
        <div class="topLeft">
          职引官
        </div>
        <div class="topRight">
            <div class="menuBox">
              <span :class="nowNum==1?'active':''" @click="clickOne">首页</span>
              <span :class="nowNum==2?'active':''" @click="clickTwo">引享圈</span>
              <span :class="nowNum==3?'active':''" @click="clickThree">职位行情</span>
              <span :class="nowNum==4?'active':''" @click="clickFour">测一测</span>
              <div class="quest" @click="clickQuest">我要提问</div>
            </div>
        </div>
        <div class="logo">
          L
        </div>
      </div>
      <div class="myBody">
        <nuxt/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "topNav",
        data() {
          return {
            nowNum:1
          }
        },
      methods:{
        clickOne(){
          this.nowNum = 1
          // this.$route.push({path:"/"});
        },
        clickTwo(){
          this.nowNum = 2
        },
        clickThree(){
          this.nowNum = 3
        },
        clickFour(){
          this.nowNum = 4
        },
        clickQuest(){

        },
      }
    }
</script>

<style scoped>
  body{
    font-size: 14px;
  }
  .all{
    padding: 1rem 2.6rem 0 1.65rem;
  }
  .Topnav{
    z-index: 999;
    background-color:#202125;
    height: 1rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    box-sizing: border-box;
    padding:0 2.6rem 0 3.9rem;
  }
  .logo{
    position: absolute;
    top: 50%;
    left:1.65rem;
    transform: translateY(-50%);
  }
  .topLeft{
    font-size: 0.36rem;
    line-height: 1rem;
  }
  .topRight{
    position: absolute;
    right:2.62rem ;
    top: 50%;
    transform: translateY(-50%);
  }
  .menuBox{
    width: 100%;
    height: 100%;
  }
  .menuBox span{
    display: inline-block;
    width: 1.45rem;
    text-align: center;
    height: 100%;
    line-height: 1rem;
    cursor: pointer;
  }
  .menuBox .active{
    border-bottom: 3px solid #f9ce39;
  }
  .menuBox .quest{
    display: inline-block;
    /*width: 1rem;*/
    /*height: 0.4rem;*/
    border: 1px solid #fff;
    text-align: center;
    line-height: 0.4rem;
    cursor: pointer;
    padding: 0.06rem 0.12rem;
  }
  .menuBox .quest:hover{
    background-color: #f9ce39;
    color: #fff;
  }
  .myBody{
    margin-top: 0.35rem;
  }
</style>
