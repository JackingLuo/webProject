<template>
  <div class="body">
    <div class="left">
      <leftNav></leftNav>
    </div>
    <div class="right">
      <nuxt />
    </div>
  </div>
</template>

<script>
import leftNav from "../components/leftNav";
import axios from "../plugins/axios";
import {HOME_PAGE} from "~/server/api"
export default {
  layout:"topNav",
  components: {
    leftNav
  },
  data(){
    return{
      requestRes:{
        param:{
          positionType:1,
          pageSize:'',
          pageNo:'',
          orderBy:'',
          keyword:'',
          positionName:'',
          slide:'yes',
          recommend:'yes',
          hot:'yes',
        },
        userId:19
      }
    }
  },
  created(){
    // this.init()
  },
  methods:{
    init(){
      axios.post(HOME_PAGE,this.requestRes).then((res)=>{
        if(res.status==200){
          console.log(res.data);
        }else{
          this.$Notice.error({
            title: "获取内容失败,请检查当前网络!",
          });
        }
      }).catch((err)=>{
        this.$Notice.error({
          title: err.errMsg,
        });
      })
    }
  }
}
</script>

<style>
  .body{
    padding-left: 2.08rem;
  }
  .left{
    position: fixed;
    top: 1.35rem;
    left: 1.65rem;
  }

</style>

