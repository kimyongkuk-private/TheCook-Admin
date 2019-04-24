// SCADULER ACTIONS 비동기
export default {
  setDate ({ dispatch, commit }, date) {
    commit('set_date', date)
    dispatch('posts/getScadule')
  } // -> dispatch('scaduler/setDate')
}
