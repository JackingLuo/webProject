<template>
  <div class="search" style="position: relative;">
    <Icon type="ios-search" size="25" color="#ccc" style="position: absolute;top: 50%;left:0.08rem;transform: translateY(-50%);z-index: 20"/>
    <Input prefix="ios-search" v-model="inputText" search enter-button="搜索" placeholder="请输入" style="height: 0.3rem;"  @on-search="searchMe"/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        inputText:''
      }
    },
    methods:{
      searchMe(){
        this.$emit("giveParent",this.inputText);
      }
    }
  }
</script>
<style scoped>

</style>
