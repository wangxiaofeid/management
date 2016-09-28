import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import user from './user'
import other from './other'
import sideBar from './sideBar'

const rootReducer = combineReducers({
  	user,
  	other,
  	sideBar,
  	routing
})

export default rootReducer
