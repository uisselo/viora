import type { TextareaHTMLAttributes } from "react";
import { cn, type HeroIconProp } from "@Utilities";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type Props<T extends FieldValues> = {
  label?: string;
  hideLabel?: boolean;
  icon?: HeroIconProp;
  error?: string;
  register?: UseFormRegister<T>;
  isOptional?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextAreaComponent<T extends FieldValues>(props: Props<T>) {
  const {
    label = "Label",
    hideLabel,
    icon: Icon,
    error,
    register,
    isOptional,
    id,
    placeholder = "Placeholder",
    className,
    ...textAreaProps
  } = props;
  return (
    <div className="flex flex-col w-full gap-0.5">
      <div
        className={cn(
          "relative flex items-center px-3 w-full bg-white text-sm md:text-base rounded border border-gray-400",
          { "border-red-500": error },
          hideLabel ? "py-2" : "py-3",
          className,
        )}
      >
        <textarea
          id={id}
          className="block w-full appearance-none focus:outline-none focus:ring-0"
          placeholder={isOptional ? `${placeholder} (Optional)` : placeholder}
          {...(id && register && register(id as Path<T>))}
          {...textAreaProps}
        />
        {!hideLabel && (
          <label
            htmlFor={id}
            className={cn(
              "absolute top-2 z-10 text-gray-600 text-xs md:text-sm bg-white px-1 transform -translate-y-4 -translate-x-1 origin-[0]",
              { "text-red-500": error },
            )}
          >
            {label}
          </label>
        )}
        {Icon && (
          <Icon className="text-gray-400 stroke-current stroke-2 size-4 md:size-5" />
        )}
      </div>
      {error && (
        <p className="text-xs font-medium text-red-500 md:text-sm">{error}</p>
      )}
    </div>
  );
}

export default TextAreaComponent;
