import  Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//可以把store状态管理理解成为一个公共的仓库,所有页面和组件都可以来访问和改变这个全局的值!

const store = () =>  new Vuex.Store({
  state:{
    //定义数据
    nowLeft:0,
    isLogin:false,
    userId:'',
    isCheck:false,//校验是否通过验证
  },
  mutations:{
    //是否登录了
    changeLogin(state,userId){
      state.isLogin = true;
      state.userId = userId;
    },
    //定义方法,改变state中的数据
    change(state){
      state.isCheck = true;
      // Vue.set(state.list,params,state.list[params]);//只改变数组或者对象对应的值,data中的数据确实改变了但是页面并不会更新,Vue的set方法,可以改变当前数据索引所对应的值
    },
    clickLeft(state,num){
      state.nowLeft = num;
    }
  },
});
export default store;
