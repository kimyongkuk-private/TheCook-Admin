import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _78d1feba = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _7e973aba = () => interopDefault(import('..\\pages\\error\\500.vue' /* webpackChunkName: "pages_error_500" */))
const _1918ce30 = () => interopDefault(import('..\\pages\\private\\feeds.vue' /* webpackChunkName: "pages_private_feeds" */))
const _0fc8073c = () => interopDefault(import('..\\pages\\private\\profile.vue' /* webpackChunkName: "pages_private_profile" */))
const _20db728e = () => interopDefault(import('..\\pages\\private\\scheduler.vue' /* webpackChunkName: "pages_private_scheduler" */))
const _3de0b6d8 = () => interopDefault(import('..\\pages\\public\\production.vue' /* webpackChunkName: "pages_public_production" */))
const _3c3c1e58 = () => interopDefault(import('..\\pages\\public\\promotion.vue' /* webpackChunkName: "pages_public_promotion" */))
const _0c2144e8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/login",
      component: _78d1feba,
      name: "login"
    }, {
      path: "/error/500",
      component: _7e973aba,
      name: "error-500"
    }, {
      path: "/private/feeds",
      component: _1918ce30,
      name: "private-feeds"
    }, {
      path: "/private/profile",
      component: _0fc8073c,
      name: "private-profile"
    }, {
      path: "/private/scheduler",
      component: _20db728e,
      name: "private-scheduler"
    }, {
      path: "/public/production",
      component: _3de0b6d8,
      name: "public-production"
    }, {
      path: "/public/promotion",
      component: _3c3c1e58,
      name: "public-promotion"
    }, {
      path: "/",
      component: _0c2144e8,
      name: "index"
    }],

    fallback: false
  })
}
