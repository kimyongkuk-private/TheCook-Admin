module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'intranet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  modules: [
    ['@nuxtjs/onesignal', {
      cdn: true,
      OneSignalSDK: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js',
      init: {
        appId: '1d318c98-5b25-480c-89d9-5c5d265ffb53',
        autoResubscribe: true,
        allowLocalhostAsSecureOrigin: true,
        welcomeNotification: {
          disable: true
        }
      }
    }],
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-izitoast'
  ],
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/vuetify.js' },
    { src: '~/plugins/sw.js', ssr: false }
  ],
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
  axios: {
    baseURL: 'http://ec2-13-209-6-77.ap-northeast-2.compute.amazonaws.com/',
    proxyHeaders: false,
    credentials: false,
    debug: false
  },
  manifest: {
    name: 'TheCook-Admin',
    lang: 'Ko-kr',
    short_name: 'Admin',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    crossorigin: 'use-credentials'
  },
  workbox: {
    dev: false,
    autoRegister: true,
    offline: false,
    importScripts: [
      'custom-sw.js'
    ],
    runtimeCaching: [{
      urlPattern: '/*',
      handler: 'networkFirst',
      method: 'GET'
    }]
  }
}
