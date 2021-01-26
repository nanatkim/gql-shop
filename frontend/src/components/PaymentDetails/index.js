import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartTotal,
  selectCartItems,
} from "./../../redux/Cart/cart.selectors";
import { clearCart } from "../../redux/Cart/cart.actions";
import { clearErrors } from "../../redux/Error/error.actions";
import { createOrdertStart } from "../../redux/Order/order.actions";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import "./style.scss";
import { useHistory } from "react-router-dom";
import { formatMoney } from "../../utils/formatMoney";

const mapState = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
});

const secondState = ({ ordersData }) => ({
  status: ordersData.status,
});

const PaymentDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { total, cartItems } = useSelector(mapState);
  const { status } = useSelector(secondState);
  const [customer, setCustomer] = useState("");
  const [creditCard, setCreditCard] = useState("");

  const resetForm = () => {
    setCustomer("");
    setCreditCard("");
  };

  useEffect(() => {
    if (status) {
      resetForm();
      dispatch(clearCart());
      history.push("/");
    }

    // eslint-disable-next-line
  }, [status]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(createOrdertStart({ cartItems, customer, creditCard }));
  };

  return (
    <div className="payment-details">
      <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            required
            label="Nome do cliente"
            type="text"
            placeholder="Nome"
            value={customer}
            handleChange={(e) => setCustomer(e.target.value)}
          />
          <FormInput
            required
            label="Cartão de crédito"
            type="text"
            placeholder="0000 0000 0000 0000"
            value={creditCard}
            handleChange={(e) => setCreditCard(e.target.value)}
          />
          <Button type="submit">Confirmar compra</Button>
        </form>
      </div>
      <div className="summary">
        <span className="title">Resumo da compra</span>
        {cartItems.map((item, index) => {
          return (
            <div className="row" key={index}>
              <span>{item.name}</span>
              <div className="values">
                <span>x{item.cartQtty}</span>
                <span className="price">
                  {item.price && formatMoney(item.price)}
                </span>
              </div>
            </div>
          );
        })}
        <div className="total">
          <span className="title">Total</span>
          <span>{total && formatMoney(total)}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
