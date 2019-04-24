import { DATE } from './action-types'
// SCADULER ACTIONS 비동기
export default {
  [DATE] ({ dispatch, commit }, date) {
    commit('set_date', date)
    dispatch('posts/getScadule')
  } // -> dispatch('scaduler/setDate')
}
