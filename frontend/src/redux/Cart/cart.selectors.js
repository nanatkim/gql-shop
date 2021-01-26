import { createSelector } from "reselect";

export const selectCartData = (state) => state.cartData;

export const selectCartItems = createSelector(
  [selectCartData],
  (cartData) => cartData.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((cartQtty, cartItem) => cartQtty + cartItem.cartQtty, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (cartQtty, cartItem) => cartQtty + cartItem.cartQtty * cartItem.price,
    0
  )
);
