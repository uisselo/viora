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

	return (
		<div
			className={classNames(
				"relative flex items-center px-3 w-[300px] text-sm md:text-base bg-transparent rounded border border-gray-400",
				hideLabel ? "py-2" : "py-3",
			)}
		>
			<input
				id="input_box"
				type="text"
				className="block w-full appearance-none focus:outline-none focus:ring-0"
				placeholder={placeholder}
			/>
			{!hideLabel && (
				<label
					htmlFor="input_box"
					className="absolute text-gray-600 text-xs md:text-sm transform -translate-y-4 -translate-x-1 top-2 z-10 origin-[0] bg-white px-1"
				>
					{label}
				</label>
			)}
			{Icon && (
				<Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 stroke-current stroke-2" />
			)}
		</div>
	);
}

export default TextInputComponent;
