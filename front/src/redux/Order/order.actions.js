import orderTypes from "./order.types";

export const fetchOrdersStart = () => ({
  type: orderTypes.FETCH_ORDERS_START,
});

export const setOrders = (orders) => ({
  type: orderTypes.SET_ORDERS,
  payload: orders,
});

export const createOrdertStart = (orderData) => ({
  type: orderTypes.CREATE_ORDER_START,
  payload: orderData,
});

export const setStatus = (status) => ({
  type: orderTypes.SET_STATUS,
  payload: status,
});
