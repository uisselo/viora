import clsx from "clsx";
import type { HeroIconProp } from "@Utilities";

type Props = {
  label?: string;
  isDrawer?: boolean;
  isCapitalize?: boolean;
  icon?: HeroIconProp;
};

function NavItemComponent(props: Props) {
  const { label = "Link", isDrawer, isCapitalize, icon: Icon } = props;

  return (
    <div
      className={clsx(
        "flex items-center cursor-pointer gap-1.5",
        isDrawer ? "p-3 md:p-4 border-b justify-between" : "p-0 w-max",
        { "py-1.5 md:py-2 flex-row-reverse": isCapitalize },
      )}
    >
      <span
        className={
          isCapitalize ? "text-base" : "text-sm uppercase tracking-wider"
        }
      >
        {label}
      </span>
      {Icon && (
        <Icon
          className={clsx(
            "stroke-current",
            isCapitalize
              ? "size-5 md:size-6 stroke-1"
              : "size-3.5 stroke-1.5 lg:stroke-2",
            { "md:size-5": isCapitalize },
          )}
        />
      )}
    </div>
  );
}

export default NavItemComponent;
