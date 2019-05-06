import actions from './app/actions'
import getters from './app/getters'
import mutations from './app/mutations'

const defaultState = () => ({
  userState: {
    userSign: false, // true or false
    userName: null, // signed user's name
    userToken: null // signed user's accesstoken
  },
  errors: [] // responsed error
})
const inBrowser = typeof window !== 'undefined'
// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.username : defaultState

export default {
  state,
  actions,
  mutations,
  getters
}
