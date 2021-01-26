import { all, call } from "redux-saga/effects";

import productSagas from "./Product/product.sagas";
import orderSagas from "./Order/order.sagas";

export default function* rootSaga() {
  yield all([call(productSagas), call(orderSagas)]);
}
