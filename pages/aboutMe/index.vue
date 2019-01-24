<template>
    <div class="aboutMe">
      <div class="myTit">
          <div class="name">
            <span>微笑达人</span>
            <div class="head"></div>
          </div>
          <div class="start">五角星</div>
          <div class="list">
            <Row>
              <Col span="8">
                <div class="liTit"><Icon type="ios-paper-plane" color="#00a0e9"/><span style="padding-left: 0.08rem;">我的发布</span></div>
                <p class="pStyle">1000</p>
              </Col>
              <Col span="8">
                <div class="liTit"><Icon type="md-person-add" color="#00a0e9" /><span style="padding-left: 0.08rem;">我的粉丝</span></div>
                <p class="pStyle">1000</p>
              </Col>
              <Col span="8">
                <div class="liTit"><Icon type="ios-heart" color="#00a0e9" /><span style="padding-left: 0.08rem;">我的关注</span></div>
                <p class="pStyle">1000</p>
              </Col>
            </Row>
          </div>
      </div>
      <div class="botInfo">
        <ul class="botLeft">
          <li :class="whichOne=='myFolder'?'active':''" @click="whichOne='myFolder'">我的资料</li>
          <li :class="whichOne=='myFans'?'active':''" @click="whichOne='myFans'">我的粉丝</li>
          <li :class="whichOne=='myAttention'?'active':''" @click="whichOne='myAttention'">我的关注</li>
          <li :class="whichOne=='myRelease'?'active':''" @click="whichOne='myRelease'">我的发布</li>
          <li :class="whichOne=='myCollect'?'active':''" @click="whichOne='myCollect'">我的收藏</li>
          <li :class="whichOne=='myComment'?'active':''" @click="whichOne='myComment'">我的评论/回答</li>
        </ul>
        <div>
          <component :is ="whichOne"></component>
        </div>
      </div>
  </div>
</template>

<script>
  import myFolder from '../../components/myFolder';
  import myFans from '../../components/myFans';
  import myAttention from '../../components/myAttention';
  import myRelease from '../../components/myRelease';
  import myCollect from '../../components/myCollect';
  import myComment from '../../components/myComment';
    export default {
        name: "index",
      layout:"topNav",
      components:{
        myFolder,
        myFans,
        myAttention,
        myRelease,
        myCollect,
        myComment
      },
      data(){
          return{
            whichOne:'myFolder'
          }
      },
      methods:{

      }
    }
</script>

<style scoped>
.aboutMe{
  width: 100%;
}
  .myTit{
    border: 1px solid #ddd;
    padding: 0.6rem 0 0.5rem 0.6rem;
    position: relative;
  }
  .name{
    position: relative;
    padding-left: 0.8rem;
    font-size: 0.3rem;
    font-weight: 600;
  }
  .head{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width:0.6rem ;
    height: 0.6rem;
    border-radius: 50%;
    background-color: #ddd;
  }
  .start{
    position: absolute;
    top: 0;
    right: 1.15rem;
  }
  .list{
    width: 8.61rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    font-size: 0.26rem;
  }
  .pStyle{
    font-weight: 600;
    font-size: 0.3rem;
    color: #ffd026;
  }
  .botInfo{
    margin-top: 0.26rem;
    padding-left: 2.35rem;
    position: relative;
  }
  .botLeft{
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
  }
  .botLeft li{
    width: 100%;
    height: 0.55rem;
    line-height: 0.55rem;
    text-align: center;
    cursor: pointer;
    font-size: 0.18rem;
  }
  .botLeft .active{
    background-color: #ffd026;
    color: #fff;
  }
</style>
