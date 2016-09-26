import { OTHERADD, OTHERSUB } from '../actionTypes'

export default function other(state = 1, action) {
  switch (action.type) {
    case OTHERADD:
      	return state + 1
    case OTHERSUB:
    	return state - 1
    default:
      	return state
  }
}
