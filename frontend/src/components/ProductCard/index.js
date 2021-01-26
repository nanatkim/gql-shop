import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  setProduct,
} from "../../redux/Product/product.actions";
import { checkAddProduct } from "../../redux/Cart/cart.actions";

import "./style.scss";
import Button from "../forms/Button";
import { formatMoney } from "../../utils/formatMoney";

const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector(mapState);

  const { name, imgUrl, price, details, qtty } = product;

  useEffect(() => {
    dispatch(fetchProductStart({ productID: id }));

    return () => {
      dispatch(setProduct({}));
    };

    // eslint-disable-next-line
  }, []);

  const configAddToCart = {
    type: "button",
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(checkAddProduct(product));
  };

  return (
    <div>
      <div className="details-card">
        <img src={imgUrl} alt={name} />
        <div className="info">
          <span className="name">{name}</span>
          <span className="price">{price && formatMoney(price)}</span>
          <span className="details">{details}</span>
          <div className="actions">
            <div className="stock">
              <span className="label">Estoque:</span>{" "}
              {qtty > 0 ? (
                qtty
              ) : (
                <span className="out-of-stock">Sem estoque</span>
              )}
            </div>
            <div className="addToCart">
              {qtty > 0 && (
                <Button
                  {...configAddToCart}
                  onClick={() => handleAddToCart(product)}
                >
                  Comprar
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
