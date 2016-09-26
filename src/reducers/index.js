import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import other from './other'

const rootReducer = combineReducers({
  other,
  routing
})

export default rootReducer
