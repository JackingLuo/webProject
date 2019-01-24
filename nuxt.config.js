const rem ="document.documentElement.style.fontSize = document.documentElement.clientWidth/19.2+'px'";
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '职引官',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '职引官' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    /*
    * 设置rem
    * */
    script: [
      { innerHTML: rem, type: 'text/javascript', charset: 'utf-8'}
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  // modules:[
  // [ 'bootstrap-vue/nuxt',{ css:true }],
  // ],
  /*
   **配置全局的css文件
   */
  css:[
    'iview/dist/styles/iview.css',
    '~assets/css/normailze.css',
  ],//全局引入element的样式
  /*
  * plugins插件配置
  * */
  plugins:[
    '~plugins/iview'
  ],
  /*
   * 自定义进度条的配置,也可以自定义一个组件,显示路由切换时的加载状态
   * */
  loading: {
    color: '#2d8cf0',
    height: '1px'
  },
  /*
  * 为每个路由页面设置中间件(全局中间件),设置的验证中间件可以在这里引入执行
  * */
  router: {
    middleware: 'auth'
  },
  /*
  * 页面较多时提高页面的渲染速度
  * */
  render: {
    resourceHints: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    * 处理低版本的兼容问题
    * */
    vendor: [
      'axios',
      'iview/dist/styles/iview.css',
      '~/assets/css/normailze.css',
      'iview',
      'vue-quill-editor',
    ],//iview表示哪一个插件
    plugins: [

    ]
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}

