<template>
    <div class="hot">
        <div class="oneData">
          <div class="dataTit">
            <h3>有标题</h3>
          </div>

          <div class="haveImgTit">
            <div class="popInfo padd45">
              <div class="haveTitHead headImg"></div>
              <span>名字</span>
            </div>
            <div class="imgTitBody">
              <Row>
                <Col span="11">有标题有图片的文字内容</Col>
                <Col span="8"  offset="5"><img width='100%' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548065288552&di=3685ffd74b9a024815a8d7c0f7421e4e&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F728da9773912b31b38b68ca38b18367adbb4e166.jpg"></Col>
              </Row>
            </div>
          </div>

          <div class="onlyImg">
            <div class="popInfo padd7">
              <div class="headImg"></div>
              <span>名字</span>
              <div class="popFollow">+ 关注</div>
            </div>
            <div class="imgBody">
             <p class="imgText">文字</p>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548065288552&di=3685ffd74b9a024815a8d7c0f7421e4e&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F728da9773912b31b38b68ca38b18367adbb4e166.jpg">
            </div>
          </div>

          <div class="onlyTit">
            <div class="popInfo padd45">
              <div class="haveTitHead headImg"></div>
              <span>名字</span>
            </div>
            <div class="titBody">
              3.只有标题时显示
            </div>
          </div>

          <div class="noImgTit">
            <div class="popInfo padd7">
              <div class="headImg"></div>
              <span>名字</span>
              <div class="popFollow">+ 关注</div>
            </div>
            <div class="nothingBody">
              4.没有图片和标题时显示
            </div>
          </div>
          <div class="dataBottom">
            <span>2018-06-26</span>
            <span style="margin-left: 1rem;cursor: pointer;"><Icon type="ios-eye" style="margin-right: 0.05rem;"/>1200</span>
            <span style="margin-left: 1rem;cursor: pointer;"><Icon type="md-text" style="margin-right: 0.05rem;"/>36</span>
            <span style="margin-left: 1rem;cursor: pointer;"><Icon type="md-thumbs-up" style="margin-right: 0.05rem;"/>102</span>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hot"
    }
</script>

<style scoped>
  .oneData{
    padding-top: 0.25rem;
    border-bottom: 1px solid #999;
  }
  .dataTit{
    /*padding-bottom: 0.2rem;*/
  }
  .popInfo{
    position: relative;
    margin-bottom: 0.2rem;
  }
  .popFollow{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    color: #2d8cf0;
    padding: 0.05rem 0.07rem;
    border: 1px solid #2d8cf0;
    font-size: 12px;
    cursor: pointer;
  }
  .popFollow:hover{
    background-color: #2d8cf0;
    color: #fff;
  }
  .noImg{
    font-size: 14px;
  }
  .headImg{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    display: inline-block;
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    overflow: hidden;
    background-color: #ddd;
  }
  .haveTitHead{
    width: 0.45rem;
    height: 0.45rem;
  }
  .headImg img{
    width: 100%;
    height: 100%;
  }
  .padd45{
    padding-left: 0.5rem;
  }
  .padd7{
    padding-left: 0.7rem;
    margin-bottom: 0.3rem;
  }
  .onlyImg,.noImgTit{
    padding: 0.4rem 0 0 0;
  }
  .haveImgTit,.onlyTit{
    padding: 0.4rem 0 0 0.35rem;
    /*padding-left: 0.35rem;*/
  }
  .dataBottom{
    padding: 0.2rem 0;
  }
  .imgText{
    margin-bottom: 0.24rem;
    display: -webkit-box;
    /* -webkit-box-orient: vertical; */
    /* !autoprefixer: off */
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .imgBody img{
    width: 4rem;
  }
</style>
