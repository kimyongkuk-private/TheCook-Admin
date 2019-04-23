import Vuex from 'vuex'

const store = () => new Vuex.Store({
  modules: {
    scaduler: {
      namespaced: true,
      // SCADULER STATE
      state: {
        date: null,
        dialog: false,
        post_idx: 0
      },
      // SCADULER GETTERS
      getters: {
        get_date (state) {
          return state.date
        }, // -> getters['scaduler/get_date']
        get_post_idx (state) {
          return state.post_idx
        }
      },
      // SCADULER MUTATIONS
      mutations: {
        set_date (state, date) {
          state.date = date
        }, // -> commit('scaduler/set_date')
        set_post_idx (state, postIdx) {
          state.post_idx = postIdx
        } // -> commit('scaduler/set_post_idx')
      },
      // SCADULER ACTIONS 비동기
      actions: {
        setDate ({ dispatch, commit }, date) {
          commit('set_date', date)
          dispatch('posts/getScadule')
        } // -> dispatch('scaduler/setDate')
      },
      // nested modules SCADULER/POSTS START
      modules: {
        posts: {
          namespaced: true,
          // SCADULER/POSTS STATE
          state: {
            scadule: [{
              title: null,
              author: null,
              content: null,
              product: null,
              address: null,
              tel: null,
              cost: null,
              time: null,
              priority: null
            }]
          },
          // SCADULER/POSTS GETTERS
          getters: {
            get_scadule (state) {
              return state.scadule
            }, // -> namespaced ? getters['posts/scadule'] : getters['scaduler/posts/scadule']
            get_detail (state, datailIdx) {
              return state.scadule
            } // -> namespaced ? getters['posts/scadule'] : getters['scaduler/posts/scadule']
          },
          // SCADULER/POST MUTATIONS
          mutations: {
            set_scadule (state, scadule) {
              state.scadule = scadule
            }
          }, // ->store.commit('scadule/posts/set_scadule', { : 10})
          // SCADULER/POSTS ACTIONS 비동기
          actions: {
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
        },

        // nested modules SCADULER/DETAIL START
        detail: {
          namespaced: true,
          state: [{

          }],
          getters: {
            popular () {
            } // -> getters['account/posts/popular']
          }
        }
      }
    }
  }
})

export default store
