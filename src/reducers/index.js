import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import other from './other'
import sideBar from './sideBar'

const rootReducer = combineReducers({
  other,
  sideBar,
  routing
})

export default rootReducer
