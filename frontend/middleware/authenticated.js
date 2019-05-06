export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!localStorage.getItem('LS_TOKEN')) {
    return redirect('/login')
  } else {
    store.dispatch('verify_action', localStorage.getItem('LS_TOKEN'))
  }
}
