/**
 * 비동기로직만 작성
 */
let config = {
  headers: {
    // 'Access-Control-Request-Method': 'POST',
    // 'Access-Control-Allow-Credentials':
    // 'X-CSRF-Token': csrfToken
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization'
  }
  // withCredentials: true,
  // credentials: 'same-origin'
}
export default {
  async login_logic ({ commit }, payload) {
    Login(this.$axios, payload, config)
  },
  async logout_logic ({ commit }, payload) {
    Logout(this.$axios, payload)
  },
  async refresh_logic ({ commit }, payload) {
    Refresh(this.$axios, payload)
  },
  async check_logic ({ commit }, payload) {
    Verify(this.$axios, payload)
  }
}
/**
 * Autho Login Function
 * @param payload{ username password }
 * @returns username, token
 */
function Login ($axios, payload, config) {
  $axios.$post('/api/auth/', payload, config).then(response => console.log(response)).catch(e => {
    console.log(e)
  })
}
/**
 * Autho Logout Function
 * @param ?
 * @returns ?
 */
function Logout ($axios, payload) {
  return $axios.$post('/api/v1/member/logout/', payload).then(response => console.log(response))
}
/**
 * Autho RefreshToken Function
 * @param token
 * @returns token
 */
function Refresh ($axios, payload) {
  return $axios.$post('/token/refresh/', payload).then(response => console.log(response))
}
/**
 * Autho CheckAutho Function
 * @param
 */
function Verify ($axios, payload) {
  return $axios.$post('/token/verify/', payload).then(response => console.log(response))
}
