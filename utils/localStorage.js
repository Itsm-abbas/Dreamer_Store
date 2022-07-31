export const addCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCartFromLocalStorage = () => {
  localStorage.removeItem("cart");
};

export const getCartFromLocalStorage = () => {
  const result = localStorage.getItem("cart");
  const cart = result ? JSON.parse(result) : null;
  return cart;
};
