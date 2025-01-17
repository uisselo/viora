import { forwardRef, useState } from "react";
import clsx from "clsx";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import ButtonIconComponent from "./ButtonIconComponent";

type Props = {
  value?: number;
  limit?: number;
  isDisplayOnly?: boolean;
  isButtonDisabled?: boolean;
  onChange?: (value: number) => void;
};

const QuantityComponent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { isDisplayOnly } = props;

  const DisplayComponent = isDisplayOnly ? DefaultDisplay : AdjustmentDisplay;

  return <DisplayComponent ref={ref} {...props} />;
});

function DefaultDisplay(props: Props) {
  return (
    <div className="bg-white border border-gray-300 flex-center size-9">
      <p className="text-sm font-medium text-center break-words md:text-base">
        {props.value}
      </p>
    </div>
  );
}

const AdjustmentDisplay = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { value, limit = 10, isButtonDisabled, onChange } = props;
  const [number, setNumber] = useState<number>(value || 1);

  const isMinusDisabled = isButtonDisabled || number === 1;
  const isPlusDisabled = isButtonDisabled || limit === number;

  const onClickButtonIcon = (type: "minus" | "plus") => {
    if (isButtonDisabled) return;

    const newNumber =
      type === "minus" ? Math.max(1, number - 1) : Math.min(limit, number + 1);

    setNumber(newNumber);

    if (onChange) onChange(newNumber);
  };

  return (
    <div ref={ref} className="px-1 border border-gray-300 flex-center w-max">
      <ButtonIconComponent
        icon={MinusIcon}
        iconClassName={clsx(
          "size-3.5 md:size-4",
          isMinusDisabled ? "stroke-gray-400" : "stroke-gray-800",
        )}
        disabled={isMinusDisabled}
        onClick={() => onClickButtonIcon("minus")}
      />
      <div className="flex-center size-9 max-w-9">
        <p className="text-sm font-medium text-center break-words md:text-base">
          {number}
        </p>
      </div>
      <ButtonIconComponent
        icon={PlusIcon}
        iconClassName={clsx(
          "size-3.5 md:size-4",
          isPlusDisabled ? "stroke-gray-400" : "stroke-gray-800",
        )}
        disabled={isPlusDisabled}
        onClick={() => onClickButtonIcon("plus")}
      />
    </div>
  );
});

export default QuantityComponent;
