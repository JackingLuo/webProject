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
    <div class="pepRight">
      <search @giveParent="getInputText"></search>
      <notLogin></notLogin>
      <div class="botSwiper">
        <Carousel v-model="value1" dots="outside" radius-dot :loop="false" style="width: 100%;height: 100%; margin-top: 0.23rem;" arrow="never">
          <CarouselItem>
            <div class="hotRB">
              <div class="hotTitle"><span></span>热榜</div>
              <div class="hotBody">
                <div class="listOne" v-for="(item,index) in list" :key="index">
                  <div class="oneImg"></div>
                  <div class="oneName">名字</div>
                  <div class="oneFollow">+ 关注</div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">3</div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
  import hot from "../../components/hot";
  import dynamic from "../../components/dynamic";
  import answers from "../../components/answers";
  import search from "../../components/search";
  import notLogin from "../../components/notLogin";
    export default {
        name: "index",
        layout:"topNav",
        components:{
          hot,
          dynamic,
          answers,
          search,
          notLogin
        },
        data(){
          return{
            where:"hot",
            howNum:1,
            value1:0,
            list:[1,2]
          }
        },
      methods:{
        clickHot(){
          this.where = "hot";
          this.howNum = 1;
        },
        clickAnswers(){
          this.where = "answers";
          this.howNum = 3;
        },
        getInputText(data){
          console.log(data);
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


  /*右下轮播样式*/
  .hotRB{
    background-color: #f5f5f5;
    padding: 0.2rem;
    height: auto;
  }
  .hotTitle{
    position: relative;
    font-size: 0.22rem;
    font-weight: 600;
    padding-left: 0.18rem;
  }
  .hotTitle span{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 2px;
    height: 100%;
    background-color: #ffd206;
  }
  .hotBody{
    background-color: #fff;
    margin-top: 0.25rem;
  }

.listOne{
  padding: 0.52rem 0 0.48rem 1rem;
  position: relative;
  border-bottom: 1px solid #f5f5f5;
}
.oneFollow{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.2rem;
  color: #2d8cf0;
  padding: 0.05rem 0.07rem;
  border: 1px solid #2d8cf0;
  font-size: 12px;
  cursor: pointer;
}
.oneFollow:hover{
  background-color: #2d8cf0;
  color: #fff;
}
  .oneImg{
    position: absolute;
    top: 50%;
    left: 0.2rem;
    transform: translateY(-50%);
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    overflow: hidden;
    background-color: #bbb;
  }
</style>
