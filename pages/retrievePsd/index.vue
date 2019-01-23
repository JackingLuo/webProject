<template>
    <div class="retrievePsd">
      <div class="retrieveCont">
        <div class="contTit">
          <div class="back" @click="goBack"><Icon type="ios-arrow-back" size="24"/><span style="font-size: 0.2rem;font-weight: 600">返回</span></div>
          <p style="font-size: 0.2rem">密码找回</p>
        </div>
        <div class="contStep">
         <Steps :current="current">
           <Step title="确定账号" style="width: 39%;"></Step>
           <Step title="安全验证" style="width: 40%;"></Step>
           <Step title="重置密码" style="width: 20%;"></Step>
         </Steps>
        </div>
        <div class="contForm" v-if="showWhat===1">
          <Form inline class="firstForm">
            <FormItem prop="user"  style="width: 100%;">
              <Input placeholder="请输入手机号/邮箱" style="width: 100%;font-size: 12px" size="large">
              <Icon type="md-tablet-portrait" slot="prefix" color="#f0c521" size="20" />
              </Input>
            </FormItem>
            <FormItem prop="password"  style="width: 100%;margin-top: 0.3rem;">
              <Input placeholder="请输入密码" style="width: 100%" size="large">
              <Icon type="ios-key-outline" slot="prefix" color="#f0c521" size="20"/>
              </Input>
            </FormItem>
            <Row style="margin-top: 0.15rem;text-align: right;font-size: 12px;">
              <span style="cursor: pointer;color:#999"><Icon type="ios-key-outline" color="#f0c521"/>找回密码</span>
            </Row>
            <div class="submitBtn" @click="firsLogin">登录</div>
          </Form>
        </div>
        <div class="contSend" v-if="showWhat===2">
          <h2>为了保护账号安全,需要验证手机有效性</h2>
          <p style="font-size: 12px;padding: 0.3rem 0 0.2rem 0;">点击"发送短信",将发一个验证码在您的手机上</p>
          <p>15888888888</p>
          <div class="btn" @click="sendInfo">发送短信</div>
        </div>
        <div class="contVerification" v-if="showWhat===3">
            <h2>验证码已发送至手机</h2>
            <p class="phone">15888888888</p>
            <Row>
              <Col span="16" class="inputBox">
                <Input placeholder="填写验证码" style="width: 100%" size="large">
                <Icon type="ios-chatbubbles" slot="prefix" color="#f0c521" size="20"/>
                </Input>
              </Col>
              <Col span="8">
                <div class="getBox"><span>58</span>S</div>
              </Col>
            </Row>
            <div class="submitBtn" @click="confirmSend">确定</div>
        </div>
        <div class="contReset" v-if="showWhat===4">
          <Form inline class="firstForm">
            <FormItem prop="password"  style="width: 100%;margin-top: 0.3rem;">
              <Input placeholder="请输入密码" style="width: 100%" size="large">
              <Icon type="ios-key-outline" slot="prefix" color="#f0c521" size="20"/>
              </Input>
            </FormItem>
            <FormItem prop="password"  style="width: 100%;margin-top: 0.3rem;">
              <Input placeholder="请输入密码" style="width: 100%" size="large">
              <Icon type="ios-key-outline" slot="prefix" color="#f0c521" size="20"/>
              </Input>
            </FormItem>
            <div class="submitBtn" @click="reset">确定</div>
          </Form>
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
            current:0,
            showWhat:1,
          }
      },
      created(){

      },
      methods:{
        firsLogin(){
          this.current=1;
          this.showWhat=2
        },
        sendInfo(){
          this.current=1;
          this.showWhat=3
        },
        confirmSend(){
          this.current=2;
          this.showWhat=4
        },
        reset(){
          this.current=3;
          this.$Message.success('重置成功');
        },
        goBack(){
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  .retrievePsd{
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
  }
  .retrieveCont{
    width: 7rem;
    position: absolute;
    top: 0.9rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .contTit{
    position: relative;
    text-align: center;
  }
  .back{
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  .contStep{
    width: 100%;
    margin-top: 0.7rem;
  }
  .contForm{
    padding: 0.4rem 1.2rem 0 1.2rem;
  }
/*表单*/
.submitBtn{
  margin-top: 0.45rem;
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
/*发送*/
.contSend{
  padding: 0.7rem 1.2rem 0 1.2rem;
  text-align: center;
}
.btn{
  margin-top: 0.5rem;
  width: 100%;
  height: 0.65rem;
  line-height: 0.65rem;
  border: 1px solid #f0c521;
  border-radius: 4px;
  color: #f0c521;
  cursor: pointer;
}
.btn:hover{
  background-color: #f0c521;
  color:#fff;
}
  /*验证*/
.contVerification{
  padding: 0.7rem 1.2rem 0 1.2rem;
  text-align: center;
}
.phone{
  margin: 0.2rem 0 0.38rem 0;
  font-weight: 600;
}
.getBox{
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  border: 1px solid #dbdbdb;
  border-radius:0 4px 4px 0;
  padding: 1px 0;
  border-left: none;
  /*cursor: pointer;*/
  font-size: 0.28rem;
  font-weight: 600;
  color: #f0c521;
}

  /*重置*/
  .contReset{
    padding: 0.7rem 1.2rem 0 1.2rem;
  }
</style>
