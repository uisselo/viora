import clsx from "clsx";
import { useProductItemContext } from "../ProductItemContext";

export function ProductPrice() {
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
