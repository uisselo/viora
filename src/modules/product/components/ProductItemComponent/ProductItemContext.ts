import { createContext, useContext } from "react";
import type { ProductItem } from "../../store";

export type Context = { data: ProductItem; isProductPage?: boolean };

const ProductItemContext = createContext<Context>({} as Context);

export default ProductItemContext;

export function useProductItemContext() {
  const context = useContext(ProductItemContext);

  if (!context) {
    throw new Error(
      "Please use valid components as children to ProductItemComponent.",
    );
  }

  return context;
}
