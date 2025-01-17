import clsx from "clsx";
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import { HEADER_NAV_ITEMS } from "@Config";
import {
  ButtonComponent,
  ButtonIconComponent,
  TextInputComponent,
} from "@GlobalComponents";
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
          "bg-white h-screen w-[320px] md:w-[500px] absolute right-0 flex flex-col gap-16 p-6 md:p-8 shadow delay-400 duration-500 ease-in-out transition-all transform",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="space-y-6">
          <div className="flex justify-end">
            <ButtonIconComponent
              className="p-0"
              icon={XMarkIcon}
              iconClassName="size-6"
            />
          </div>
          <TextInputComponent
            placeholder="Search"
            icon={MagnifyingGlassIcon}
            hideLabel
          />
          <nav>
            <ul className="flex flex-col">
              {HEADER_NAV_ITEMS.map((item, index) => (
                <li key={String(index)}>
                  <NavItemComponent
                    to={item.link}
                    label={item.label}
                    isDrawer
                    icon={item.icon}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="space-y-4">
          <ul>
            <li>
              <NavItemComponent
                to="/"
                label="Help"
                icon={QuestionMarkCircleIcon}
                isCapitalize
              />
            </li>
            <li>
              <NavItemComponent
                to="/shopping-bag"
                label="Shopping Bag"
                icon={ShoppingBagIcon}
                isCapitalize
              />
            </li>
          </ul>
          <div className="flex flex-col gap-3">
            {width && (
              <>
                <div className="flex gap-1">
                  <p className="text-sm md:text-base">
                    Already have an account?
                  </p>
                  <ButtonComponent
                    text="Login here."
                    size={width < 768 ? "sm" : "base"}
                    variant="link"
                  />
                </div>
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
