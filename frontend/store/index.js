import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = () => ({
  userState: {
    userSign: false, // true or false
    userName: null // signed user's name
  },
  errors: [] // responsed error
})
// const inBrowser = typeof window !== 'undefined'
// // if in browser, use pre-fetched state injected by SSR
// const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.username : defaultState

export default {
  state,
  actions,
  mutations,
  getters,
  strict: false
}
