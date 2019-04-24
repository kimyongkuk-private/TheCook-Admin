// SCADULER/POSTS GETTERS
export default {
  get_scadule (state) {
    return state.scadule
  }, // -> namespaced ? getters['posts/scadule'] : getters['scaduler/posts/scadule']
  get_detail (state, datailIdx) {
    return state.scadule
  } // -> namespaced ? getters['posts/scadule'] : getters['scaduler/posts/scadule']
}
