import { forwardRef, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import ButtonIconComponent from "./ButtonIconComponent";

type Props = {
  value?: number;
  limit?: number;
  isDisplayOnly?: boolean;
  onChange?: (value: number) => void;
};

const QuantityComponent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { isDisplayOnly } = props;

  const DisplayComponent = isDisplayOnly ? DefaultDisplay : AdjustmentDisplay;

  return <DisplayComponent ref={ref} {...props} />;
});

function DefaultDisplay(props: Props) {
  return (
    <div className="border border-gray-300 flex-center size-9">
      <p className="text-sm font-medium text-center break-words md:text-base">
        {props.value}
      </p>
    </div>
  );
}

const AdjustmentDisplay = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { value, limit = 10, onChange } = props;
  const [number, setNumber] = useState<number>(value || 1);

  const onClickMinus = () => {
    const newNumber = Math.max(1, number - 1);
    setNumber(newNumber);
    if (onChange) onChange(newNumber);
  };

  const onClickPlus = () => {
    const newNumber = Math.min(limit, number + 1);
    setNumber(newNumber);
    if (onChange) onChange(newNumber);
  };

  return (
    <div ref={ref} className="px-1 border border-gray-300 flex-center w-max">
      <ButtonIconComponent
        icon={MinusIcon}
        onClick={onClickMinus}
        iconClassName="size-3.5 md:size-4 stroke-gray-800"
      />
      <div className="flex-center size-9 max-w-9">
        <p className="text-sm font-medium text-center break-words md:text-base">
          {number}
        </p>
      </div>
      <ButtonIconComponent
        icon={PlusIcon}
        onClick={onClickPlus}
        iconClassName="size-3.5 md:size-4 stroke-gray-800"
      />
    </div>
  );
});

export default QuantityComponent;
