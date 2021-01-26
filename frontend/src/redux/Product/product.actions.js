import productTypes from "./product.types";

export const fetchProductsStart = () => ({
  type: productTypes.FETCH_PRODUCTS_START,
});

export const setProducts = (products) => ({
  type: productTypes.SET_PRODUCTS,
  payload: products,
});

export const fetchProductStart = (productID) => ({
  type: productTypes.FETCH_PRODUCT_START,
  payload: productID,
});

export const setProduct = (product) => ({
  type: productTypes.SET_PRODUCT,
  payload: product,
});
