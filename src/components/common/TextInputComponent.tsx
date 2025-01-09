import type { InputHTMLAttributes } from "react";
import { type HeroIconProp, cn } from "@Utilities";

type Props = {
  label?: string;
  hideLabel?: boolean;
  icon?: HeroIconProp;
} & InputHTMLAttributes<HTMLInputElement>;

function TextInputComponent(props: Props) {
  const {
    label = "Label",
    hideLabel,
    icon: Icon,
    id,
    placeholder = "Placeholder",
    className,
    ...inputProps
  } = props;

  return (
    <div
      className={cn(
        "relative flex items-center px-3 w-full bg-transparent text-sm md:text-base rounded border border-gray-400",
        hideLabel ? "py-2" : "py-3",
        className,
      )}
    >
      <input
        id={id}
        type="text"
        className="block w-full appearance-none focus:outline-none focus:ring-0"
        placeholder={placeholder}
        {...inputProps}
      />
      {!hideLabel && (
        <label
          htmlFor={id}
          className="absolute top-2 z-10 text-gray-600 text-xs md:text-sm bg-white px-1 transform -translate-y-4 -translate-x-1 origin-[0]"
        >
          {label}
        </label>
      )}
      {Icon && (
        <Icon className="text-gray-400 stroke-current stroke-2 size-4 md:size-5" />
      )}
    </div>
  );
}

export default TextInputComponent;
