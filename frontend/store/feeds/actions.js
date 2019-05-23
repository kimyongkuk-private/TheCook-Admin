// import { ErrorHandler } from '@/plugins/errHandler'
import { CREATE, READ, UPDATE, DELETE } from './values/action-types'
import { CREATE_URL, READ_URL, UPDATE_URL, DELETE_URL } from './values/action-urls'

export default {
  [CREATE] (payload) {
    return CreateFeedLogic(payload, this.$axios).then(response => {
      return response
    }).catch(error => {
      throw (error)
    })
  },
  [READ] () {
    ReadFeedLogic()
  },
  [UPDATE] () {
    UpdateFeedLogic()
  },
  [DELETE] () {
    DeleteFeedLogic()
  }
}

/**
 * Feed Create Function
 * @method post
 * @param payload{ title content }
 * @returns status
 */
const CreateFeedLogic = (payload, $axios) => {
  return $axios.$post(CREATE_URL, payload)
}
/**
 * Feed Read Function
 * @method get
 * @param none
 * @returns response{ }
 */
const ReadFeedLogic = ($axios) => {
  return $axios.$get(READ_URL).catch(e => console.log(e))
}
/**
 * Feed Update Function
 * @method post
 * @param payload{ title content }
 * @returns status
 */
const UpdateFeedLogic = (payload, $axios) => {
  return $axios.$post(UPDATE_URL, payload).catch(e => console.log(e))
}
/**
 * Feed Delete Function
 * @method post
 * @param payload{ password }
 * @returns status
 */
const DeleteFeedLogic = (payload, $axios) => {
  return $axios.$post(DELETE_URL, payload).catch(e => console.log(e))
}
