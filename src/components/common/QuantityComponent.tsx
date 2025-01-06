import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { forwardRef, useState } from "react";
import ButtonIconComponent from "./ButtonIconComponent";

type Props = {
  value?: number;
  limit?: number;
  isDisplayOnly?: boolean;
};

const CLASSES = {
  CONTAINER: "flex items-center px-2 w-max bg-white border border-gray-300",
  NUMBER_DISPLAY_CONTAINER:
    "flex items-center justify-center w-full h-full max-w-8 py-2 min-w-8 aspect-ratio",
  NUMBER_DISPLAY_TEXT: "font-medium text-center break-words",
};

function NumberDisplay({ data }: { data: number }) {
  return (
    <div className={CLASSES.NUMBER_DISPLAY_CONTAINER}>
      <p className={CLASSES.NUMBER_DISPLAY_TEXT}>{data}</p>
    </div>
  );
}

const QuantityComponent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { value, limit, isDisplayOnly } = props;

  const [number, setNumber] = useState<number>(0);

  const onClickMinus = () => setNumber((prev) => Math.max(0, prev - 1));
  const onClickPlus = () =>
    setNumber((prev) => Math.min(limit || 10, prev + 1));

  return (
    <div ref={ref} className={CLASSES.CONTAINER}>
      {!isDisplayOnly && (
        <ButtonIconComponent icon={MinusIcon} onClick={onClickMinus} />
      )}
      <NumberDisplay data={isDisplayOnly && value ? value : number} />
      {!isDisplayOnly && (
        <ButtonIconComponent icon={PlusIcon} onClick={onClickPlus} />
      )}
    </div>
  );
});

export default QuantityComponent;
