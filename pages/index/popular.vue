<template>
    <div class="popular">
      <div class="popLeft">
        <div class="swiper">
          <swiper :imgs="imgs"></swiper>
        </div>
        <div class="cardBox">
          <div class="cardOne">
            <div class="cardLeft">

            </div>
            <div class="cardRight">
              <p>一段文字</p>
            </div>
            <div class="cardBottom" style="font-size: 12px">
              <span>2018-06-26</span><span style="margin-left: 0.2rem;">职引官</span>
              <span style="margin-left: 1.6rem;">1200</span>
            </div>
          </div>
          <div class="cardTwo">
            <h3>标题</h3>
            <Row>
              <Col span="6">1</Col>
              <Col span="6">2</Col>
              <Col span="6">3</Col>
              <Col span="6">4</Col>
            </Row>
            <div style="font-size: 12px">
              <span>2018-06-26</span><span style="margin-left: 0.2rem;">职引官</span>
              <span style="margin-left: 3rem">1200</span>
            </div>
          </div>
        </div>
      </div>
      <div class="popRight">
        <search @giveParent="getInputText"></search>
        <login></login>
       <div class="swiperBox">
         <Carousel v-model="value" dots="outside" radius-dot :loop="false" style="width: 100%;height: 100%; margin-top: 0.23rem;" arrow="never">
           <CarouselItem>
             <div class="hot">
               <div class="hotTitle"><span></span>热榜</div>
               <div class="hotBody">
                 <div class="person">
                   <Row>
                     <Col span="8"><div class="smallHead"></div></Col>
                     <Col span="9">
                       <div>
                         <h3 style="font-size: 14px;">名字</h3>
                         <p style="margin-top: 0.05rem; font-size: 12px">2018-06-26</p>
                       </div>
                     </Col>
                     <Col span="7" style="text-align: right"><div class="follow">+ 关注</div></Col>
                   </Row>
                 </div>
                 <div class="info">
                   <div class="infoTit">标题</div>
                   <div class="infoImg">图片</div>
                 </div>
                 <div class="textCard info">
                   <h3>标题</h3>
                   <p class="text">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
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
           <CarouselItem>
             <div class="demo-carousel">4</div>
           </CarouselItem>
         </Carousel>
       </div>
      </div>
    </div>
</template>

<script>
  import '../../assets/css/popularCss.css';
  import swiper from "../../components/swiper";
  import search from "../../components/search";
  import login from "../../components/login";
    export default {
      name: "popular",
      components:{
        swiper,
        search,
        login
      },
      data() {
        return {
          imgs:[
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548065288552&di=3685ffd74b9a024815a8d7c0f7421e4e&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F728da9773912b31b38b68ca38b18367adbb4e166.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548065256735&di=ef3feffcfdf84d449455d3bb3bfba3e6&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F18d8bc3eb13533fa65021ddba5d3fd1f40345b8b.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548065288552&di=3685ffd74b9a024815a8d7c0f7421e4e&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F728da9773912b31b38b68ca38b18367adbb4e166.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548065256735&di=ef3feffcfdf84d449455d3bb3bfba3e6&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F18d8bc3eb13533fa65021ddba5d3fd1f40345b8b.jpg"
          ],
          value:0,
        }
      },
      mounted(){

      },
      methods: {
        //获取到子组件返回来的input框输入值
        getInputText(data){
          console.log(data);
        }
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



.hot{
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
  padding:0 0.2rem 0 0;
}
.person{
  padding: 0.2rem 0 0.2rem 0.2rem ;
  border-bottom: 1px solid #999;
}
.smallHead{
  width: 0.58rem;
  height: 0.58rem;
  border-radius: 50%;
  text-align: right;
  background-color: red;
  margin-left: 0.25rem;
}
.info{
  padding: 0.2rem 0 0.2rem 0.2rem;
  border-bottom: 1px solid #999;
}
.infoImg{
  padding-top: 0.2rem;
}
.textCard .text{
  margin-top: 0.2rem;
  display: -webkit-box;
  /* -webkit-box-orient: vertical; */
  /* !autoprefixer: off */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
  .follow{
    display: inline-block;
    text-align: right;
    margin-top: 0.1rem;
    border: 1px solid #3875f2;
    text-align: center;
    padding: 0.04rem 0.05rem;
    font-size: 12px;
    cursor: pointer;
  }
.swiperBox{
  position: relative;
}


</style>
