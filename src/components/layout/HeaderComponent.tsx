import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router";
import VioraLogo from "../../assets/viora_logo.svg";
import { NAV_ITEMS } from "../../utils";
import { ButtonIconComponent, TextInputComponent } from "../common";
import NavDrawerComponent from "./NavDrawerComponent";
import NavItemComponent from "./NavItemComponent";

function NavItems() {
  return (
    <nav className="hidden custom-lg:block">
      <ul className="flex gap-12">
        {NAV_ITEMS.map((item, index) => (
          <li key={index.toString()}>
            <NavItemComponent
              label={item}
              icon={item === "Categories" ? ChevronDownIcon : undefined}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function HeaderComponent() {
  const [isNavOverlayOpen, setIsNavOverlayOpen] = useState(false);

  const CLASSES = {
    CONTAINER: "flex justify-center w-full ",
    CONTENT:
      "container flex items-center justify-between py-3 content lg:py-6 custom-lg:grid custom-lg:grid-cols-12",
    CONTENT_COL_1: "flex items-center gap-12 custom-lg:col-span-8",
    CONTENT_COL_2: "flex items-center justify-end gap-6 custom-lg:col-span-4",
  };

  const toggleNavOverlay = () => {
    setIsNavOverlayOpen(!isNavOverlayOpen);
  };

  return (
    <header className={CLASSES.CONTAINER}>
      <div className={CLASSES.CONTENT}>
        <div className={CLASSES.CONTENT_COL_1}>
          <Link to="/">
            <img src={VioraLogo} alt="Viora Logo" className="w-fit" />
          </Link>
          <NavItems />
        </div>
        <div className={CLASSES.CONTENT_COL_2}>
          <div className="hidden md:block">
            <TextInputComponent
              placeholder="Search"
              icon={MagnifyingGlassIcon}
              hideLabel
            />
          </div>
          <div className="flex items-center gap-1">
            <ButtonIconComponent
              icon={ShoppingBagIcon}
              badgeValue="100"
              display="header"
            />
            <div className="hidden custom-lg:block">
              <ButtonIconComponent icon={UserCircleIcon} display="header" />
            </div>
            <div className="block custom-lg:hidden">
              <ButtonIconComponent
                icon={Bars3Icon}
                display="header"
                onClick={toggleNavOverlay}
              />
            </div>
          </div>
        </div>
      </div>
      <NavDrawerComponent
        isOpen={isNavOverlayOpen}
        onClick={toggleNavOverlay}
      />
    </header>
  );
}

export default HeaderComponent;
