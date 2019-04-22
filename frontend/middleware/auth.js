export default function ({ store, error }) {
  if (!store.state.authUser) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
// export default {
//   middleware: 'auth'
// }
