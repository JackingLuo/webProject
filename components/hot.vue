<template>
    <div class="hot">
        <div class="oneData">
          <div class="dataTit">
            <h3>有标题</h3>
          </div>
          <div class="popInfo">
            头像和名字(有tit就有paddingLeft)
            <div class="popFollow">关注</div>
          </div>
          <div class="onlyTit">

          </div>
          <div class="noImgTit">
            没有图片时显示
          </div>
          <div class="haveImgTit">
            有图片和title时显示
          </div>
          <div class="onlyImg">
            只有图片是显示
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
  }
  .dataTit{
    padding-bottom: 0.2rem;
  }
  .popInfo{
    position: relative;
    padding-bottom: 0.2rem;
  }
  .popFollow{
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    padding: 0.05rem 0.06rem;
    border: 1px solid #2d8cf0;
    font-size: 12px;
  }
  .noImg{
    font-size: 14px;
  }
  .dataBottom{
    padding: 0.2rem 0;
  }
</style>
