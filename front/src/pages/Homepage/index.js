import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearErrors } from "../../redux/Error/error.actions";
import { fetchProductsStart } from "../../redux/Product/product.actions";
import Product from "./Product";
import "./style.scss";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const Homepage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart());

    return () => {
      dispatch(clearErrors());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main">
      <div className="products">
        {products.map((product, index) => {
          return <Product key={index} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
