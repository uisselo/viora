import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function LayoutComponent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative space-y-8 md:space-y-12 lg:space-y-16">
      <HeaderComponent />
      <main className="container">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}

export default LayoutComponent;
