// SCADULER/POSTS ACTIONS 비동기
export default {
  async getScadule ({ commit, state }) {
    // state.scadule = API.getScadule
    try {
      await this.$axios.get('/scadule').then(response => commit('set_scadule', response.data)
      )
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('접근 권한이 없습니다.')
      }
      throw error
    }
  } // -> dispatch('scaduler/posts/getScadule')
}
