// export const state = () => ({
//   sidebar: false
// })

// export const mutations = {
//   toggleSidebar (state) {
//     state.sidebar = !state.sidebar
//   }
// }

export const state = () => ({
  authUser: null,
  authToken: null
})

export const mutations = {
  SET_USER: function (state, user, token) {
    state.authUser = user
    state.authToken = token
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser && req.session.authToken) {
      commit('SET_USER', req.session.authUser, req.session.authToken)
    }
  },
  async login ({ commit }, { phone, password }) {
    try {
      const { data } = await this.$axios.post('/api/login', { phone, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  }
}
