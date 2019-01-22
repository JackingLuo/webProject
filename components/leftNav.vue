<template>
  <div class="leftNav">
    <ul class="leftUl" @click="choice($event)" ref="list">
      <li :class="nowLeft==0?'active':''"><nuxt-link :to="{path:'/popular'}">热门</nuxt-link></li>
      <li :class="nowLeft==1?'active':''"><nuxt-link :to="{path:'/saler'}">销售/客服/市场</nuxt-link></li>
      <li :class="nowLeft==2?'active':''"><nuxt-link :to="{path:'/'}">财务/人力资源/行政</nuxt-link></li>
      <li :class="nowLeft==3?'active':''"><nuxt-link :to="{path:'/'}">项目/质量/高级管理</nuxt-link></li>
      <li :class="nowLeft==4?'active':''"><nuxt-link :to="{path:'/'}">房产/建筑/物业管理</nuxt-link></li>
      <li :class="nowLeft==5?'active':''"><nuxt-link :to="{path:'/'}">IT/互联网/通信</nuxt-link></li>
      <li :class="nowLeft==6?'active':''"><nuxt-link :to="{path:'/'}">采购/贸易/交通/物流</nuxt-link></li>
      <li :class="nowLeft==7?'active':''"><nuxt-link :to="{path:'/'}">金融</nuxt-link></li>
      <li :class="nowLeft==8?'active':''"><nuxt-link :to="{path:'/'}">生产/制造</nuxt-link></li>
      <li :class="nowLeft==9?'active':''"><nuxt-link :to="{path:'/'}">传媒/印刷/艺术/设计</nuxt-link></li>
      <li :class="nowLeft==10?'active':''"><nuxt-link :to="{path:'/'}">咨询/法律/体育/翻译</nuxt-link></li>
      <li :class="nowLeft==11?'active':''"><nuxt-link :to="{path:'/'}">服务业</nuxt-link></li>
      <li :class="nowLeft==12?'active':''"><nuxt-link :to="{path:'/'}">能源/环保/农业/科研</nuxt-link></li>
      <li :class="nowLeft==13?'active':''"><nuxt-link :to="{path:'/other'}">兼职/实习/社工/其他</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "topNav",
    data() {
      return {
        nowLeft:0,
      }
    },
    created(){
      this.nowLeft = this.$store.state.nowLeft;
    },
    methods:{
      choice(e){
        for(let i=0;i<this.$refs.list.children.length;i++){
          this.$refs.list.children[i].className = '';
        }
        if(e.target.parentElement.localName==="li"){
          e.target.parentElement.className = 'active';
        }
      },
    }
  }
</script>
<style>
  .leftUl li {
    width: 1.7rem;
    height: 0.55rem;
    line-height: 0.55rem;
    text-align: center;
    font-size: 0.16rem;
  }
  .leftUl li a{
    color: #333;
    font-weight: 700;
  }
  .leftUl .active{
    background-color: #f9ce39;
  }
  .leftUl .active a{
    color: #fff;
  }
</style>

