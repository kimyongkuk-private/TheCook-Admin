/**
 * Scadule Create Function
 * @param phone password
 * @returns user, token
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
 * Scadule Update Function
 * @param
 */
const Logout = async function () {
  const data = await this.$axios.$get('autho/logout')
  return { data }
}
/**
 * Scadule Delete Function
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
 * Scadule ListGet Function
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
export {
  Login,
  Logout,
  RefreshToken,
  CheckAutho
}
