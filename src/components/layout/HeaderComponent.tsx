import { useState } from "react";
import { Link } from "react-router";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { SVGs } from "@Assets";
import {
  BadgeComponent,
  ButtonIconComponent,
  TextInputComponent,
} from "@GlobalComponents";
import { useShoppingBagStore } from "@Modules";
import { NAV_ITEMS } from "@Utilities";
import NavDrawerComponent from "./NavDrawerComponent";
import NavItemComponent from "./NavItemComponent";

function HeaderComponent() {
  const items = useShoppingBagStore((state) => state.items);
  const [isNavOverlayOpen, setIsNavOverlayOpen] = useState(false);

  const toggleNavOverlay = () => setIsNavOverlayOpen(!isNavOverlayOpen);

  return (
    <header className="container flex justify-between py-3 lg:py-6 lg:grid-cols-12">
      <LeftContent />
      <RightContent items={items} toggleNavOverlay={toggleNavOverlay} />
      <NavDrawerComponent
        isOpen={isNavOverlayOpen}
        onClick={toggleNavOverlay}
      />
    </header>
  );
}

function LeftContent() {
  return (
    <div className="flex items-center gap-8 lg:col-span-8">
      <Link to="/">
        <img src={SVGs.viora_logo} alt="Viora Logo" className="w-fit" />
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex gap-8">
          {NAV_ITEMS.map((item, index) => (
            <li key={index.toString()}>
              <Link to={item.link}>
                <NavItemComponent label={item.label} icon={item.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function RightContent<T>({
  items,
  toggleNavOverlay,
}: { items: T[]; toggleNavOverlay: () => void }) {
  return (
    <div className="flex items-center justify-end gap-6 lg:col-span-4">
      <div className="hidden md:block">
        <TextInputComponent
          id="search"
          placeholder="Search"
          icon={MagnifyingGlassIcon}
          hideLabel
        />
      </div>
      <div className="flex items-center gap-1">
        <Link to="/shopping-bag">
          <ButtonIconComponent icon={ShoppingBagIcon} className="p-0">
            <div className="absolute right-0">
              <div className="absolute left-0 -translate-x-2 translate-y-0.5">
                <BadgeComponent text={String(items.length)} />
              </div>
            </div>
          </ButtonIconComponent>
        </Link>
        <div className="hidden lg:block">
          <ButtonIconComponent icon={UserCircleIcon} />
        </div>
        <div className="block lg:hidden">
          <ButtonIconComponent icon={Bars3Icon} onClick={toggleNavOverlay} />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
