<template>
<div class="myFolder">
    <Form :model="formItem" :label-width="80">
      <FormItem label="头像 :">
        <div class="uploadBox">
          <div class="changeImg">修改图片</div>
          <Upload action="//jsonplaceholder.typicode.com/posts/">
            <div class="upBox">
              <Icon type="ios-camera" size="45" color="#fff"></Icon>
            </div>
          </Upload>
        </div>
      </FormItem>
      <FormItem label="昵称 :">
        <div class="canChange">
          <span style="margin-right: 8px;">昵称</span>
          <Icon type="ios-create" color="#00a0e9" size="14" style="cursor: pointer" @click="modelShow(index)"/>
        </div>
      </FormItem>
      <FormItem label="性别 :">
        <RadioGroup v-model="formItem.sex">
          <Radio label="man">男</Radio>
          <Radio label="women">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="学历 :">
        <RadioGroup v-model="formItem.education">
          <Radio label="1">高中及以下</Radio>
          <Radio label="2">专科</Radio>
          <Radio label="3">本科</Radio>
          <Radio label="4">研究生/硕士</Radio>
          <Radio label="5">博士</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="学校 :">
        <div class="canChange">
          <span style="margin-right: 8px;">黄冈师范大学</span>
          <Icon type="ios-create" color="#00a0e9" size="14" style="cursor: pointer"/>
        </div>
      </FormItem>
      <FormItem label="专业 :">
        <div class="canChange">
          <span style="margin-right: 8px;">工商管理</span>
          <Icon type="ios-create" color="#00a0e9" size="14" style="cursor: pointer"/>
        </div>
      </FormItem>
      <FormItem label="所在地 :">
        <Select v-model="formItem.province" style="width:150px" placeholder="请选择省份">
          <Option v-for="item in provinceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="formItem.city" style="width:150px" placeholder="请选择城市">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
    </Form>
  <div class="submit"><span>保存</span></div>


  <Modal v-model="showModel" width="360">
    <p slot="header" style="text-align:center">
      <span>请输入您的新昵称</span>
    </p>
    <div style="text-align:center">
      <Input v-model="value" autofocus style="width: 300px" />
    </div>
    <div slot="footer" class="footerBtn">
      <Row>
        <Col span="12">
          <Button type="primary" size="large"  @click="showModel=false">取消</Button>
        </Col>
        <Col span="12">
          <Button type="primary" size="large"  @click="clickOK">确定</Button>
        </Col>
      </Row>
    </div>
  </Modal>
</div>
</template>

<script>
    export default {
        name: "myFolder",
      data(){
        return{
          value:'',
          formItem:{
            sex:'man',
            education:'',
            province:'',
            city:'',
          },
          provinceList:[
            {
              "label": "北京市",
              "value": "110000"
            },
            {
              "label": "天津市",
              "value": "120000"
            },
            {
              "label": "河北省",
              "value": "130000"
            },
            {
              "label": "山西省",
              "value": "140000"
            },
            {
              "label": "内蒙古自治区",
              "value": "150000"
            },
            {
              "label": "辽宁省",
              "value": "210000"
            },
            {
              "label": "吉林省",
              "value": "220000"
            },
            {
              "label": "黑龙江省",
              "value": "230000"
            },
            {
              "label": "上海市",
              "value": "310000"
            },
            {
              "label": "江苏省",
              "value": "320000"
            },
            {
              "label": "浙江省",
              "value": "330000"
            },
            {
              "label": "安徽省",
              "value": "340000"
            },
            {
              "label": "福建省",
              "value": "350000"
            },
            {
              "label": "江西省",
              "value": "360000"
            },
            {
              "label": "山东省",
              "value": "370000"
            },
            {
              "label": "河南省",
              "value": "410000"
            },
            {
              "label": "湖北省",
              "value": "420000"
            },
            {
              "label": "湖南省",
              "value": "430000"
            },
            {
              "label": "广东省",
              "value": "440000"
            },
            {
              "label": "广西壮族自治区",
              "value": "450000"
            },
            {
              "label": "海南省",
              "value": "460000"
            },
            {
              "label": "重庆市",
              "value": "500000"
            },
            {
              "label": "四川省",
              "value": "510000"
            },
            {
              "label": "贵州省",
              "value": "520000"
            },
            {
              "label": "云南省",
              "value": "530000"
            },
            {
              "label": "西藏自治区",
              "value": "540000"
            },
            {
              "label": "陕西省",
              "value": "610000"
            },
            {
              "label": "甘肃省",
              "value": "620000"
            },
            {
              "label": "青海省",
              "value": "630000"
            },
            {
              "label": "宁夏回族自治区",
              "value": "640000"
            },
            {
              "label": "新疆维吾尔自治区",
              "value": "650000"
            },
            {
              "label": "台湾省",
              "value": "710000"
            },
            {
              "label": "香港特别行政区",
              "value": "810000"
            },
            {
              "label": "澳门特别行政区",
              "value": "820000"
            }
          ],
          cityList:[],
          showModel:false,
        }
      },
      methods:{
        clickOK(){
          console.log(this.value);
        },
        modelShow(data){
          console.log(data);//可以通过点击传过来的参数判断是哪一个修改图标
          this.showModel=true
        }
      }
    }
</script>

<style scoped>
.myFolder{
  border: 1px solid #ddd;
  padding: 0.54rem 0 0.44rem 0;
  font-size: 14px;
}
  .uploadBox{
    position: relative;
    /*padding-left: 1.2rem;*/
  }
  .header{
    position: absolute;
    top: 0;
    left: 0.5rem;
  }
  .changeImg{
    position: absolute;
    left: 1.6rem;
    bottom: 0;
    cursor: pointer;
    color: #00a0e9;
  }
  .upBox{
    width: 1.2rem;
    height: 1.2rem;
    background-color: #ddd;
    text-align: center;
    line-height: 1.2rem;
    cursor: pointer;
    font-size: 14px;
  }
  .submit{
    position:relative;
    width: 100%;
    padding: 0.2rem;
    margin-top: 0.3rem;
  }
  .submit span{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 30%;
    font-size: 14px;
    padding: 5px 20px;
    background-color: #ffd026;
    color: #000;
    cursor: pointer;

  }
  .footerBtn{
    text-align: center;
  }
</style>
