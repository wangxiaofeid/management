import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import counter from './other'

const rootReducer = combineReducers({
  other,
})

export default rootReducer
