<template>
  <div class="jobDetails">
    <div class="jobInfo">
      <div class="title">
        <div class="imgBox">

        </div>
        <span>首席CFO</span>
      </div>
      <div class="infoDesc">
        <Row style="font-size: 0.16rem;font-weight: 600">
          <Col span="7">三年平均薪资 (50k元/月)</Col>
          <Col span="17">需求量 (人)</Col>
        </Row>
        <Row style="font-size: 0.12rem">
          <Col span="7"><span>一线10000</span><b class="VS">VS</b><span>本地10000</span></Col>
          <Col span="17"><span>一线10000</span><b class="VS">VS</b><span>本地10000</span></Col>
        </Row>
      </div>
      <div class="whileBox">
        <div class="explain">
          <h3>名词解释</h3>
          <div class="detailed">
            这是一些解释
          </div>
        </div>
        <div class="explain">
          <h3>职位要求</h3>
          <div class="detailed">
            这是一些解释
          </div>
        </div>
        <div class="explain">
          <h3>职位内容</h3>
          <div class="detailed">
            这是一些解释
          </div>
        </div>
      </div>
    </div>
    <div class="city">
      <h2>一线以及各个省会的职业行情</h2>
      <div class="table">
        <Row class="tHead">
          <Col span="6">地域</Col>
          <Col span="6" offset="3">需求量</Col>
          <Col span="6" offset="3">三年平均薪资</Col>
        </Row>
        <Row class="tBody">
          <Col span="6">武汉</Col>
          <Col span="6" offset="3">100</Col>
          <Col span="6" offset="3">100000</Col>
        </Row>
        <Row class="tBody">
          <Col span="6">武汉</Col>
          <Col span="6" offset="3">100</Col>
          <Col span="6" offset="3">100000</Col>
        </Row>
        <div class="more"><span style="cursor: pointer" @click="clickMore">展开更多</span></div>
      </div>
    </div>
    <div class="comment">
      <div class="commentTit">相关评论</div>
      <critical></critical>
    </div>
    <rightSwiper></rightSwiper>
  </div>
</template>

<script>
  import rightSwiper from "../../components/rightSwiper";
  import critical from "../../components/critical"
  export default {
    name: "jobDetails",
    layout:"topNav",
    components:{
      rightSwiper,
      critical
    },
    data(){
      return{

      }
    },
    methods:{
      clickMore(){
        console.log("你点击了展示更多");
      },
    }
  }
</script>

<style scoped>
  .jobDetails{
    position: relative;
    padding-right: 4rem;
  }
  .jobInfo{
    padding: 0.28rem;
    background-color: #f5f5f5;
    width: 10.6rem;
  }
  .title{
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    padding-left: 0.7rem;
    font-size: 0.3rem;
    position: relative;
  }
  .imgBox{
    position: absolute;
    top: 0;
    left: 0;
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 50%;
    overflow: hidden;
    background-color: #ddd;
  }
  .infoDesc{
    padding: 0.2rem 0;
  }
  .VS{
    font-size: 14px;
    color: #3875f2;
    padding: 0 0.08rem;
  }
  .whileBox{
    width: 100%;
    padding: 0.3rem 0.3rem 0 0.6rem;
    background-color: #fff;
  }
  .explain{
    padding-bottom: 0.25rem;
  }
  .explain h3{
    max-font-size: 0.26rem;
  }
  .explain .detailed{
    font-size: 0.14rem;
  }
  .city{
    margin-top: 0.3rem;
    border-top: 2px solid #ffd026;
    padding: 0.2rem 0.35rem 0 0.35rem;
    width: 10.6rem;
  }
  .city h2{
    font-size: 0.22rem;
  }
  .table{
    text-align: center;
  }
  .tHead{
    padding: 0.14rem 0;
    border-bottom: 1px solid #f5f5f5;
    font-size: 0.2rem;
    color: #3875f2;
    font-weight: 600;
    margin-bottom: 0.08rem;
  }
  .tBody{
    padding: 0.08rem 0;
  }
  .more{
    width: 100%;
    font-size: 0.12rem;
    text-align: center;
  }
  .comment{
    margin-top: 0.3rem;
    border-top: 2px solid #ffd026;
    width: 10.6rem;
  }
  .commentTit{
    font-size: 0.18rem;
    font-weight: 600;
    padding: 0.2rem 0.3rem;
  }



</style>
