<template>
  <div class="modul" @click="hideLoding($event)" id="over">
    <div class="modelBody">
      <div class="topYeloow"></div>
      <div class="tabs">
        <Tabs :value="value">
          <TabPane label="登录" name="loding">
            <Form inline class="firstForm">
              <FormItem prop="user"  style="width: 100%;">
                <Input placeholder="请输入用户名" style="width: 100%;font-size: 12px" size="large" v-model="userInfo.param.detail.userName">
                <Icon type="md-tablet-portrait" slot="prefix" color="#f0c521" size="20" />
                </Input>
              </FormItem>
              <FormItem prop="password"  style="width: 100%;margin-top: 0.3rem;">
                <Input placeholder="请输入密码" type="password" style="width: 100%" size="large" v-model="userInfo.param.detail.password">
                <Icon type="ios-key-outline" slot="prefix" color="#f0c521" size="20"/>
                </Input>
              </FormItem>
              <Row style="margin-top: 0.15rem;text-align: right;font-size: 12px;">
                <span style="cursor: pointer;color: #999;" @click="$router.push({path:'/retrievePsd'})"><Icon type="ios-key-outline" color="#f0c521"/>找回密码</span>
              </Row>
              <FormItem style="width: 100%; margin-top: 0.45rem;">
                <div class="submitBtn" @click="toLogin">登录</div>
              </FormItem>
            </Form>
          </TabPane>
          <TabPane label="注册" name="register">
            <Form :model="register.user" inline class="secondForm">
              <FormItem style="width: 100%;">
                <Input placeholder="用户名" style="width: 100%;" size="large" v-model="register.param.user.userName">
                <Icon type="md-contact" slot="prefix" color="#f0c521"size="20" />
                </Input>
              </FormItem>
              <FormItem style="width: 100%;">
                <Input placeholder="昵称" style="width: 100%;" size="large" v-model="register.param.user.nickname">
                <Icon type="md-person" slot="prefix" color="#f0c521"size="20" />
                </Input>
              </FormItem>
              <FormItem style="width: 100%;">
                <Input placeholder="手机号" style="width: 100%" size="large" v-model="register.param.user.phone">
                <Icon type="md-tablet-portrait" slot="prefix" color="#f0c521"size="20" />
                </Input>
              </FormItem>
              <FormItem style="width: 100%;">
                <Row>
                  <Col span="16" class="inputBox">
                    <Input placeholder="验证码" style="width: 100%" size="large" v-model="register.param.user.verifyCode">
                    <Icon type="ios-chatbubbles" slot="prefix" color="#f0c521" size="20"/>
                    </Input>
                  </Col>
                  <Col span="8">
                    <div class="getBox" @click="getverifyCode" v-text="veriText"></div>
                  </Col>
                </Row>
              </FormItem>
              <FormItem style="width: 100%;">
                <Input placeholder="请设置登录密码" type="password" style="width: 100%" size="large" v-model="register.param.user.password">
                <Icon type="ios-key-outline" slot="prefix" color="#f0c521" size="20" />
                </Input>
              </FormItem>
              <FormItem style="width: 100%;margin-top: 0.25rem;">
                <div class="submitBtn" @click="toRegister">注册</div>
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </div>
      <div class="modulBot">
        <div class="botLine"><span style="left:0 ;"></span>第三方登录<span style="right: 0;"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "../plugins/axios";
  import {TO_LOGIN,TO_REGISTER,GET_VERIFYCODE} from "~/server/api"
    export default {
      name: "modul",
      props: {
        value: {
          default: ''
        },
      },
        data(){
            return{
              userInfo:{
                param:{
                  detail:{
                    userName:'',
                    password:''
                  }
                }
              },
              verifyCode:{
                param:{
                  type:'1',
                  phone:'',
                }
              },
              register:{
                param:{
                  user: {
                    userName:'',
                    nickname:'',
                    phone:'',
                    verifyCode:'',
                    password:''
                  }
                }
              },
              veriText:'获取验证码',
              flag:true
            }
        },
        methods:{
          //登录事件
          toLogin(){
            axios.post(TO_LOGIN,this.userInfo).then((res)=>{
              if(res.status==200){
                this.$store.commit('getpesonInfo',res.data.data.detail);//存储登录信息
                this.$store.commit('changeLogin',res.data.data.detail.userId);//改变登录状态
                //存一个localstorage
                localStorage.setItem('LOGININFO',JSON.stringify(res.data.data.detail));
                this.$emit("hideModul",false);
              }else{
                this.$Notice.error({
                  title: res.data.errorMsg,
                });
              }
            });
          },
          //注册事件
          toRegister(){
            axios.post(TO_REGISTER,this.register).then((res)=>{
              if(res.status==200&& res.data.resultCode=='0'){
                this.$Message.success(res.data.errorMsg);
                this.$emit("hideModul",false);
              }else{
                this.$Notice.error({
                  title:res.data.errorMsg,
                });
              }
            });
          },
          hideLoding(e){
            if(e.target.id=="over"){
              //点击遮罩层关闭
              this.$emit("hideModul",false)
            }
          },
          getverifyCode(){
            //调取验证码接口,设置定时器
            this.verifyCode.param.phone = this.register.param.user.phone;
            let time = 900;//验证码的过期时间
            if(this.flag){
              this.flag = false;
              let timeFlag = setInterval(()=>{
                if(time>=0){
                  time--;
                  this.veriText = time+'';
                }else{
                  clearInterval(timeFlag);
                  this.flag = true;
                  this.veriText = '获取验证码';
                }
              },1000);
              axios.post(GET_VERIFYCODE,this.verifyCode).then((res)=>{
                if(res.status==200 && res.data.resultCode=='0'){
                  this.$Message.success(res.data.errorMsg);
                }else{
                  this.$Notice.error({
                    title: res.data.errorMsg,
                  });
                }
              });
            }
          }
        }
    }
</script>

<style scoped>
.modul{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;
  background-color: rgba(0,0,0,0.7);
}
  .modelBody{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 5.3rem;
    height: 7.45rem;
    border-radius: 0.05rem;
    background-color: #fff;
    z-index: 99;
  }
  .topYeloow{
    width: 100%;
    height: 0.1rem;
    background-color: #f0c521;
    border-radius: 0.05rem;
  }
.tabs{
  padding:0.3rem 0.25rem ;
}
.submitBtn{
  width: 100%;
  height: 0.6rem;
  cursor: pointer;
  background-color: #3d3d3d;
  text-align: center;
  line-height: 0.6rem;
  color: #f0c521;
  border-radius: 5px;
  font-size: 18px;
}
.submitBtn:hover{
  background-color: #2d2d2d;
}
  .modulBot{
    width: 100%;
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    padding:0 0.7rem ;
    color: #f0c521;
  }
  .botLine{
    width: 100%;
    text-align: center;
    position: relative;
  }
.botLine span{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1px;
  background-color: #f0c521;
}
.getBox{
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  border: 1px solid #dbdbdb;
  border-radius:0 4px 4px 0;
  padding: 1px 0;
  border-left: none;
  cursor: pointer;
}
.getBox:hover{
  background-color: #f0c521;
  color: #fff;
}
</style>
