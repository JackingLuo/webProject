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
      <div class="commentCont">
          <div class="people">
            <h3>微笑达人</h3>
            <p>2018-06-26</p>
            <div class="headImg"></div>
            <div class="good"><Icon type="md-thumbs-up" size="22" color="#ffd026"/><span>188</span></div>
          </div>
          <div class="speech">
            这是评论
          </div>
          <div class="replyBtn" @click="clickReply"><span>回复</span></div>
          <div class="otherReply">
            <div class="people">
              <h3>微笑达人</h3>
              <p style="font-size: 12px">2018-06-26</p>
              <div class="headImg"></div>
              <div class="good"><Icon type="md-thumbs-up" size="20" color="#ffd026"/><span>188</span></div>
            </div>
            <div class="speech">
              这是评论
            </div>
            <div class="replyBtn" @click="clickReply"><span>回复</span></div>
          </div>
          <div class="myReply">
            <div class="people">
              <h3>微笑达人</h3>
              <p style="font-size: 12px">2018-06-26</p>
              <div class="headImg"></div>
              <div class="richText">

              </div>
            </div>
            <div class="textArea">
              <Input v-model="valueArea" type="textarea" wrap="hard"  :rows="6" :autosize="{maxRows: 6,minRows: 6}"  placeholder="请写下您的评论 !" />
              <div class="sendText">发送</div>
            </div>
          </div>
      </div>
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
  import search from "../../components/search";
  import notLogin from "../../components/notLogin";
    export default {
        name: "jobDetails",
        layout:"topNav",
        components:{
          search,
          notLogin,
        },
      data(){
          return{
            value1:0,
            list:[1,2],
            valueArea:''
          }
      },
      methods:{
        getInputText(data){
          console.log(data);
        },
        clickMore(){
          console.log("你点击了展示更多");
        },
        clickReply(){
          console.log("点击了回复");
        }
      }
    }
</script>

<style scoped>
.jobDetails{
  position: relative;
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
.commentCont{
  padding: 0.3rem;
  background-color: #f5f5f5;
}
.people{
  position: relative;
  padding-left: 0.6rem;
  width: 100%;
}
.people h3{
  font-size: 0.2rem;
  font-weight: 500;
}
.people p{
  color: #aaa;
}
.headImg{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #ddd;
}
.headImg img{
  width: 100%;
  height: 100%;
}
.good{
  position: absolute;
  bottom: 0.1rem;
  right: 0;
  cursor: pointer;
}
.good span{
  margin-left: 0.08rem;
  font-size: 16px;
}
.speech{
  padding: 0.2rem 0 0.1rem 0.6rem;
}
.replyBtn{
  text-align: right;
  width: 100%;
  padding: 0.1rem 0;
}
.replyBtn span{
  padding: 0 0.06rem;
  font-size: 12px;
  color: #3875f2;
  cursor: pointer;
}
.otherReply{
  width: 100%;
  background-color: #fff;
  padding: 0.2rem 0.2rem 0 0.2rem;
}
.otherReply .people h3,.myReply .people h3{
  font-size: 0.18rem;
}
.otherReply  .good span,.myReply .good span{
  font-size: 14px;
}
.otherReply .headImg,.myReply .headImg{
  width: 0.4rem;
  height: 0.4rem;
}
.myReply{
  margin-top: 0.15rem;
  background-color: #fff;
  width: 100%;
  padding: 0.2rem;
}
.myReply .people{
  position: relative;
}
.richText{
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 7rem;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: #f5f5f5;
}
.textArea{
  margin-top: 0.1rem;
  position: relative;
}
.sendText{
  position: absolute;
  bottom: 10px;
  right: 20px;
  width: 0.67rem;
  height: 0.3rem;
  line-height: 0.3rem;
  background-color: #ffd026;
  color: #fff;
  text-align: center;
  cursor: pointer;
}






.pepRight{
  width: 3.8rem;
  position: absolute;
  right: 0;
  top: 0;
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
