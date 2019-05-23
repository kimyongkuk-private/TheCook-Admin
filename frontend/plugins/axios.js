import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default function ({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  $axios.onResponse(config => {
    console.log('Responsed')
  })

  // $axios.onResponse(async response => {
  //   if (response.status === 266) {
  //     const originalRequest = response.config
  //     originalRequest.baseURL = ''
  //     originalRequest._retry = true
  //     const result = await store.dispatch('refreshToken')

  //     if (result) {
  //       originalRequest.headers['Authorization'] = `Bearer ${store.getters.token}`
  //       return $axios(originalRequest)
  //     } else {
  //       redirect(301, '/account/login')
  //     }
  //   }
  // })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    switch (code) {
      case 200:
        console.log(code)
        break
      case 400:
        console.log(code)
        break
      case 401:
        redirect('/')
        break
      case 500:
        console.log(code)
        break
      default :
        console.log(code)
    }
  })
}
