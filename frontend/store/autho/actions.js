/**
 * 비동기로직만 작성
 */
// let config = {
//   headers: {
//     // 'Access-Control-Request-Method': 'POST',
//     // 'Access-Control-Allow-Credentials':
//     // 'X-CSRF-Token': csrfToken
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Headers': 'Authorization'
//   }
//   // withCredentials: true,
//   // credentials: 'same-origin'
// }
import {
  LOGIN_LOGIC,
  GET_USERDATA_LOGIC,
  LOGOUT_LOGIC,
  REFRESH_LOGIC,
  CHECK_LOGIC
} from './action-types'
import {
  URL_LOGIN,
  URL_REFRESH,
  URL_VERIFY,
  URL_LOGOUT
} from './action-urls'

export default {
  async [LOGIN_LOGIC] ({ dispatch }, payload) {
    Login({ dispatch }, payload, this.$axios)
  },
  async [GET_USERDATA_LOGIC] ({ commit }, payload) {
    GetUserData({ commit }, payload, this.$axios)
  },
  async [LOGOUT_LOGIC] ({ commit }, payload) {
    Logout(this.$axios, payload)
  },
  async [REFRESH_LOGIC] ({ commit }, payload) {
    Refresh(this.$axios, payload)
  },
  async [CHECK_LOGIC] ({ commit }, payload) {
    Verify(this.$axios, payload)
  }
}
/**
 * Autho Login Function
 * @param payload{ username password }
 * @returns username, token
 */
function Login ({ dispatch }, payload, $axios) {
  $axios.$post(URL_LOGIN, payload).then(
    response => localStorage.setItem('token', response.token)
  )
    .then(
      dispatch(GET_USERDATA_LOGIC)
    )
    .catch(e => {
      console.log(e)
    })
}
/**
 * Autho GetUserData Function
 * @param token
 * @returns {username token}
**/
function GetUserData ({ commit }, payload, $axios) {
  console.log('todo: get token from localStorage \n' + localStorage.getItem('token'))
  console.log('todo: get userdata from server')
  console.log('todo: commit mutations store userdata')
}
/*
 * Autho Logout Function
 * @param ?
 * @returns ?
 */
function Logout ($axios, payload) {
  $axios.$post(URL_LOGOUT, payload).then(
    response => response === 'true'
      ? localStorage.removeItem('token')
      : console.log('')
  )
    .catch(e => {
      console.log(e)
    })
}
/**
 * Autho RefreshToken Function
 * @param token
 * @returns token
 */
function Refresh ($axios) {
  IsTokenSet()
    ? $axios.$post(URL_REFRESH, localStorage.getItem('token')).then(
      response => response === 'true'
        ? localStorage.removeItem('token')
        : console.log('')
    )
      .catch(e => {
        console.log(e)
      })
    : console.log('token is undefined redirect loginPage')
  // return $axios.$post('/token/refresh/', payload).then(response => console.log(response))
}
/**
 * Autho CheckAutho Function
 * @param
 */
function Verify ($axios) {
  IsTokenSet()
    ? $axios.$post(URL_VERIFY, '').then(
      response => localStorage.setItem('token', response.token)
    )
      .catch(e => {
        console.log(e)
      })
    : console.log('token is undefined redirect loginPage')
  // return $axios.$post('/token/verify/', payload).then(response => console.log(response))
}
/**
 * Autho IsTokenSet Function
  */
function IsTokenSet () {
  return localStorage.getItem('token').isEmpty()
}
