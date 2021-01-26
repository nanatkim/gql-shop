import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearErrors } from "../../redux/Error/error.actions";
import { fetchOrdersStart } from "../../redux/Order/order.actions";
import { formatMoney } from "../../utils/formatMoney";
import "./style.scss";

const mapState = ({ ordersData }) => ({
  orders: ordersData.orders,
});

const Order = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchOrdersStart());

    return () => {
      dispatch(clearErrors());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="order-history">
      {orders.map((item, index) => {
        return (
          <div className="order" key={index}>
            <div className="id">ORDER ID#{item.id}</div>
            <div className="customer">{item.customer}</div>
            <div className="items">
              {item.products.map((product, pi) => {
                return (
                  <div className="item" key={pi}>
                    <span>{product.product.name}</span>
                    <span>x {product.qtty}</span>
                  </div>
                );
              })}
            </div>
            <div className="total">{formatMoney(item.total)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Order;
