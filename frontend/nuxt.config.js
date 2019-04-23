var environment = {
  API_URL: 'http://localhost:9102',
  API_URL_BROWSER: 'http://localhost:9102',
  PROXY: false,
  DEBUG: true,
  RETRIES: 2
}

module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:9102'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],
  axios: {
    // proxyHeaders: false
    baseURL: environment.API_URL,
    browserBaseURL: environment.API_URL_BROWSER,
    proxy: environment.PROXY
    // debug: environment.DEBUG,
    // retry: {
    //   retries: environment.RETRIES
    // }    requestInterceptor: (config, {store}) => {
    //   config.headers.common['Authorization'] = '';
    //   config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;application/json';
    //   return config
    // }
  },
  head: {
    title: 'thecook-admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'thecook-admin vue nuxt vuetify project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  manifest: {
    name: 'TheCook-Admin',
    short_name: 'Admin',
    start_url: '/',
    display: 'standalone',
    background_color: '#000'
  }
}