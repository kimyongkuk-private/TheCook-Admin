// const workbox = await window.$workbox
// if (workbox) {
//   // Service worker is available
// }
window.OneSignal = window.OneSignal || []
window.OneSignal.on('notificationDisplay', async function (event) {
  // const feedss = await axios.get('http://ec2-13-209-6-77.ap-northeast-2.compute.amazonaws.com/api/feeds/feedlist/', localStorage.getItem('LS_TOKEN'))
  // this.feeds = await feedss.data.results
  console.log(event)
})
const PRECACHE = 'precache-v1'
const RUNTIME = 'runtime'

self.addEventListener('installed', (event) => {
  if (!event.isUpdate) {
    // First-installed code goes here...
    console.log('Service worker installed for the first time!')
  }
})
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName))
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete)
      }))
    }).then(() => self.clients.claim())
  )
})

self.addEventListener('activated', (event) => {
  // `event.isUpdate` will be true if another version of the service
  // worker was controlling the page when this version was registered.
  if (!event.isUpdate) {
    console.log('Service worker activated for the first time!')
    // If your service worker is configured to precache assets, those
    // assets should all be available now.
  }
  return self.clients.claim()
})
self.addEventListener('fetch', event => {
  // const url = new URL(event.request.url)
})
self.addEventListener('controlling', () => {
  console.log(`controlling`)
})
self.addEventListener('waiting', (event) => {
  console.log(`A new service worker has installed, but it can't activate` +
      `until all tabs running the current version have fully unloaded.`)
})
self.addEventListener('message', (event) => {
  if (event.data.type === 'CACHE_UPDATED') {
    const {
      updatedURL
    } = event.data.payload
    console.log(`A newer version of ${updatedURL} is available!`)
  }
})

function showNotification () {
  Notification.requestPermission(function (result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        })
      })
    }
  })
}
