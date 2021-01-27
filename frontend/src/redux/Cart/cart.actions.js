import cartTypes from "./cart.types";
import { existingCartItem } from "./cart.utils";
import { setErrors, clearErrors } from "../Error/error.actions";

export const checkAddProduct = (nextCartItem) => (dispatch, getState) => {
  const { cartItems } = getState().cartData;
  const cartItemExists = existingCartItem({
    prevCartItems: cartItems,
    nextCartItem,
  });

  dispatch(clearErrors());
  if (cartItemExists) {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === nextCartItem.id
    );

    const { name, qtty } = existingCartItem;
    if (qtty === 0) {
      dispatch(
        setErrors([
          { message: `Product "${name}" is out of stock for current quantity` },
        ])
      );
    } else {
      dispatch(addProduct(nextCartItem));
    }
  } else {
    dispatch(addProduct(nextCartItem));
  }
};

export const addProduct = (nextCartItem) => ({
  type: cartTypes.ADD_TO_CART,
  payload: nextCartItem,
});

export const removeCartItem = (cartItem) => (dispatch) => {
  dispatch(clearErrors());
  dispatch({
    type: cartTypes.REMOVE_CART_ITEM,
    payload: cartItem,
  });
};

export const reduceCartItem = (cartItem) => (dispatch) => {
  dispatch(clearErrors());
  dispatch({
    type: cartTypes.REDUCE_CART_ITEM,
    payload: cartItem,
  });
};

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART,
});
