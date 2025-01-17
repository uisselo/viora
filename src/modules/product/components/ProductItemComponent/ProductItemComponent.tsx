import type { HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";
import { cn } from "@Utilities";
import type { ProductItem } from "../../store";
import ProductItemContext, {
  useProductItemContext,
} from "./ProductItemContext";

type Props = PropsWithChildren<
  {
    data: ProductItem;
    isProductPage?: boolean;
  } & HTMLAttributes<HTMLDivElement>
>;

function ProductItemComponent(props: Props) {
  const { children, data, isProductPage, ...divProps } = props;

  return (
    <ProductItemContext.Provider value={{ data, isProductPage }}>
      <div {...divProps}>{children}</div>
    </ProductItemContext.Provider>
  );
}

ProductItemComponent.Image = Image;
ProductItemComponent.Title = Title;
ProductItemComponent.Price = Price;
ProductItemComponent.TotalPrice = TotalPrice;

export default ProductItemComponent;

function Image(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...divProps } = props;
  const { data } = useProductItemContext();

  return (
    <div
      className={cn(
        "w-full flex-center bg-white border-[1.5px] border-gray-300 aspect-square",
        className,
      )}
      {...divProps}
    >
      <img src={data.thumbnail} alt="Product" />
    </div>
  );
}

function Title() {
  const { data, isProductPage } = useProductItemContext();

  return (
    <p
      className={clsx(
        "font-semibold break-words line-clamp-2 w-full",
        isProductPage ? "text-lg md:text-xl" : "text-sm md:text-base",
      )}
    >
      {data.title}
    </p>
  );
}

function Price() {
  const { data, isProductPage } = useProductItemContext();

  return (
    <p
      className={clsx(
        isProductPage
          ? "font-semibold md:text-lg"
          : "text-sm font-medium md:text-base",
        "whitespace-nowrap",
      )}
    >
      $ {data.price}
    </p>
  );
}

function TotalPrice({ value }: { value: number }) {
  return (
    <p className="text-sm font-semibold text-right md:text-base whitespace-nowrap">
      $ {value}
    </p>
  );
}
