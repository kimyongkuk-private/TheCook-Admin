import { LoginHandler } from '@/plugins/errHandler'

export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!localStorage.getItem('LS_TOKEN')) {
    return redirect('/login')
  } else {
    authfunc({ store, redirect })
  }
}
async function authfunc ({ store, redirect }) {
  const verifyResponse = await store.dispatch('verify_action', localStorage.getItem('LS_TOKEN')).catch(e => {
    LoginHandler(e)
  })
  if (!verifyResponse) {
    redirect('/login')
  }
}
