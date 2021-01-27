import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  checkAddProduct,
  reduceCartItem,
} from "../../../redux/Cart/cart.actions";

import { formatMoney } from "../../../utils/formatMoney";
import "./style.scss";

const Item = (product) => {
  const dispatch = useDispatch();
  const { id, name, details, imgUrl, price, cartQtty } = product;

  const handleRemoveCartItem = (id) => {
    dispatch(removeCartItem({ id }));
  };

  const handleAddProduct = (product) => {
    dispatch(checkAddProduct(product));
  };

  const handleReduceCartItem = (product) => {
    dispatch(reduceCartItem(product));
  };

  return (
    <div className="cart-item">
      <div className="buttons">
        <span className="plus-minus" onClick={() => handleRemoveCartItem(id)}>
          x
        </span>
      </div>

      <div className="image">
        <img src={imgUrl} alt={name} />
      </div>

      <div className="description">
        <span>{name}</span>
        <span>{details}</span>
      </div>

      <div className="quantity">
        <button
          className="plus-minus"
          type="button"
          name="button"
          onClick={() => handleReduceCartItem(product)}
        >
          -
        </button>
        <span>{cartQtty} </span>
        <button
          className="plus-minus"
          type="button"
          name="button"
          onClick={() => handleAddProduct(product)}
        >
          +
        </button>
      </div>
      <div className="total-price">
        {price && formatMoney(price * cartQtty)}
      </div>
    </div>
  );
};

export default Item;
