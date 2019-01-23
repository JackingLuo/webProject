<template>
  <div class="modul" @click="hideLoding($event)" id="over">
    <div class="modelBody">
      <div class="topYeloow"></div>
      <div class="tabs">
        <Tabs value="loding">
          <TabPane label="登录" name="loding">
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
                <span style="cursor: pointer;color: #999;"><Icon type="ios-key-outline" color="#f0c521"/>找回密码</span>
              </Row>
              <FormItem style="width: 100%; margin-top: 0.45rem;">
                <div class="submitBtn">登录</div>
              </FormItem>
            </Form>
          </TabPane>
          <TabPane label="注册" name="register">
            <Form :model="formInline" inline class="secondForm">
              <FormItem style="width: 100%;">
                <Input placeholder="昵称" style="width: 100%;" size="large">
                <Icon type="md-contact" slot="prefix" color="#f0c521"size="20" />
                </Input>
              </FormItem>
              <FormItem style="width: 100%;">
                <Input placeholder="手机号" style="width: 100%" size="large">
                <Icon type="md-tablet-portrait" slot="prefix" color="#f0c521"size="20" />
                </Input>
              </FormItem>
              <FormItem style="width: 100%;">
                <Row>
                  <Col span="16" class="inputBox">
                    <Input placeholder="手机号" style="width: 100%" size="large">
                    <Icon type="ios-chatbubbles" slot="prefix" color="#f0c521" size="20"/>
                    </Input>
                  </Col>
                  <Col span="8">
                    <div class="getBox">获取验证码</div>
                  </Col>
                </Row>
              </FormItem>
              <FormItem style="width: 100%;">
                <Input placeholder="请设置登录密码" style="width: 100%" size="large">
                <Icon type="ios-key-outline" slot="prefix" color="#f0c521" size="20" />
                </Input>
              </FormItem>
              <FormItem style="width: 100%;margin-top: 0.25rem;">
                <div class="submitBtn">注册</div>
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
    export default {
        name: "modul",
        data(){
            return{
              formInline: {

              },

            }
        },
        methods:{
          hideLoding(e){
            if(e.target.id=="over"){
              this.$emit("hideModul",false)
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
    bottom: 1.7rem;
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
