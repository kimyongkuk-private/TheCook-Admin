import {
  Workbox
} from 'workbox-window'

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js')
  // if (workbox) {
  //   // Service worker is available
  // }
  console.log(wb)

  window.OneSignal.on('notificationDisplay', async function (event) {
    // const feedss = await axios.get('http://ec2-13-209-6-77.ap-northeast-2.compute.amazonaws.com/api/feeds/feedlist/', localStorage.getItem('LS_TOKEN'))
    // this.feeds = await feedss.data.results
    console.log(event)
  })
  wb.register()
} else if (!navigator.serviceWorker || !navigator.serviceWorker.register) {
  console.log('Service Worker를 지원하지 않습니다.')
}
