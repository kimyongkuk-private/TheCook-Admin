import { ErrorHandler } from '@/plugins/errHandler'
import {
  SIGNIN_ACTION,
  VERIFY_ACTION,
  REFRESH_ACTION
} from './action-types'
import { SIGNIN_URL, VERIFY_URL, REFRESH_URL } from './action-urls'

export default {
  async [SIGNIN_ACTION] ({ commit }, payload) {
    await LoginLogic(payload, this.$axios).then(response => {
      commit('set_signin_mutation', response.token)
      localStorage.setItem('LS_TOKEN', response.token)
    })
      .catch(error => ErrorHandler(error))
  },
  async [VERIFY_ACTION] ({ commit }, payload) {
    await VerifyLogic({ commit }, payload, this.$axios).then(userdata => {
      commit('set_signin_mutation', userdata)
    })
      .catch(error => ErrorHandler(error))
  },
  async [REFRESH_ACTION] ({ dispatch, commit }, payload) {
    await RefreshLogic({ dispatch }, payload, this.$axios)
      .catch(error => ErrorHandler(error))
  }
}
/**
 * Autho Login Function
 * @param payload{ username password }
 * @returns token
 */
const LoginLogic = (payload, $axios) => {
  return $axios.$post(SIGNIN_URL, payload).catch(e => console.log(e))
}
/**
 * Autho Verify Function
 * @param payload token
 * @returns username, token
 */
const VerifyLogic = ({ commit }, payload, $axios) => {
  return $axios.$post(VERIFY_URL, { 'token': payload }).catch(e => console.log(e))
}
/**
 * Autho Refresh Function
 * @param payload token
 * @returns token
 */
const RefreshLogic = async ({ dispatch, commit }, payload, $axios) => {
  await $axios.$post(REFRESH_URL, payload).then(
    response => {
    }
  ).catch(e => { throw e })
}
