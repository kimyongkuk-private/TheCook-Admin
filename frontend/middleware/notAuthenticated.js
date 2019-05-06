export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  if (localStorage.getItem('LS_TOKEN')) {
    store.dispatch('verify_action', localStorage.getItem('LS_TOKEN'))
  } else {
  }
}
