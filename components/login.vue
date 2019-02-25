<template>
  <div class="login">
    <div class="header">
      <div class="headImg"><img :src="$store.state.pesonInfo.headPortrait" v-if="$store.state.pesonInfo.headPortrait"></div>
      <h3 v-text="$store.state.pesonInfo.nickname"></h3>
      <div class="goOut" @click="goOut">退出</div>
    </div>
    <Row>
      <Col span="12"><div style="padding-left: 0.6rem;">发布 {{$store.state.pesonInfo.publishCount?$store.state.pesonInfo.publishCount:'0'}}</div></Col>
      <Col span="12"><div style="padding-left: 0.6rem;">粉丝 {{$store.state.pesonInfo.beFollowedCount?$store.state.pesonInfo.beFollowedCount:'0'}}</div></Col>
    </Row>
    <Row style="padding: 0.13rem 0;">
      <Col span="12"><div style="padding-left: 0.6rem;">新消息 {{$store.state.pesonInfo.newMessageCount?$store.state.pesonInfo.newMessageCount:'0'}}</div></Col>
      <Col span="12"><div style="padding-left: 0.6rem;">关注 {{$store.state.pesonInfo.followCount?$store.state.pesonInfo.followCount:'0'}}</div></Col>
    </Row>
    <Row>
      <Col span="12"><div style="padding-left: 0.6rem;">收藏 {{$store.state.pesonInfo.collectCount?$store.state.pesonInfo.collectCount:'0'}}</div></Col>
    </Row>
  </div>
</template>
<script>
  export default {

    data () {
      return {

      }
    },
    methods:{
      goOut(){
        if(process.browser){
          localStorage.removeItem('LOGININFO');
          this.$store.commit('outLogin');
        }
      }
    }
  }
</script>
<style scoped>
  .login{
    margin-top: 0.23rem;
    background-color: #f5f5f5;
    padding-bottom: 0.4rem;
    border-bottom: 2px solid #ffd026;
  }
  .header{
    padding: 0.18rem 0 0.1rem 0;
    text-align: center;
    position: relative;
  }
  .header .headImg{
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    width: 0.9rem;
    height: 0.9rem;
    background-color: #ddd;
  }
  .header .goOut{
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
    width: 0.7rem;
    height: 0.4rem;
    font-size: 0.16rem;
    text-align: center;
    background-color: #3875f2;
    line-height: 0.4rem;
    color: #fff;
    cursor: pointer;
  }
  .header h3{
    font-size: 0.22rem;
  }
</style>
