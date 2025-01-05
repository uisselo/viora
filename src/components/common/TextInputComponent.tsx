import classNames from "classnames";
import type { HeroIconProp } from "../../utils";

type Props = {
  label?: string;
  placeholder?: string;
  hideLabel?: boolean;
  icon?: HeroIconProp;
};

function TextInputComponent(props: Props) {
  const {
    label = "Label",
    placeholder = "Placeholder",
    hideLabel,
    icon: Icon,
  } = props;

  const CLASSES = {
    CONTAINER: classNames(
      "relative flex items-center px-3 w-full bg-transparent text-sm md:text-base rounded border border-gray-400",
      hideLabel ? "py-2" : "py-3",
    ),
    INPUT_BOX: "block w-full appearance-none focus:outline-none focus:ring-0",
    LABEL:
      "absolute top-2 z-10 text-gray-600 text-xs md:text-sm bg-white px-1 transform -translate-y-4 -translate-x-1 origin-[0]",
    ICON: "w-4 h-4 md:w-5 md:h-5 text-gray-400 stroke-current stroke-2",
  };

  return (
    <div className={CLASSES.CONTAINER}>
      <input
        id="input_box"
        type="text"
        className={CLASSES.INPUT_BOX}
        placeholder={placeholder}
      />
      {!hideLabel && (
        <label htmlFor="input_box" className={CLASSES.LABEL}>
          {label}
        </label>
      )}
      {Icon && <Icon className={CLASSES.ICON} />}
    </div>
  );
}

export default TextInputComponent;
