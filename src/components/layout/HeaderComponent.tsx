import { useState } from "react";
import { Link } from "react-router";
import { isEmpty } from "lodash-es";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { SVGs } from "@Assets";
import { HEADER_NAV_ITEMS } from "@Config";
import {
  BadgeComponent,
  ButtonIconComponent,
  TextInputComponent,
} from "@GlobalComponents";
import { useShoppingBag } from "@Modules";
import NavDrawerComponent from "./NavDrawerComponent";
import NavItemComponent from "./NavItemComponent";

function HeaderComponent() {
  const [isNavOverlayOpen, setIsNavOverlayOpen] = useState(false);

  const toggleNavOverlay = () => setIsNavOverlayOpen(!isNavOverlayOpen);

  return (
    <header className="container sticky top-0 z-20 flex justify-between py-4 bg-white md:py-6 md:grid-container">
      <LeftSideSection />
      <RightSideSection toggleNavOverlay={toggleNavOverlay} />
      <NavDrawerComponent
        isOpen={isNavOverlayOpen}
        onClick={toggleNavOverlay}
      />
    </header>
  );
}

function LeftSideSection() {
  return (
    <div className="flex items-center gap-8 md:col-span-6 lg:col-span-8">
      <Link to="/">
        <img src={SVGs.viora_logo} alt="Viora Logo" className="w-fit" />
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex gap-8">
          {HEADER_NAV_ITEMS.map((item, index) => (
            <li key={String(index)}>
              <NavItemComponent
                to={item.link}
                label={item.label}
                icon={item.icon}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function RightSideSection({
  toggleNavOverlay,
}: { toggleNavOverlay: () => void }) {
  const { items } = useShoppingBag();

  return (
    <div className="flex items-center justify-end gap-6 md:col-span-6 lg:col-span-4">
      <div className="hidden md:block">
        <TextInputComponent
          id="search"
          placeholder="Search"
          icon={MagnifyingGlassIcon}
          hideLabel
        />
      </div>
      <div className="flex items-center gap-4">
        <Link to="/shopping-bag">
          <ButtonIconComponent icon={ShoppingBagIcon} className="p-0">
            {!isEmpty(items) && (
              <div className="absolute right-0">
                <div className="absolute left-0 -translate-x-2 translate-y-0.5">
                  <BadgeComponent text={String(items.length)} />
                </div>
              </div>
            )}
          </ButtonIconComponent>
        </Link>
        <div className="hidden lg:block">
          <ButtonIconComponent icon={UserCircleIcon} className="p-0" />
        </div>
        <div className="block lg:hidden">
          <ButtonIconComponent
            icon={Bars3Icon}
            className="p-0"
            onClick={toggleNavOverlay}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
