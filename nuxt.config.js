module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'csde-blogs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'blog' }
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
    }
  }, 
  css: ['~/assets/material.icons.css', '~/assets/reset.css', '~/assets/blog.icon.css'],
  plugins: [
    { 
      src: '~/plugins/index.js',
      ssr: true
    }
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
      target: 'http://localhost:10086', // 代理地址
      // changeOrigin: true,
      // secure: false,
      // pathRewrite: {
      //   '^/api': ''
      // },
    },
  }
}

