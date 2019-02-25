<template>
  <div class="pepCircle">
    <div class="pepLeft">
      <Row class="topMenu">
        <Col span="8"><a :class="howNum==1?'active':'aStyle'" href="javascript:;" @click = "clickHot">热门</a></Col>
        <Col span="8">
          <Dropdown trigger="click" style="width: 100%;">
            <a :class="howNum==2?'active':'aStyle'" href="javascript:void(0)">
              动态
              <Icon type="md-arrow-dropdown" size="26"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem>豆汁儿</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col span="8"><a :class="howNum==3?'active':'aStyle'" href="javascript:;" @click = "clickAnswers">问答</a></Col>
      </Row>
      <component :is ='where'></component>
    </div>
    <rightSwiper :hotPeople="hotPeople" :swiperType="swiperType"></rightSwiper>
  </div>
</template>

<script>
  import hot from "../../components/hot";
  import dynamic from "../../components/dynamic";
  import answers from "../../components/answers";
  import rightSwiper from "../../components/rightSwiper";
  import axios from "../../plugins/axios";
  import {SENSATION} from "~/server/api"
  export default {
    name: "index",
    layout:"topNav",
    components:{
      hot,
      dynamic,
      answers,
      rightSwiper
    },
    data(){
      return{
        where:"hot",
        howNum:1,
        swiperType:2,
        hotPeople:[]
      }
    },
    created(){
      this.init()
    },
    methods:{
      init(){
        //查询右下角的网络红人
        axios.post(SENSATION,{userId:19}).then((res)=>{
          if(res.status==200){
            this.hotPeople = res.data.data.list;
          }else{
            this.$Notice.error({
              title: "获取内容失败,请检查当前网络!",
            });
          }
        });
      },
      clickHot(){
        this.where = "hot";
        this.howNum = 1;
      },
      clickAnswers(){
        this.where = "answers";
        this.howNum = 3;
      }
    }
  }
</script>

<style scoped>
  .pepCircle{
    position: relative;
  }
  .pepLeft{
    width: 10rem;
  }
  .topMenu{
    width: 7.7rem;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .aStyle{
    display: inline-block;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.24rem;
  }
  .active{
    display: inline-block;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.24rem;
    color: #fff;
    background-color: #f9ce39;
  }
  .pepRight{
    width: 3.8rem;
    position: absolute;
    right: 0;
    top: 0;
  }
  a:hover{
    color: #333;
  }
  .active:hover{
    color: #fff;
  }



</style>
