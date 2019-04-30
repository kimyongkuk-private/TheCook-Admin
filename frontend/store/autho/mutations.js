import {
  USER,
  LOGOUT
} from './mutation-types'

export default {
  [USER] (state, payload) {
    SET_USER(payload)
  },
  [LOGOUT] (state, payload) {
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
}
