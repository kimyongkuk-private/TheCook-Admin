import { DATE } from './action-types'
// MAIN ACTIONS 비동기
export default {
  async [DATE] ({ dispatch, commit }, date) {
    await commit('set_date', date)
    dispatch('scaduler/posts/getScadule')
  } // -> dispatch('main/setDate')
}
