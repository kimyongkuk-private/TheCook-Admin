// implement your own methods in here, if your data is coming from A rest API

import * as Product from './product'
import * as Scadule from './Scadule'
import * as Feeds from './Feeds'
import * as Auth from './auth'

export default {
  Product,
  Scadule,
  Feeds,
  Auth
  // getProduct: Product.getProduct
}

export function getFeeds () {
  return Feeds.getFeeds()
}
export function getProduct () {
  return Product.getProduct()
}
export function getScadule () {
  return Scadule.getScadule()
}
