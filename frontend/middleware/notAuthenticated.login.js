import { LoginHandler } from '@/plugins/errHandler'
import iZtoast from 'izitoast'

export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  if (localStorage.getItem('LS_TOKEN')) {
    notAuthfunc({ store, redirect })
  } else {
  }
}
async function notAuthfunc ({ store, redirect }) {
  const verifyResponse = await store.dispatch('verify_action', localStorage.getItem('LS_TOKEN')).catch(e => {
    LoginHandler(e)
  })
  if (verifyResponse) {
    iZtoast.show({
      title: '이미 로그인 되어있습니다.',
      timeout: 1500,
      position: 'topRight',
      onClosing: function () {
        redirect('/')
      }
    })
  }
}

// function noti () {
//   return new Promise(function (resolve, reject) {
//     iZtoast.show({
//       title: '이미 로그인 되어있습니다.',
//       timeout: 2100,
//       position: 'topRight'
//     })
//   })
// }
