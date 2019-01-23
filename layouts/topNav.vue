<template>
    <div class="all">
      <div class="Topnav">
          <div style="position: relative;width: 100%;height: 100%;">
            <div class="topLeft">
              职引官
            </div>
            <div class="topRight">
              <div class="menuBox">
                <span :class="nowNum==1?'active':''" @click="clickOne">首页</span>
                <span :class="nowNum==2?'active':''" @click="clickTwo">引享圈</span>
                <span :class="nowNum==3?'active':''" @click="clickThree">职位行情</span>
                <span :class="nowNum==4?'active':''" @click="clickFour">测一测</span>
              </div>
            </div>
            <div class="quest" @click="clickQuest">我要提问</div>
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
      created(){
          if(this.$route.path=="/pepCircle"){
            this.nowNum = 2;
          }else if(this.$route.path=="/jobQuotation"){
            this.nowNum = 3;
          }
      },
      methods:{
        clickOne(){
          this.nowNum = 1;
          this.$router.push({path:"/"});
        },
        clickTwo(){
          this.nowNum = 2;
          this.$router.push({path:"/pepCircle"});
        },
        clickThree(){
          this.nowNum = 3;
          this.$router.push({path:"/jobQuotation"});
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
    padding: 1rem 2.6rem 0 1.6rem;
  }
  .Topnav{
    position: fixed;
    top: 0;
    left: 0;
    z-index:666;
    background-color:#202125;
    height: 1rem;
    width: 100%;
    color: #fff;
    box-sizing: border-box;
    padding:0 2.6rem 0 3.68rem;
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
    padding-left: 0.3rem;
  }
  .topRight{
    position: absolute;
    left:5.8rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .menuBox{
    width: 100%;
    height: 100%;
  }
  .menuBox span{
    display: inline-block;
    width: 1.4rem;
    text-align: center;
    height: 100%;
    line-height: 1rem;
    cursor: pointer;
  }
  .menuBox .active{
    border-bottom: 3px solid #f9ce39;
  }
.quest{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #fff;
    text-align: center;
    line-height: 0.4rem;
    cursor: pointer;
    padding: 0.06rem 0.12rem;
  }
 .quest:hover{
    background-color: #f9ce39;
    color: #fff;
  }
  .myBody{
    margin-top: 0.35rem;
  }
</style>
