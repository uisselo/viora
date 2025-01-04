import {
	MagnifyingGlassIcon,
	ShoppingBagIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router";
import VioraLogo from "../../assets/viora_logo.svg";
import { ButtonComponent, TextInputComponent } from "../common";

function HeaderComponent() {
	const navItems = [
		"Categories",
		"Bestsellers",
		"New Arrivals",
		"On Sale",
	];

	return (
		<header className="flex justify-center w-full px-4 py-3 md:px-8 lg:px-[104px] lg:py-6">
			<div className="w-full min-w-[375px] max-w-[1440px] flex items-center gap-x-12">
				<div className="flex items-center gap-x-12 w-full">
					<Link to="/">
						<img src={VioraLogo} alt="Viora Logo" />
					</Link>
					<nav>
						<ul className="flex gap-x-12">
							{navItems.map((item, index) => (
								<li
									key={index.toString()}
									className="text-sm uppercase tracking-wider cursor-pointer"
								>
									{item}
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className="flex items-center gap-x-6">
					<TextInputComponent
						placeholder="Search"
						icon={MagnifyingGlassIcon}
						hideLabel
					/>
					<div className="flex items-center">
						<ButtonComponent
							hideText
							icon={ShoppingBagIcon}
							variant="link"
							size="xl"
						/>
						<ButtonComponent
							hideText
							icon={UserCircleIcon}
							variant="link"
							size="xl"
						/>
					</div>
				</div>
			</div>
		</header>
	);
}

export default HeaderComponent;
