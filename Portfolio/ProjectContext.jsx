import { createContext, useReducer } from "react";
import { PROJECTS } from "./Projects";

export const ProductContext = createContext();
const projects = PROJECTS;

const ProductReducer = (state, action) => {
  if (action.type === "ADD-PRODUCT") {
    const filteredProjects = state.find((project) => {
      return project.id === action.payload;
    });

    return filteredProjects;
  }
  return state;
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, projects);

  const addProduct = (product) => {
    dispatch({ type: "ADD-PRODUCT", payload: product });
  };

  return (
    <ProductContext.Provider value={{ state }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
