export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  if (localStorage.getItem('LS_TOKEN')) {
    notAuthfunc({ store, redirect })
  } else {
  }
}

async function notAuthfunc ({ store, redirect }) {
  await store.dispatch('verify_action', localStorage.getItem('LS_TOKEN'))
}
