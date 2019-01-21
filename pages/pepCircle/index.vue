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
    </div>
  </div>
</template>

<script>
  import hot from "../../components/hot";
  import dynamic from "../../components/dynamic";
  import answers from "../../components/answers";
  import search from "../../components/search";
    export default {
        name: "index",
        layout:"topNav",
        components:{
          hot,
          dynamic,
          answers,
          search
        },
        data(){
          return{
            where:"hot",
            howNum:1
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
    width: 9.4rem;
  }
  .topMenu{
    width: 7.7rem;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #999;
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
