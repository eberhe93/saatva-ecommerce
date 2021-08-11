import { ADD_DATA_ITEM } from "../actions/types/dataCartType";

const initialState = {
  itemTotal: 0,
  cartItems: {},
  cartTotal: 0
}

export function dataCartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_DATA_ITEM:
      let obj = { ...state.cartItems };
      if (state.cartItems[payload.name] === undefined) {
        obj[payload.name] = {
          quantity: 1,
          price: payload.price,
          imageFileName: payload.imageFileName
        }
      }
      else {
        obj[payload.name].quantity = obj[payload.name].quantity + 1
      }
      return { ...state, itemTotal: state.itemTotal + 1, cartTotal: state.cartTotal + payload.price, cartItems: obj }
    default: return state
  }
}
