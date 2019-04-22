/**
 * 비동기로직만 작성
 */
export default {
  login_logic: ({ commit }, { phone, password }) => {
    Login({ commit }, { phone, password })
  },
  logout_logic: ({ commit }, { phone, password }) => {
    Logout({ commit }, { phone, password })
  },
  refresh_logic: ({ commit }, { user, token }) => {
    RefreshToken({ commit }, { user, token })
  },
  check_logic: ({ commit }, { user, token }) => {
    CheckAutho({ commit }, { user, token })
  }
}
/**
 * Autho Login Function
 * @param phone password
 * @returns userName, token
 */
const Login = async function ({ commit }, { phone, password }) {
  try {
    await this.$axios.post('/api/v1/autho/login/', { phone, password }).then(response => commit('SET_USER', response.data))
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Bad credentials')
    }
    throw error
  }
}
/**
 * Autho Logout Function
 * @param phone password
 * @returns user, token
 */
const Logout = async function ({ commit }, { phone, password }) {
  try {
    await this.$axios.post('/api/v1/autho/login/', { phone, password }).then(response => commit('LOGOUT', response.data))
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Bad credentials')
    }
    throw error
  }
}
/**
 * Autho RefreshToken Function
 * @param user, token
 * @returns token
 */
const RefreshToken = async function ({ commit }, { user, token }) {
  try {
    const { data } = await this.$axios.post('autho/refreshtoken', { user, token })
    commit('SET_USER', data)
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Bad credentials')
    }
    throw error
  }
}
/**
 * Autho CheckAutho Function
 * @param
 */
const CheckAutho = async function ({ commit }, { user, token }) {
  try {
    const { data } = await this.$axios.post('autho/refreshtoken', { user, token })
    commit('SET_USER', data)
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Bad credentials')
    }
    throw error
  }
}
