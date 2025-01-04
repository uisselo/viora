import classNames from "classnames";
import type { HeroIconProp } from "../../utils";

type Props = {
	text?: string;
	variant?: "primary" | "outline" | "link";
	size?: "xs" | "sm" | "base" | "lg" | "xl";
	icon?: HeroIconProp;
	iconPosition?: "trailing" | "leading";
	isFull?: boolean;
	hideText?: boolean;
};

const mapVariant = {
	primary: "text-white bg-primary",
	outline: "text-primary bg-none border-[1.5px] border-primary",
	link: "text-primary bg-none px-0 py-0",
};

const mapSize = {
	xs: "text-xs px-2 py-1.5 gap-x-1.5",
	sm: "text-sm px-3 py-2 gap-x-1.5",
	base: "px-4 py-3 gap-x-2",
	lg: "text-lg px-4 py-3 gap-x-2",
	xl: "text-xl px-4 py-3 gap-x-2",
};

const mapIconSize = {
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
		hideText,
	} = props;

	return (
		<button
			className={classNames(
				"flex font-semibold rounded items-center",
				isFull ? "w-full" : "w-max",
				mapVariant[variant],
				mapSize[size],
				iconPosition === "trailing" ? "flex-row-reverse" : "",
			)}
		>
			{!hideText && text}
			{Icon && (
				<Icon
					className={classNames(
						"stroke-current stroke-2",
						mapIconSize[size],
					)}
				/>
			)}
		</button>
	);
}

export default ButtonComponent;
