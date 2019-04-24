// SCADULER MUTATIONS
export default {
  set_date (state, date) {
    state.date = date
  }, // -> commit('scaduler/set_date')
  set_post_idx (state, postIdx) {
    state.post_idx = postIdx
  } // -> commit('scaduler/set_post_idx')
}
