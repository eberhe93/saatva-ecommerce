import { ADD_ANIMATION_CART_CLASS, ADD_IMG_ANIMATION_PRODUCT, CLEAR_STATE } from "../actions/types/animationCartType";

const initialState = {
  classAnimationCart: '',
  imgProductAnimation: '',
}

export function animationCartReducer(state=initialState, {type, payload}){
  switch (type) {
    case ADD_ANIMATION_CART_CLASS:
      return {...state, classAnimationCart: payload}
    case ADD_IMG_ANIMATION_PRODUCT: 
      return {...state, imgProductAnimation: payload}
    case CLEAR_STATE: 
      return {classAnimationCart: '', imgProductAnimation: ''}
    default:
      return state
  }
}