import { SCADULE } from './mutation-types'

// SCADULER/POST MUTATIONS
export default {
  [SCADULE] (state, scadule) {
    state.scadule = scadule
  }
}// ->store.commit('scadule/posts/set_scadule', { : 10})
