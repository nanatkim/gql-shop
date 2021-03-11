import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { clearErrors } from "../../redux/Error/error.actions";
import Checkout from "../../components/Checkout";
import "./style.scss";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Checkout />
    </div>
  );
};

export default Cart;
