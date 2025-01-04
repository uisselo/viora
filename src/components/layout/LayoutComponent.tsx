import { Outlet } from "react-router";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

function LayoutComponent() {
	return (
		<div className="flex flex-col justify-center items-center gap-y-8 md:gap-y-12 lg:gap-y-16">
			<HeaderComponent />
			<main className="w-full h-screen min-w-[375px] max-w-[1440px]">
				<Outlet />
			</main>
			<FooterComponent />
		</div>
	);
}

export default LayoutComponent;
