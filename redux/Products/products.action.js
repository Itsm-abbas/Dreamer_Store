import { FILTER_PRODUCTS } from "./products.types";
const filter = (category) => {
  return {
    type: FILTER_PRODUCTS,
    payload: category,
  };
};
export default filter;
