<template>
  <div class="search" style="position: relative;">
    <Icon type="ios-search" size="25" color="#ccc" style="position: absolute;top: 50%;left:0.08rem;transform: translateY(-50%);z-index: 20"/>
    <Input prefix="ios-search" v-model="searchRes.param.keyword" search enter-button="搜索" placeholder="请输入" style="height: 0.3rem;"  @on-search="searchMe"/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        searchRes:{
          param:{
            keyword:'',//搜索内容
            date:'',//动态创建日期（yyyy-MM-dd）
            pageNo:'1',
            pageSize:'10',
            orderBy:'',//排序字段
            isFromAdmin:'0',//动态是否来自于管理员（0是1否）
          },
          userId:'19'
        }
      }
    },
    methods:{
      searchMe(){
        this.$emit("giveParent",this.searchRes);
      }
    }
  }
</script>
<style scoped>

</style>
