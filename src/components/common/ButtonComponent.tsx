import type { ButtonHTMLAttributes } from "react";
import { type HeroIconProp, cn } from "@Utilities";

type Props = {
  text?: string;
  variant?: "primary" | "outline" | "link";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  icon?: HeroIconProp;
  iconPosition?: "trailing" | "leading";
  isFull?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const MAP_VARIANT = {
  primary: "text-white bg-primary",
  outline: "text-primary bg-none border-[1.5px] border-primary",
  link: "text-primary bg-none p-0",
};

const MAP_SIZE = {
  xs: "text-xs px-2 py-1.5 gap-1.5",
  sm: "text-sm px-3 py-2 gap-1.5",
  base: "px-4 py-3 gap-2",
  lg: "text-lg px-4 py-3 gap-2",
  xl: "text-xl px-4 py-3 gap-2",
};

const MAP_ICON_SIZE = {
  xs: "size-3",
  sm: "size-4",
  base: "size-[18px]",
  lg: "size-5",
  xl: "size-6",
};

function ButtonComponent(props: Props) {
  const {
    text = "Button",
    variant = "primary",
    size = "base",
    icon: Icon,
    iconPosition = "leading",
    isFull,
    disabled,
    className,
    ...buttonProps
  } = props;

  return (
    <>
      <button
        className={cn(
          "flex-center font-semibold rounded cursor-pointer",
          { "flex-row-reverse": iconPosition === "trailing" },
          isFull ? "w-full" : "w-max",
          MAP_SIZE[size],
          MAP_VARIANT[variant],
          disabled
            ? variant !== "link"
              ? "bg-gray-400 cursor-not-allowed"
              : "text-gray-800 cursor-not-allowed"
            : "",
          className,
        )}
        {...buttonProps}
      >
        {text}
        {Icon && (
          <Icon
            className={cn("stroke-current stroke 1.5", MAP_ICON_SIZE[size])}
          />
        )}
      </button>
    </>
  );
}

export default ButtonComponent;
