import { USERUPDATA, USERREMOVE } from '../actionTypes'

export function userUpdata(user) {
  return {
    type: USERUPDATA,
    user
  }
}

export function userRemove() {
  return {
    type: USERREMOVE
  }
}