import { TrashIcon } from "@heroicons/react/24/outline";
import type { ProductItem } from "../../store";
import ButtonIconComponent from "./ButtonIconComponent";
import QuantityComponent from "./QuantityComponent";
import { useMeasure } from "@uidotdev/usehooks";
import { useMemo } from "react";

type Props = {
  display?: "default" | "shopping bag";
  data: ProductItem;
};

function DefaultDisplay(data: Props["data"]) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="relative w-full bg-white border-[1.5px] border-gray-300 aspect-square">
        <img className="absolute inset-0" src={data.thumbnail} alt="Product" />
      </div>
      <div className="flex gap-3">
        <p className="text-sm font-semibold grow md:text-base">{data.title}</p>
        <p className="text-sm font-medium md:text-base whitespace-nowrap">
          $ {data.price}
        </p>
      </div>
    </div>
  );
}

function ShoppingBagDisplay(data: Props["data"]) {
  const [ref, { height: quantityHeight }] = useMeasure();

  return (
    <div className="grid w-full grid-cols-4 gap-4 md:flex lg:gap-5">
      <div className="relative col-span-1 w-full md:w-[120px] bg-white border-[1.5px] border-gray-300 aspect-square">
        <img className="absolute inset-0" src={data.thumbnail} alt="Product" />
      </div>
      <div className="flex justify-between col-span-3 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold md:text-base">{data.title}</p>
          <p className="text-sm font-medium md:text-base whitespace-nowrap">
            $ {data.price}
          </p>
        </div>
        <div className="flex flex-col items-end justify-between w-full">
          <p className="text-sm font-semibold md:text-base whitespace-nowrap">
            $ 120.00
          </p>
          <div className="flex items-center gap-2">
            <ButtonIconComponent
              icon={TrashIcon}
              isBordered
              height={quantityHeight || 20}
            />
            <QuantityComponent ref={ref} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductItemComponent(props: Props) {
  const { display = "default", data } = props;

  const MAP_DISPLAY = useMemo(
    () => ({
      default: () => DefaultDisplay(data),
      "shopping bag": () => ShoppingBagDisplay(data),
    }),
    [data],
  );

  const DisplayComponent = MAP_DISPLAY[display];

  return <DisplayComponent />;
}

export default ProductItemComponent;
