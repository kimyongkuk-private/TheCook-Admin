import { SCADULE, DETAIL } from './getter-types'
// SCADULER/POSTS GETTERS
export default {
  [SCADULE] (state) {
    return state.scadule
  }, // -> namespaced ? getters['posts/scadule'] : getters['scaduler/posts/scadule']
  [DETAIL] (state, datailIdx) {
    return state.scadule
  } // -> namespaced ? getters['posts/scadule'] : getters['scaduler/posts/scadule']
}
