<template>
  <Carousel
    loop
    v-model="value3"
    :autoplay="setting.autoplay"
    :autoplay-speed="setting.autoplaySpeed"
    :dots="setting.dots"
    :radius-dot="setting.radiusDot"
    :trigger="setting.trigger"
    :arrow="setting.arrow">
    <CarouselItem v-for="(item,index) in imgs" :key="index">
      <div class="imageBOX"><img :src="item.imageUrls instanceof Array?item.imageUrls[0]:item.imageUrls" @click="clickImg(item)"></div>
    </CarouselItem>
  </Carousel>
</template>
<script>
  export default {
    props: {
      imgs: {
        default:[]
      },
    },
    data () {
      return {
        value3: 0,
        setting: {
          autoplay: true,
          autoplaySpeed: 3000,
          dots: 'inside',
          radiusDot: true,
          trigger: 'click',
          arrow: 'hover'
        }
      }
    },
    methods:{
      clickImg(item){
        this.$router.push({path:'/afterReply?id='+item.id})
      }
    }
  }
</script>
<style scoped>
  .imageBOX{
    height: 3.4rem;
    width: 100%;
  }
  .imageBOX img{
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
</style>
