import classNames from "classnames";
import type { HeroIconProp } from "../../utils";

type Props = {
  label?: string;
  isDrawer?: boolean;
  isCapitalize?: boolean;
  icon?: HeroIconProp;
};

function NavItemComponent(props: Props) {
  const { label = "Link", isDrawer, isCapitalize, icon: Icon } = props;

  const CLASSES = {
    CONTAINER: classNames(
      "flex items-center text-sm cursor-pointer gap-1.5",
      isDrawer ? "p-3 md:p-4 border-b justify-between" : "p-0 w-max",
      { "py-1.5 md:py-2 flex-row-reverse": isCapitalize },
    ),
    NAV_ITEM: isCapitalize ? "text-base" : "uppercase tracking-wider",
    NAV_ITEM_ICON: classNames(
      "stroke-current",
      isCapitalize
        ? "w-5 h-5 md:w-6 h-6 stroke-1"
        : "w-3.5 h-3.5 stroke-1.5 lg:stroke-2",
      { "md:w-5 md:h-5": isCapitalize },
    ),
  };

  return (
    <div className={CLASSES.CONTAINER}>
      <span className={CLASSES.NAV_ITEM}>{label}</span>
      {Icon && <Icon className={CLASSES.NAV_ITEM_ICON} />}
    </div>
  );
}

export default NavItemComponent;
