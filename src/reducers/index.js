import { combineReducers } from "redux";
import { animationCartReducer } from "./animationCartReducers";
import { dataCartReducer } from "./dataCartReducers";

export const allReducer = combineReducers({
  animationCart: animationCartReducer,
  dataCart: dataCartReducer
})