import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn, type HeroIconProp } from "@Utilities";

type Props = PropsWithChildren<
  {
    icon: HeroIconProp;
    iconClassName?: string;
    containerSize?: number;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

function ButtonIconComponent(props: Props) {
  const {
    children,
    icon: Icon,
    iconClassName,
    containerSize,
    className,
    ...buttonProps
  } = props;

  return (
    <button
      style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
      className={cn("relative flex-center p-2 w-max", className)}
      {...buttonProps}
    >
      <Icon
        className={cn(
          "size-7 stroke-current stroke-1.5 stroke-primary",
          iconClassName,
        )}
      />
      {children}
    </button>
  );
}

export default ButtonIconComponent;
