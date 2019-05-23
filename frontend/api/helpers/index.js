// implement your own methods in here, if your data is coming from A rest API

import * as Product from './product'
import * as Scadule from './scadule'
import * as Feeds from './feeds'
import * as Auth from './auth'

export default {
  Product,
  Scadule,
  Feeds,
  Auth
  // getProduct: Product.getProduct
}

export function getFeeds () {
  return Feeds.Feeds
}
export function getProduct () {
  return Product.getProduct()
}
export function getScadule () {
  return Scadule.getScadule
}
