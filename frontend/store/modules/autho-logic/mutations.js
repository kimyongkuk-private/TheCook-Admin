export default {
  LOGOUT: (state) => {
    state.user = null
    state.token = null
  },
  SET_USER: function (state, user) {
    state.authUser = user
  }
}
