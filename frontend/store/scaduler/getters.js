import { DATE, INDEX_POST } from './getter-types'
// SCADULER GETTERS
export default {
  [DATE] (state) {
    return state.date
  }, // -> getters['scaduler/get_date']
  [INDEX_POST] (state) {
    return state.post_idx
  }
}
