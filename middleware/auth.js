export default function({ store, route, redirect, error }){
  /*
  * nuxt自带的中间件方法,vuex状态管理树,当前路由,路由重定向,错误信息
  * */
  //路由鉴权
  // if (!store.state.authUser) {
  //     return redirect({path:'/Login'})
  // }
  //用中间件做路由重定向
  if(route.path=='/'){ //重定向
      return redirect({path:'/popular'})
    }
}

