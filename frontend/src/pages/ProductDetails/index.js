import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { clearErrors } from "../../redux/Error/error.actions";
import ProductCard from "../../components/ProductCard";
import "./style.scss";

const ProductDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main">
      <ProductCard />
    </div>
  );
};

export default ProductDetails;
