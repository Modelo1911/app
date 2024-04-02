import { createContext } from "react";

/**
 * context is an interface / definition of the data
 * should not have implematations
 */

const DataContext = createContext({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default DataContext;
