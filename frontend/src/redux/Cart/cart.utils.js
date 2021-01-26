export const existingCartItem = ({ prevCartItems, nextCartItem }) => {
  return prevCartItems.find((cartItem) => cartItem.id === nextCartItem.id);
};

export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
  const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

  if (cartItemExists) {
    return prevCartItems.map((cartItem) =>
      cartItem.id === nextCartItem.id
        ? {
            ...cartItem,
            cartQtty: cartItem.cartQtty + 1,
            qtty: cartItem.qtty - 1,
          }
        : cartItem
    );
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      cartQtty: 1,
      qtty: nextCartItem.qtty - 1,
    },
  ];
};

export const handleRemoveCartItem = ({ prevCartItems, cartItemToRemove }) => {
  return prevCartItems.filter((item) => item.id !== cartItemToRemove.id);
};

export const handleReduceCartItem = ({ prevCartItems, cartItemToReduce }) => {
  const existingCartItem = prevCartItems.find(
    (cartItem) => cartItem.id === cartItemToReduce.id
  );

  if (existingCartItem.cartQtty === 1) {
    return prevCartItems.filter(
      (cartItem) => cartItem.id !== existingCartItem.id
    );
  }

  return prevCartItems.map((cartItem) =>
    cartItem.id === existingCartItem.id
      ? {
          ...cartItem,
          cartQtty: cartItem.cartQtty - 1,
        }
      : cartItem
  );
};
