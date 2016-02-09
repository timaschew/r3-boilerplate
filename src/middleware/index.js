import { UPDATE_LOCATION } from 'react-router-redux'

export default store => next => action => {
  if (action.type === UPDATE_LOCATION) {
    // console.log('page changed')
  }
  return next(action)
}
