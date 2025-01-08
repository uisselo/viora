import clsx from "clsx";
import { useProductItemContext } from "../ProductItemContext";

export function ProductTitle() {
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
