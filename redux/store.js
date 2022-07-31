import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cart/cart.reducer";
import UserReducer from "./User/user.reducer";
import ProductReducer from "./Products/products.reducer";
export const store = configureStore({
  reducer: {
    Cart: CartReducer,
    User: UserReducer,
    Product: ProductReducer,
  },
});
