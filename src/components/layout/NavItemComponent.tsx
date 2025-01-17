import { Link, type LinkProps } from "react-router";
import clsx from "clsx";
import { cn, type HeroIconProp } from "@Utilities";

type Props = {
  label?: string;
  isDrawer?: boolean;
  isCapitalize?: boolean;
  icon?: HeroIconProp;
} & LinkProps;

function NavItemComponent(props: Props) {
  const {
    label = "Link",
    isDrawer,
    isCapitalize,
    icon: Icon,
    to,
    className,
    ...linkProps
  } = props;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center cursor-pointer gap-1.5",
        isDrawer ? "p-3 md:p-4 border-b justify-between" : "p-0 w-max",
        { "py-1.5 md:py-2 flex-row-reverse": isCapitalize },
        className,
      )}
      {...linkProps}
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
    </Link>
  );
}

export default NavItemComponent;
