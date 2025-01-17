import { createContext, useContext } from "react";
import type { OrderContextData } from "./types";

const OrderContext = createContext<OrderContextData>({} as OrderContextData);

export default OrderContext;

export function useOrderContext() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error(
      "useOrderContext must be used within the OrderContext.Provider.",
    );
  }

  return context;
}
