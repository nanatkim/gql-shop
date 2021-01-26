import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/Cart/cart.selectors";

import "./style.scss";
import Logo from "../../assets/loona.jpg";

const mapState = (state) => ({
  totalNumCartItems: selectCartItemsCount(state),
});

const Header = () => {
  const { totalNumCartItems } = useSelector(mapState);

  return (
    <nav className="nav">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="gql shop" />
          </Link>
        </div>
      </div>
      <ul className="list">
        <li className="item">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge badge-warning" id="lblCartCount">
              {totalNumCartItems}
            </span>
          </Link>
        </li>
        <Link to="/history">
          <li className="item">Histórico</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
