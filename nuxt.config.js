module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'csde-blogs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1' },
      { name: 'baidu-site-verification', content: 'SBNQrBfdNm' },
      { hid: 'description', name: 'keywords', content: 'csde,javaScript,html,css,Vue.js,React.js,mongodb,node.js,express,前端技术分享,前端技术交流,资源分享' },
      { hid: 'keywords', name: 'description', content: '欢迎各位光临本站！本站旨在：前端技术分享，前端技术交流，个人经验分享，资源分享' }
    ],
    script: [
      { src: '/js/rem.js', type: 'text/javascript', charset: 'utf-8'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#2196f3' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // postcss:[
    //   require("postcss-px2rem")({
    //     remUnit: 60
    //   })
    //   // require('autoprefixer')
    // ],
  }, 
  css: ['~/assets/material.icons.css', '~/assets/reset.css', '~/assets/blog.icon.css'],
  plugins: [
    { 
      src: '~/plugins/index.js',
      ssr: true
    },
    {
      src: '~/assets/blog.less',
      ssr: true,
      lang: 'less'
    },
    {
      src: '~/assets/responsive.less',
      ssr: true,
      lang: 'less'
    },
    '@/plugins/axios'
  ],
  modules: [ 
    '@nuxtjs/axios',
    '@nuxtjs/proxy', 
  ],
  axios: {
    proxy: true,
    // prefix: '/api', // baseURL
    credentials: true,
  },
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:10086', // 代理地址
      // changeOrigin: true,
      // secure: false,
      // pathRewrite: {
      //   '^/api': ''
      // },
    },
    '/public/': {
      target: 'http://127.0.0.1:10086'
    }
  }
}


