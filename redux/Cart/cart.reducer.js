import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QUANTITY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./cart.types";
import products from "../../utils/data";
import Cookies from "js-cookie";

const INITIAL_STATE = {
  products,
  cart: Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [],
  wishList: Cookies.get("wishList") ? JSON.parse(Cookies.get("wishList")) : [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = products.find((product) => product.id === action.payload.id);
      const inCart = state.cart.some((item) => item.id === action.payload.id)
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state.cart, { ...item, qty: 1 }];
      Cookies.set("cart", JSON.stringify(inCart));
      return {
        ...state,
        cart: inCart,
      };

    case REMOVE_FROM_CART:
      let newCart = state.cart.filter((item) => item.id != action.payload.id);
      Cookies.set("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    case ADJUST_QUANTITY:
      let newCart2 = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.quantity }
          : item
      );
      Cookies.set("cart", JSON.stringify(newCart2));
      return {
        ...state,
        cart: newCart2,
      };
    case ADD_TO_WISHLIST:
      let List = products.find((item) => item.id === action.payload.id);
      Cookies.set("wishList", JSON.stringify([...state.wishList, { ...List }]));
      return {
        ...state,
        wishList: [...state.wishList, { ...List }],
      };
    case REMOVE_FROM_WISHLIST:
      let newList = state.wishList.filter(
        (item) => item.id != action.payload.id
      );

      Cookies.set("wishList", JSON.stringify(newList));
      return {
        ...state,
        wishList: newList,
      };

    default:
      return state;
  }
};

export default reducer;
