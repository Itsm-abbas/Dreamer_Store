import { FILTER_PRODUCTS } from "./products.types";
import products from "../../utils/data";
const initialState = {
  products: products,
  filteredProducts: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return {
        ...state,
        category: action.payload,
        filteredProducts: state.products.filter(
          (product) => product.category === action.payload
        ),
      };
    default:
      return state;
  }
};
export default productReducer;
