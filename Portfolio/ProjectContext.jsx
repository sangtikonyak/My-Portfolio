import { createContext, useReducer } from "react";

export const ProductContext = createContext({});

const ProductReducer = (state, action) => {
  if (action.type === "ADD-PRODUCT") {
    return action.payload;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, {});

  const addProduct = (product) => {
    dispatch({ type: "ADD-PRODUCT", payload: product });
  };

  return (
    <ProductContext.Provider value={{ state, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
