import { createContext, useContext } from "react";
import type { ProductItem } from "../../store";

type ProductItemContextData = { data: ProductItem; isProductPage?: boolean };

const ProductItemContext = createContext<ProductItemContextData>(
  {} as ProductItemContextData,
);

export default ProductItemContext;

export function useProductItemContext() {
  const context = useContext(ProductItemContext);

  if (!context) {
    throw new Error(
      "useProductItemContext must be used within the ProductItemContext.Provider.",
    );
  }

  return context;
}
