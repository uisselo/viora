import { createContext, useContext } from "react";
import type { ProductItem } from "../../store";

type ProductItemContext = { data: ProductItem; isProductPage?: boolean };

const ProductItemContext = createContext<ProductItemContext>(
  {} as ProductItemContext,
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
