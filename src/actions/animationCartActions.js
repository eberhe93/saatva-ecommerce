import { ADD_ANIMATION_CART_CLASS, ADD_IMG_ANIMATION_PRODUCT, CLEAR_STATE } from "./types/animationCartType"

export const addAnimationCartClass = (payload) => {
  return {
    type: ADD_ANIMATION_CART_CLASS,
    payload
  }
}

export const addImgCartProduct = (payload) => {
  return {
    type: ADD_IMG_ANIMATION_PRODUCT,
    payload
  }
}

export const clearStateAnimation = () => {
  return {
    type: CLEAR_STATE
  }
}