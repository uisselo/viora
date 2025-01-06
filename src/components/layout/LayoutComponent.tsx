import { Outlet } from "react-router";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function LayoutComponent() {
  return (
    <div className="relative flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
      <HeaderComponent />
      <main className="container">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}

export default LayoutComponent;
