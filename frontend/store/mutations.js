import {
  SET_SIGNIN_MUTATION,
  SET_SIGNOUT_MUTATION
} from './values/mutation-types'

export default {
  [SET_SIGNIN_MUTATION] (state, payload) {
    SetLogin(state, payload)
  },
  async [SET_SIGNOUT_MUTATION] (state) {
    SetLogout(state)
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
  state.userState.userIdx = payload.id
  localStorage.setItem('LS_TOKEN', payload.token)
}
/**
 * Autho SET_LOGOUT Function
 * @param payload{ }
 * @returns ?
 */
async function SetLogout (state) {
  state.userState.userSign = false
  state.userState.userName = null
  localStorage.removeItem('LS_TOKEN')
}

// return new Promise(function (resolve, reject) {
//   resolve(data)
// })
