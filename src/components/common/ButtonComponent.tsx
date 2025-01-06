import classNames from "classnames";
import type { HeroIconProp } from "../../utils";

type Props = {
  text?: string;
  variant?: "primary" | "outline" | "link";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  icon?: HeroIconProp;
  iconPosition?: "trailing" | "leading";
  isFull?: boolean;
  onClick?: () => void;
};

const MAP_VARIANT = {
  primary: "text-white bg-primary",
  outline: "text-primary bg-none border-[1.5px] border-primary",
  link: "text-primary bg-none px-0 py-0",
};

const MAP_SIZE = {
  xs: "text-xs px-2 py-1.5 gap-1.5",
  sm: "text-sm px-3 py-2 gap-1.5",
  base: "px-4 py-3 gap-2",
  lg: "text-lg px-4 py-3 gap-2",
  xl: "text-xl px-4 py-3 gap-2",
};

const MAP_ICON_SIZE = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  base: "w-[18px] h-[18px]",
  lg: "w-5 h-5",
  xl: "w-6 h-6",
};

function ButtonComponent(props: Props) {
  const {
    text = "Button",
    variant = "primary",
    size = "base",
    icon: Icon,
    iconPosition = "leading",
    isFull,
    onClick,
  } = props;

  const CLASSES = {
    CONTAINER: classNames(
      "flex font-semibold rounded justify-center items-center cursor-pointer",
      isFull ? "w-full" : "w-max",
      MAP_SIZE[size],
      MAP_VARIANT[variant],
      { "!p-0": variant === "link" },
      { "flex-row-reverse": iconPosition === "trailing" },
    ),
    ICON: classNames("stroke-current stroke-1.5", MAP_ICON_SIZE[size]),
  };

  return (
    <button className={CLASSES.CONTAINER} onClick={onClick}>
      {text}
      {Icon && <Icon className={CLASSES.ICON} />}
    </button>
  );
}

export default ButtonComponent;
