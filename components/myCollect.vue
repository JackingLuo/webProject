<template>
<div class="myCollect">
  <div class="Card1">
    <div class="cardDate4">收藏时间 :
      <span>2018-08-18</span>
    </div>
    <h2 class="cardTit1">面对什么??</h2>
    <div class="cardCont1">
      <div class="headName">
        <span style="font-size: 16px; font-weight: 600">微笑达人</span>
        <div class="header"><img src=""></div>
      </div>
      <div class="info1">
        卡片1的内容
      </div>
      <div class="botSome">
        <span style="font-size: 12px;color: #999;">2018-08-18</span>
        <div class="rightSome">
          <Row style="text-align: right">
            <Col span="8"><Icon type="ios-eye" color="#aaa" size="20"/><span>1200</span></Col>
            <Col span="8"><Icon type="md-text" color="#aaa" size="18"/><span>12</span></Col>
            <Col span="8"><Icon type="md-thumbs-up" color="#aaa" size="20"/><span>120</span></Col>
          </Row>
        </div>
      </div>
    </div>
    <div class="botLine"></div>
  </div>

  <div class="Card2">
    <div class="cardDate4">收藏时间 :
      <span>2018-08-18</span>
    </div>
    <h2 class="cardTit1">面对什么??</h2>
    <div class="imgList">
      <Row :gutter="25">
        <Col span="6">
          <div>col-6</div>
        </Col>
        <Col span="6">
          <div>col-6</div>
        </Col>
        <Col span="6">
          <div>col-6</div>
        </Col>
        <Col span="6">
          <div>col-6</div>
        </Col>
      </Row>
    </div>
    <div class="botSome">
      <span style="font-size: 12px;color: #999;">2018-08-18</span>
      <div class="rightSome">
        <div style="text-align: right"><Icon type="ios-eye" color="#aaa" size="20"/><span>120</span></div>
      </div>
    </div>
    <div class="botLine"></div>
  </div>

  <div class="Card3">
    <div class="cardDate4">收藏时间 :
      <span>2018-08-18</span>
    </div>
    <h2 class="cardTit1">面对什么??</h2>
    <div class="cardCont1">
      <div class="headName">
        <span style="font-size: 16px; font-weight: 600">微笑达人</span>
        <div class="header"><img src=""></div>
      </div>
      <div class="info3">
        卡片1的内容
      </div>
    </div>
    <div class="imgList">
      <Row :gutter="25">
        <Col span="6">
          <div>col-6</div>
        </Col>
        <Col span="6">
          <div>col-6</div>
        </Col>
        <Col span="6">
          <div>col-6</div>
        </Col>
        <Col span="6">
          <div>col-6</div>
        </Col>
      </Row>
    </div>
    <div class="botLine" style="margin-top: 0.25rem;"></div>
  </div>

  <div class="Card4">
    <div class="cardDate4">收藏时间 :
      <span>2018-08-18</span>
    </div>
    <div class="aCard">
      <div class="headTit">
        <div class="head"></div>首席执行官
      </div>
      <div class="cardBot">
        <Row style="font-size: 0.2rem;color: #ffd026;text-align: center">
          <Col span="12">50K/月</Col>
          <Col span="12">20000</Col>
        </Row>
        <Row style="text-align: center">
          <Col span="12">三年工作平均薪资</Col>
          <Col span="12">需求量 (人)</Col>
        </Row>
        <Row style="margin-top: 0.1rem;text-align: center">
          <Col span="12"><span>一线10000</span><b class="VS">VS</b><span>本地10000</span></Col>
          <Col span="12"><span>一线10000</span><b class="VS">VS</b><span>本地10000</span></Col>
        </Row>
      </div>
    </div>
    <div class="botLine"></div>
  </div>
</div>
</template>

<script>
    export default {
        name: "myCollect"
    }
</script>

<style scoped>
 /*
 卡片1
 */
.cardTit1{
  font-size: 16px;
  padding: 0.2rem 0;
}
 .cardCont1{
   padding-left: 0.3rem;
 }
.headName{
  position: relative;
  padding: 0.2rem 0 0.25rem 0.7rem;
}
.header{
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ddd;
}
.header img{
  width: 100%;
  height: 100%;
}
.info1{
  width: 100%;
  padding: 0.15rem;
  background-color: #f2f2f2;
}
.botSome{
  position: relative;
  padding: 0.2rem 0;
}
.rightSome{
  width: 8.9rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
 /*
卡片2
*/


 /*
  卡片3
  */

.info3{
  padding: 0.2rem;
}


 /*
 卡片4
 */
  .cardDate4{
    padding-top: 0.2rem;
    font-size: 12px;
    color: #999;
  }
  .Card4 .aCard{
    width: 6rem;
    padding: 0.23rem 0 0.2rem 0;
  }
  .head{
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
    background-color: #ddd;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .head img{
    width: 100%;
    height: 100%;
  }
  .headTit{
    height: 0.4rem;
    font-size: 0.24rem;
    font-weight: 600;
    position: relative;
    padding-left: 0.5rem;
  }
  .cardBot{
    padding: 0.2rem 0 0 0;
  }
  .VS{
    font-size: 18px;
    color: #3875f2;
    padding: 0 0.08rem;
  }
  .botLine{
    width: 10rem;
    text-align: left;
    border-top: 1px solid #ddd;
  }
</style>
