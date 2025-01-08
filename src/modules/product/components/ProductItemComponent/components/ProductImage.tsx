import type { HTMLAttributes } from "react";
import { cn } from "@Utilities";
import { useProductItemContext } from "../ProductItemContext";

export function ProductImage(props: HTMLAttributes<HTMLDivElement>) {
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
