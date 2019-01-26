<template>
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
</template>

<script>
    export default {
        name: "critical",
      data(){
          return{
            valueArea:''
          }
      },
      methods:{
        clickReply(){
          console.log("点击了回复");
        }
      }
    }
</script>

<style scoped>
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
    padding: 3px 15px;
    line-height: 0.3rem;
    background-color: #ffd026;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

</style>
