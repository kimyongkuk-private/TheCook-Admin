/**
 * 비동기로직만 작성
 */
export default {
  create_logic: ({ commit }, { userName, token }) => {
    Create({ commit }, { userName, token })
  },
  detail_logic: ({ commit }, { userName, token }) => {
    Detail({ commit }, { userName, token })
  },
  update_logic: ({ commit }, { userName, token }) => {
    Update({ commit }, { userName, token })
  },
  delete_logic: ({ commit }, { userName, token }) => {
    Delete({ commit }, { userName, token })
  },
  list_logic: ({ commit }, { userName, token }) => {
    List({ commit }, { userName, token })
  }
}
/**
 * Scadule Create Function
 * @param phone password
 * @returns user, token
 */
const Create = async function ({ commit }, { userName, token }, { posting }) {
  try {
    await this.$axios.post('/api/v1/scaduler/create/', { userName, token }).then(response => commit('SET_USER', response.data))
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Bad credentials')
    }
    throw error
  }
}
/**
 * Scadule Detail Function
 * @param phone password
 * @returns user, token
 */
const Detail = async function ({ commit }, { userName, token }, { posting }) {
  try {
    await this.$axios.post('/api/v1/scaduler/create/', { userName, token }).then(response => commit('SET_USER', response.data))
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Bad credentials')
    }
    throw error
  }
}
/**
 * Scadule Update Function
 * @param phone password
 * @returns user, token
 */
const Update = async function ({ commit }, { userName, token }, { posting }) {
  try {
    await this.$axios.post('/api/v1/scaduler/create/', { userName, token }).then(response => commit('SET_USER', response.data))
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Bad credentials')
    }
    throw error
  }
}
/**
 * Scadule Delete Function
 * @param phone password
 * @returns user, token
 */
const Delete = async function ({ commit }, { userName, token }, { posting }) {
  try {
    await this.$axios.post('/api/v1/scaduler/create/', { userName, token }).then(response => commit('SET_USER', response.data))
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Bad credentials')
    }
    throw error
  }
}
/**
 * Scadule List Function
 * @param phone password
 * @returns user, token
 */
const List = async function ({ commit }, { userName, token }, { posting }) {
  try {
    await this.$axios.post('/api/v1/scaduler/create/', { userName, token }).then(response => commit('SET_USER', response.data))
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Bad credentials')
    }
    throw error
  }
}
