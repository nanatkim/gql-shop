import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAddProduct } from "../../../redux/Cart/cart.actions";

import { formatMoney } from "../../../utils/formatMoney";
import "./style.scss";
import Button from "../../../components/forms/Button";

const Product = (product) => {
  const dispatch = useDispatch();
  const { id, name, imgUrl, price, qtty } = product;

  const configAddToCart = {
    type: "button",
  };

  const handleAddToCart = (product) => {
    if (!product) return;

    dispatch(checkAddProduct(product));
  };

  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <img src={imgUrl} alt={name} />
      </Link>
      <Link to={`/product/${id}`}>
        <span>{name}</span>
      </Link>
      <span className="price">{price && formatMoney(price)}</span>
      {qtty > 0 ? (
        <Button {...configAddToCart} onClick={() => handleAddToCart(product)}>
          Comprar
        </Button>
      ) : (
        <span className="out-of-stock">Sem estoque</span>
      )}
    </div>
  );
};

export default Product;
