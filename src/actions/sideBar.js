import { SELECT_MENU, EXPAND_MENU } from '../actionTypes'

export function selectMenu(payload) {
  return {
    type: SELECT_MENU,
    payload
  }
}

export function expandMenu(payload) {
  return {
    type: EXPAND_MENU,
    payload
  }
}