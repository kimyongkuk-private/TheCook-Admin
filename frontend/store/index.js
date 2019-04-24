export const state = () => ({
  user: 'null',
  token: 'null'
})

export const getters = {
  get_user (state) { return state.user },
  get_token (state) { return state.token }
}

export const mutations = {
  set_user () {},
  set_token () {}
}

export const actions = {
  signIn () {},
  signOut () {},
  refreshToken () {}
}
