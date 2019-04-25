// const handleError = error => {
//   const errorStatus = error ? error.status : error
//   const errorMessage = prepareErrorMessage(errorStatus)
//   this.$store.dispatch('populateErrors', errorMessage)
// }

// // export const wrapRequest = fn => (...params) =>
// //   this.$axios.get(...params)
// //     .then(response => {
// //       if (!response.ok) {
// //         throw response
// //       }
// //       return response.json()
// //     })
// //     .catch(error => handleError(error))

// export function wrapRequests (...params) {
//   this.$axios.get(...params)
//     .then(response => response).catch(error => handleError(error))
// }

// const prepareErrorMessage = status => {
//   switch (status) {
//     case 401:
//       return 'Unauthenticated'
//     case 404:
//       return 'Not Found'
//     case 405:
//       return 'Method not allowed'
//     default:
//       return 'Error!'
//   }
// }
