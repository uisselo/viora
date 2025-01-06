import classNames from "classnames";
import type { HeroIconProp } from "../../utils";

type Props = {
  display?: "header" | "default";
  icon: HeroIconProp;
  badgeValue?: string;
  isBordered?: boolean;
  size?: number;
  onClick?: () => void;
};

function HeaderDisplay(props: Props) {
  const { icon: Icon, badgeValue, onClick } = props;

  return (
    <button
      className="relative flex items-center justify-center p-2 duration-300 ease-in-out bg-white rounded-full w-max hover:bg-gray-100 hover:delay-100"
      onClick={onClick}
    >
      <Icon className="stroke-current stroke-1.5 w-7 h-7 text-primary" />
      {badgeValue && (
        <div className="absolute left-0 z-10 flex items-center justify-center w-auto h-auto px-1 translate-x-6 bg-red-500 rounded-full bottom-1 min-w-4">
          <span className="text-xs font-medium text-white whitespace-nowrap">
            {badgeValue}
          </span>
        </div>
      )}
    </button>
  );
}

function DefaultDisplay(props: Props) {
  const { icon: Icon, isBordered, size, onClick } = props;

  return (
    <button
      style={{ width: `${size}px`, height: `${size}px` }}
      className={classNames(
        { "border border-gray-300": isBordered },
        "flex items-center justify-center bg-white min-w-8 min-h-8 aspect-ratio",
      )}
      onClick={onClick}
    >
      <Icon className="stroke-current stroke-1.5 w-3.5 h-3.5 md:w-4 md:h-4" />
    </button>
  );
}

function ButtonIconComponent(props: Props) {
  const MAP_DISPLAY = {
    header: () => HeaderDisplay(props),
    default: () => DefaultDisplay(props),
  };

  const DisplayComponent = MAP_DISPLAY[props.display || "default"];

  return <DisplayComponent />;
}

export default ButtonIconComponent;
