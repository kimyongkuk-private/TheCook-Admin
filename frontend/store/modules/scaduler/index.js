import actions from './actions'
import getters from './getters'
import mutations from './mutations'

// const defaultState = {
//   date: null,
//   scadule: [{

//   }]
// }

// const inBrowser = typeof window !== 'undefined'
// // if in browser, use pre-fetched state injected by SSR
// const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState

const state = {
  date: new Date().toISOString().substr(0, 10),
  noteidx: 0,
  scadule: [{
    title: null,
    author: null,
    content: null,
    product: null,
    price: null,
    address: null,
    tel: null,
    time: null,
    type: null
  }]
}
export default {
  namespaced: true,
  state: {
    ...state
  },
  actions,
  mutations,
  getters
}
