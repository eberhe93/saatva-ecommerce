import { ADD_DATA_ITEM } from "./types/dataCartType"

export const addDataCart = product => {
  return {
    type: ADD_DATA_ITEM,
    payload: product
  }
}