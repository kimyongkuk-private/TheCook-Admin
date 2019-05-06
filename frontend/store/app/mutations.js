import {
  SET_SIGNIN_MUTATION,
  SET_SIGNOUT_MUTATION
} from './mutation-types'

export default {
  [SET_SIGNIN_MUTATION] (state, payload) {
    SetLogin(state, payload)
  },
  [SET_SIGNOUT_MUTATION] (state) {
    SetLogout(state)
  },
  setAuth (state, usertoken) {
    state.userState.usertoken = usertoken
  },
  addError: (state, error) => state.errors.unshift(error),
  popError: (state) => state.errors.pop()
}

/**
 * Autho SET_LOGIN Function
 * @param payload{ }
 * @returns ?
 */
function SetLogin (state, payload) {
  state.userState.userSign = true
  state.userState.userName = payload.username
  state.userState.userToken = payload.token
}
/**
 * Autho SET_LOGOUT Function
 * @param payload{ }
 * @returns ?
 */
function SetLogout (state) {
  state.userState.userSign = false
  state.userState.userName = null
  state.userState.userToken = null
  localStorage.removeItem('LS_TOKEN')
}
