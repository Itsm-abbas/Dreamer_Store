import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QUANTITY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./cart.types";
import { toast } from "react-toastify";

export const AddToCart = (itemId) => {
  toast.success("Item added to cart");
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const RemoveFromCart = (itemId) => {
  toast.error("Item deleted from cart");
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const AdjustQuantity = (itemId, value) => {
  return {
    type: ADJUST_QUANTITY,
    payload: {
      id: itemId,
      quantity: value,
    },
  };
};
export const AddToWishlist = (itemId) => {
  toast.success("Item added to wish list");
  return {
    type: ADD_TO_WISHLIST,
    payload: {
      id: itemId,
    },
  };
};
export const RemoveFromWishlist = (itemId) => {
  toast.success("Item removed from wish list");
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: {
      id: itemId,
    },
  };
};
