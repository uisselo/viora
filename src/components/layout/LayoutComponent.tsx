import { Outlet } from "react-router";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function LayoutComponent() {
  const CLASSES = {
    CONTAINER:
      "relative flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16",
    MAIN: "container grid h-screen grid-cols-4 gap-4 md:grid-cols-12 lg:gap-5",
  };

  return (
    <div className={CLASSES.CONTAINER}>
      <HeaderComponent />
      <main className={CLASSES.MAIN}>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}

export default LayoutComponent;
