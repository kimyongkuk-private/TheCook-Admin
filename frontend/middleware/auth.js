export default function ({ store, error, redirect }) {
  if (store.getters['get_user'] === null || store.getters['get_token'] === null) {
    error({
      message: '접근 권한이 없습니다',
      statusCode: 403
    })
    return redirect('/login')
  }
}
// export default {
//   middleware: 'auth'
// }
