import {
  SIGNIN_ACTION,
  VERIFY_ACTION,
  REFRESH_ACTION
} from './values/action-types'
import { SIGNIN_URL, VERIFY_URL, REFRESH_URL } from './values/action-urls'

export default {
  [SIGNIN_ACTION] ({ commit }, payload) {
    return LoginLogic(payload, this.$axios).then(response => {
      commit('set_signin_mutation', response.token)
      localStorage.setItem('LS_TOKEN', response.token)
      return response
    }).catch(error => {
      console.log(error)
    })
  },
  [VERIFY_ACTION] ({ commit }, payload) {
    return VerifyLogic({ commit }, payload, this.$axios).then(response => {
      commit('set_signin_mutation', response)
      return response
    })
      .catch(error => {
        throw (error)
      })
  },
  async [REFRESH_ACTION] ({ dispatch, commit }, payload) {
    await RefreshLogic({ dispatch }, payload, this.$axios).then(response => {
      return response
    }
    )
      .catch(error => {
        throw (error)
      })
  }
}
/**
 * Autho Login Function
 * @param payload{ username password }
 * @returns token
 */
const LoginLogic = (payload, $axios) => {
  return $axios.$post(SIGNIN_URL, payload)
}
/**
 * Autho Verify Function
 * @param payload token
 * @returns username, token
 */
const VerifyLogic = ({ commit }, payload, $axios) => {
  return $axios.$post(VERIFY_URL, {
    'token': payload
  })
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
  )
}
