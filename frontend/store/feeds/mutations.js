// import {
//   SET_SIGNIN_MUTATION,
//   SET_SIGNOUT_MUTATION
// } from './values/mutation-types'

export default {
  update_date (state, payload) {
    UpdateDate(state, payload)
  },
  set_dialog (state, payload) {
    SetDialog(state, payload)
  }
}

/**
 * Autho UPDATE_DATE Function
 * @param payload{ }
 * @returns ?
 */
function UpdateDate (state, payload) {
  state.date = payload
}
/**
 * Autho SET_DIALOG Function
 * @param payload{ }
 * @returns ?
 */
function SetDialog (state, payload) {
  state.dialog = payload
}
