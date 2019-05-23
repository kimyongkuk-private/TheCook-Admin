// import miniToastr from 'mini-toastr'
import iZtoast from 'izitoast'

const loginErrHandler = (error) => {
  switch (error.response.status) {
    case 200:
      console.log(error.response.status)
      break
    case 400:
      if (error) {
        iZtoast.show({
          title: '로그인실패',
          message: '입력하신 정보를 확인해주세요',
          position: 'topRight'
        })
      }
      console.log('로그인 정보를 확인해주세요')
      break
    case 401:
      console.log('401에러')
      break
    case 404:
      console.log('404에러')
      break
    case 500:
      if (error) {
        iZtoast.show({
          title: '에러',
          message: '만료된 요청입니다',
          position: 'topRight'
        })
      }
      localStorage.removeItem('LS_TOKEN')
      break
    default:
      console.log(error)
      break
  }
}
export {
  loginErrHandler as LoginHandler
}
