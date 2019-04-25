import { INDEX_POST } from './mutation-types'
// SCADULER MUTATIONS
export default {
  [INDEX_POST] (state, postIdx) {
    state.post_idx = postIdx
  } // -> commit('scaduler/set_post_idx')
}
