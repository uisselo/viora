import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { forwardRef, useEffect, useState } from "react";
import ButtonIconComponent from "./ButtonIconComponent";

type Props = {
  value?: number;
  limit?: number;
  isDisplayOnly?: boolean;
  onChange?: (value: number) => void;
};

const CLASSES = {
  CONTAINER: "flex items-center justify-center",
  BORDER: "border border-gray-300",
  TEXT: "text-sm font-medium text-center break-words md:text-base",
};

const applyBorderedContainer = (...classes: string[]) =>
  classNames(...classes, CLASSES.CONTAINER, CLASSES.BORDER);

function DefaultDisplay(props: Props) {
  return (
    <div className={applyBorderedContainer("w-9 h-9")}>
      <p className={CLASSES.TEXT}>{props.value}</p>
    </div>
  );
}

const AdjustmentDisplay = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { limit = 10, onChange } = props;
  const [number, setNumber] = useState<number>(0);

  const onClickMinus = () => setNumber((prev) => Math.max(0, prev - 1));
  const onClickPlus = () => setNumber((prev) => Math.min(limit, prev + 1));

  useEffect(() => {
    if (onChange) {
      onChange(number);
    }
  }, [number, onChange]);

  return (
    <div ref={ref} className={applyBorderedContainer("px-1")}>
      <ButtonIconComponent icon={MinusIcon} onClick={onClickMinus} />
      <div className={classNames("w-9 h-9", CLASSES.CONTAINER)}>
        <p className={CLASSES.TEXT}>{number}</p>
      </div>
      <ButtonIconComponent icon={PlusIcon} onClick={onClickPlus} />
    </div>
  );
});

const QuantityComponent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { isDisplayOnly } = props;

  const DisplayComponent = isDisplayOnly ? DefaultDisplay : AdjustmentDisplay;

  return <DisplayComponent {...props} ref={ref} />;
});

export default QuantityComponent;
