import { USERUPDATA, USERREMOVE } from '../actionTypes'

const USERINIT = {
	username: '',
	token: ''
}

export default function user(state = USERINIT, action) {
  switch (action.type) {
    case USERUPDATA:
      	return Object.assign({}, state, action.user);
    case USERREMOVE:
    	return state - 1
    default:
      	return state
  }
}