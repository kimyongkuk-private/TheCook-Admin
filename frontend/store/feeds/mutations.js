// import {
//   SET_SIGNIN_MUTATION,
//   SET_SIGNOUT_MUTATION
// } from './values/mutation-types'

export default {
  update_date (state, payload) {
    UpdateDate(state, payload)
  }
}

/**
 * Autho SET_DATE Function
 * @param payload{ }
 * @returns ?
 */
function UpdateDate (state, payload) {
  state.date = payload
}
