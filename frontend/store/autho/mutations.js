export default {
  User (state, payload) {
    SET_USER(payload)
  },
  Logout (state, payload) {
    SET_LOGOUT(payload)
  }
}

/**
 * Autho SET_USER Function
 * @param payload{ }
 * @returns ?
 */
function SET_USER (state, payload) {
  state.authUser = payload
}
/**
 * Autho SET_LOGOUT Function
 * @param payload{ }
 * @returns ?
 */
function SET_LOGOUT (state) {
  state.user = null
  state.token = null
}
