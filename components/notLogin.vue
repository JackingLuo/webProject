<template>
  <div class="notLogin">
    <div class="notHead"><Icon type="md-contact" color="#bbb" size="90"/></div>
    <p class="hello">Hello，你好！</p>
    <Row style="font-size: 0.3rem;font-weight: 700">
      <Col span="12" style="padding-right: 0.45rem;text-align: right;">
        <span class="cusol" @click="login">登录</span>
      </Col>
      <Col span="12" style="padding-left: 0.45rem;text-align: left;">
        <span class="cusol" @click="register">注册</span>
      </Col>
    </Row>
    <modul v-if="show" :value="value" @hideModul="hidemodul"></modul>
  </div>
</template>

<script>
  import modul from "./modul";
    export default {
      name: "notLogin",
      components:{
        modul
      },
      data(){
          return{
            value:"loding",
            show:false
          }
      },
      methods:{
        login(){
          this.value="loding";
          this.show = true;
        },
        register(){
          this.value="register";
          this.show = true;
        },
        hidemodul(data){
          this.show = data;
        }
      }
    }
</script>

<style scoped>
.notLogin{
  background-color: #f5f5f5;
  padding: 0.3rem;
  text-align: center;
  margin-top: 0.2rem;
}
  .notHead{
    display: inline-block;
    width: 100px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
  }
.hello{
  margin-bottom:0.28rem ;
  font-size: 18px;
}
  .cusol{
    cursor: pointer;
  }
</style>
