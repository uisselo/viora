import { Link } from "react-router";
import clsx from "clsx";
import {
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import { HEADER_NAV_ITEMS } from "@Config";
import { ButtonComponent } from "@GlobalComponents";
import NavItemComponent from "./NavItemComponent";

type Props = { isOpen: boolean; onClick: () => void };

function NavDrawerComponent(props: Props) {
  const { isOpen, onClick } = props;
  const { width } = useWindowSize();

  return (
    <div
      className={clsx(
        "fixed overflow-hidden z-20 bg-gray-800/40 inset-0 transform ease-in-out",
        isOpen
          ? "transition-opacity opacity-100 duration-500"
          : "transition-all delay-500 opacity-0 pointer-events-none",
      )}
      aria-modal="true"
      onClick={onClick}
      onKeyDown={onClick}
    >
      <div
        className={clsx(
          "bg-white h-screen w-[300px] md:w-[500px] absolute right-0 flex flex-col justify-between p-4 md:p-6 shadow delay-400 duration-500 ease-in-out transition-all transform",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav>
          <ul className="flex flex-col">
            {HEADER_NAV_ITEMS.map((item, index) => (
              <li key={String(index)}>
                <NavItemComponent
                  label={item.label}
                  isDrawer
                  icon={item.icon}
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-8">
          <ul>
            <li>
              <NavItemComponent
                label="Help"
                icon={QuestionMarkCircleIcon}
                isCapitalize
              />
            </li>
            <li>
              <Link to="/shopping-bag">
                <NavItemComponent
                  label="Shopping Bag"
                  icon={ShoppingBagIcon}
                  isCapitalize
                />
              </Link>
            </li>
          </ul>
          <div className="flex gap-3">
            {width && (
              <>
                <ButtonComponent
                  text="Login"
                  variant="outline"
                  size={width < 768 ? "sm" : "base"}
                  isFull
                />
                <ButtonComponent
                  text="Create Account"
                  size={width < 768 ? "sm" : "base"}
                  isFull
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavDrawerComponent;
