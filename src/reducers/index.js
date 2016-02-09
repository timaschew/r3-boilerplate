import * as ActionTypes from '../actions'
import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

function dummyReducer(state = {}, action) {
  return state
}

//
const rootReducer = combineReducers({
  routing: routeReducer,
  dummyReducer
})

export default rootReducer
