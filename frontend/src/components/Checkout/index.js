import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/Cart/cart.selectors";

import "./style.scss";
import Button from "../forms/Button";
import Item from "./Item";
import { Link, useHistory } from "react-router-dom";
import { formatMoney } from "../../utils/formatMoney";

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const Checkout = () => {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);

  return (
    <div>
      <div className="shopping-cart">
        <div className="title">
          <i className="fas fa-shopping-cart"></i> Resumo do carrinho
        </div>
        {cartItems.length > 0 ? (
          <React.Fragment>
            {cartItems.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Item {...item} />
                </React.Fragment>
              );
            })}

            <div className="total">
              <span>Total: </span>
              <span>{total && formatMoney(total)}</span>
            </div>
            <div className="actions">
              <Button onClick={() => history.goBack()}>
                Continuar comprando
              </Button>
              <Button onClick={() => history.push("/payment")}>Checkout</Button>
            </div>
          </React.Fragment>
        ) : (
          <div className="warning">
            Você não tem nenhum item no carrinho! Clique{" "}
            <Link to="/">aqui</Link> para continuar comprando.
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
