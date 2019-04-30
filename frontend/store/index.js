export const state = () => ({
  user: 'null',
  token: 'null',
  errors: []
})

export const getters = {
  get_user: state => state.user,
  get_token: state => state.token,
  errors: state => state.errors
}

export const mutations = {
  set_user: () => {},
  set_token: () => {},
  addError: (state, error) => state.errors.unshift(error),
  popError: (state) => state.errors.pop()
}

export const actions = {
  signIn: async (payload) => {
    // dispatch('scaduler/posts/getScadule')
  },
  signOut: () => {},
  refreshToken: () => {},
  populateErrors: ({ commit }, error) => {
    commit('addError', error)
    setTimeout(() => commit('popError'), 3000)
  }
}
