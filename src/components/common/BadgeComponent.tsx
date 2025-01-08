import { cn } from "@Utilities";
import type { HTMLAttributes } from "react";

type Props = {
  text?: string;
  textClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

function BadgeComponent(props: Props) {
  const { text = "Badge", textClassName, className, ...divProps } = props;

  return (
    <div
      className={cn(
        "absolute flex-center px-1 bg-red-500 rounded-full size-auto min-w-4",
        className,
      )}
      {...divProps}
    >
      <span
        className={cn(
          "text-xs font-medium text-white whitespace-nowrap",
          textClassName,
        )}
      >
        {text}
      </span>
    </div>
  );
}

export default BadgeComponent;
