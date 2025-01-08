import type { PropsWithChildren } from "react";
import type { ProductItem } from "../../store";
import {
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductTotalPrice,
} from "./components";
import ProductItemContext from "./ProductItemContext";

type Props = PropsWithChildren<{ data: ProductItem; isProductPage?: boolean }>;

function ProductItemComponent(props: Props) {
  const { children, data, isProductPage } = props;

  return (
    <ProductItemContext.Provider value={{ data, isProductPage }}>
      {children}
    </ProductItemContext.Provider>
  );
}

ProductItemComponent.Image = ProductImage;
ProductItemComponent.Title = ProductTitle;
ProductItemComponent.Price = ProductPrice;
ProductItemComponent.TotalPrice = ProductTotalPrice;

export default ProductItemComponent;
