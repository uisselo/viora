import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import classNames from "classnames";
import { NAV_ITEMS } from "../../utils";
import { ButtonComponent } from "../common";
import NavItemComponent from "./NavItemComponent";

type Props = { isOpen: boolean; onClick: () => void };

function NavDrawerComponent(props: Props) {
  const { isOpen, onClick } = props;
  const { width } = useWindowSize();
  const buttonSize = (width || 0) < 768 ? "sm" : "base";

  const CLASSES = {
    BACKDROP: classNames(
      "fixed overflow-hidden z-20 bg-gray-800/40 inset-0 transform ease-in-out",
      isOpen
        ? "transition-opacity opacity-100 duration-500"
        : "transition-all delay-500 opacity-0 pointer-events-none",
    ),
    CONTENT: classNames(
      "bg-white h-screen w-[300px] md:w-[500px] absolute right-0 flex flex-col justify-between p-4 md:p-6 shadow delay-400 duration-500 ease-in-out transition-all transform",
      isOpen ? "translate-x-0" : "translate-x-full",
    ),
  };

  return (
    <div
      className={CLASSES.BACKDROP}
      aria-modal="true"
      onClick={onClick}
      onKeyDown={onClick}
    >
      <div className={CLASSES.CONTENT}>
        <nav>
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item, index) => (
              <li key={index.toString()}>
                <NavItemComponent
                  label={item}
                  isDrawer
                  icon={item === "Categories" ? ChevronRightIcon : undefined}
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
              <NavItemComponent
                label="Shopping Bag"
                icon={ShoppingBagIcon}
                isCapitalize
              />
            </li>
          </ul>
          <div className="flex gap-3">
            <ButtonComponent
              text="Login"
              variant="outline"
              size={buttonSize}
              isFull
            />
            <ButtonComponent text="Create Account" size={buttonSize} isFull />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavDrawerComponent;
