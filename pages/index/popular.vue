<template>
    <div class="popular">
      <div class="popLeft">
        <div class="swiper">
          <div class="block">
            <el-carousel height="3.4rem">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="cardBox">
          <div class="cardOne">
            <div class="cardLeft">

            </div>
            <div class="cardRight">
              <p>一段文字</p>
            </div>
            <div class="cardBottom">
              <span>2018-06-26</span><span style="margin-left: 0.2rem;">职引官</span>
              <span style="margin-left: 1.6rem">1200</span>
            </div>
          </div>
          <div class="cardTwo">
            <h3>标题</h3>
            <el-row>
              <el-col :span="6"><div>1</div></el-col>
              <el-col :span="6"><div>2</div></el-col>
              <el-col :span="6"><div>3</div></el-col>
              <el-col :span="6"><div>4</div></el-col>
            </el-row>
            <div>
              <span>2018-06-26</span><span style="margin-left: 0.2rem;">职引官</span>
              <span style="margin-left: 3rem">1200</span>
            </div>
          </div>
        </div>
      </div>
      <div class="popRight">
        <div class="search">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input">
            <el-button slot="append" style="background-color: #f9ce39;color: #fff;border-bottom: 1px solid #f9ce39;border-radius: 0;transform: translateY(-1px)">搜索</el-button>
          </el-input>
        </div>
        <div class="login">
          <div class="header">
            <div class="headImg">头像</div>
            <h3>名字</h3>
            <div class="goOut">退出</div>
          </div>
          <el-row>
            <el-col :span="12"><div style="padding-left: 0.6rem;">发布</div></el-col>
            <el-col :span="12"><div style="padding-left: 0.6rem;">粉丝</div></el-col>
          </el-row>
          <el-row style="margin: 0.2rem 0;">
            <el-col :span="12"><div style="padding-left: 0.6rem;">新消息</div></el-col>
            <el-col :span="12"><div style="padding-left: 0.6rem;">关注</div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><div style="padding-left: 0.6rem;">收藏</div></el-col>
          </el-row>
        </div>
        <div class="hot">
          <div class="hotTitle"><span></span>热榜</div>
          <div class="hotBody">

          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "popular",
      data() {
        return {
          input:""
        }
      },
      methods: {

      }
    }
</script>

<style scoped>
  .popular{
    position: relative;
  }
.popLeft{
  width: 8.5rem;
}
.swiper{
  width: 100%;
  height: 3.4rem;
  overflow: hidden;
  margin-bottom: 0.27rem;
}
.cardBox{
  margin-top: 0.3rem;
}
.cardOne,.cardTwo{
  padding: 0.3rem 0 ;
  border-top: 1px solid #999;
  position: relative;
}
.cardLeft{
  width: 1.58rem;
  height: 1rem;
}
.cardLeft img{
  width: 100%;
  height: 100%;
}
.cardRight{
  position: absolute;
  top: 0.3rem;
  left: 1.8rem;
}
.cardRight p{
  font-weight: 700;
  font-size: 0.2rem;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
.cardBottom{
  position: absolute;
  bottom: 0.3rem;
  left: 1.8rem;
}
.cardTwo h3{
  font-size: 0.2rem;
}
/*最右边样式*/
.popRight{
  position: absolute;
  top: 0;
  right: 0;
  width: 3.8rem;
}
.login{
  margin-top: 0.28rem;
  background-color: #f5f5f5;
  padding-bottom: 0.4rem;
}
.header{
  padding: 0.18rem 0 0.1rem 0;
  text-align: center;
  position: relative;
}
.header .headImg{
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  width: 0.9rem;
  height: 0.9rem;
  background-color: #000;
}
.header .goOut{
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
  width: 0.7rem;
  height: 0.4rem;
  font-size: 0.16rem;
  text-align: center;
  background-color: #3875f2;
  line-height: 0.4rem;
  color: #fff;
  cursor: pointer;
}
.header h3{
  font-size: 0.22rem;
}
.hot{
  margin-top: 0.28rem;
  background-color: #f5f5f5;
  padding: 0.2rem;
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
}




.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
