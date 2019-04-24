import { SCADULE, DETAIL } from './getter-types'
// SCADULER/POSTS GETTERS
export default {
  [SCADULE] (state) {
    return state.scadule
  }, // getters['scaduler/posts/get_scadule']
  [DETAIL] (state, getters, rootState, rootGetters) {
    return state.scadule[rootGetters['scaduler/get_post_idx']]
  } // getters[scaduler/posts/get_detail']
}
