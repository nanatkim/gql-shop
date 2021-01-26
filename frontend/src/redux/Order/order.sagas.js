import { takeLatest, put, all, call } from "redux-saga/effects";
import { handleFetchOrders, handleCreateOrder } from "./order.helpers";
import orderTypes from "./order.types";
import { setOrders, setStatus } from "./order.actions";
import { setErrors } from "../Error/error.actions";

export function* fetchOrders() {
  const orders = yield handleFetchOrders();
  yield put(setOrders(orders));
}

export function* onFetchOrdersStart() {
  yield takeLatest(orderTypes.FETCH_ORDERS_START, fetchOrders);
}

export function* createOrder({ payload: order }) {
  const response = yield handleCreateOrder(order);
  if (response.errors) {
    yield put(setStatus(false));
    yield put(setErrors(response.errors));
  } else {
    yield put(setStatus(true));
  }
}

export function* onCreateOrderStart() {
  yield takeLatest(orderTypes.CREATE_ORDER_START, createOrder);
}

export default function* orderSagas() {
  yield all([call(onFetchOrdersStart), call(onCreateOrderStart)]);
}
