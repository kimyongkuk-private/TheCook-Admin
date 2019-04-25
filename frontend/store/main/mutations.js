import { DATE } from './mutation-types'
// SCADULER MUTATIONS
export default {
  [DATE] (state, date) {
    state.date = date
  } // -> commit('main/set_date')
}
