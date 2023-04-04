import { createContext } from "react";

export const CartContex = createContext();

const CartContexProvider = ({ children }) => {
  return <CartContex.Provider>{children}</CartContex.Provider>;
};

export default CartContexProvider;
