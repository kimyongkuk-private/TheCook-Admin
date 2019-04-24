import { DATE, INDEX_POST } from './mutation-types'
// SCADULER MUTATIONS
export default {
  [DATE] (state, date) {
    state.date = date
  }, // -> commit('scaduler/set_date')
  [INDEX_POST] (state, postIdx) {
    state.post_idx = postIdx
  } // -> commit('scaduler/set_post_idx')
}
