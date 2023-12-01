import cartReducer from "./productIncDec";
import wishListReducer from "./wishListReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // key and value
  // productList: cartReducer   ,
  // cartReducer:cartReducer
  cartReducer,
  wishListReducer,
});

export default rootReducer;
