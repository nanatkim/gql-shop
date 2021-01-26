import { takeLatest, put, all, call } from "redux-saga/effects";
import { handleFetchProducts, handleFetchProduct } from "./product.helpers";
import productTypes from "./product.types";
import { setProducts, setProduct } from "./product.actions";

export function* fetchProducts() {
  const products = yield handleFetchProducts();
  yield put(setProducts(products));
}

export function* onFetchProductsStart() {
  yield takeLatest(productTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* fetchProduct({ payload }) {
  const product = yield handleFetchProduct(payload);
  yield put(setProduct(product));
}

export function* onFetchProductStart() {
  yield takeLatest(productTypes.FETCH_PRODUCT_START, fetchProduct);
}

export default function* productSagas() {
  yield all([call(onFetchProductsStart), call(onFetchProductStart)]);
}
