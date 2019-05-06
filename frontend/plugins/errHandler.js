const errHandler = (error) => {
  switch (error.response.status) {
    case 400:
      console.log('400에러')
      break
    case 404:
      console.log('404에러')
      break
    case 500:
      console.log('500에러')
      break
    default:
      console.log(error)
      break
  }
}
export {
  errHandler as ErrorHandler
}
