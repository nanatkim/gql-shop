import { combineReducers } from "redux";
import productReducer from "./Product/product.reducer";
import cartReducer from "./Cart/cart.reducer";
import orderReducer from "./Order/order.reducer";
import errorReducer from "./Error/error.reducer";

export default combineReducers({
  productsData: productReducer,
  cartData: cartReducer,
  ordersData: orderReducer,
  errorsData: errorReducer,
});
