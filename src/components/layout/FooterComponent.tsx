import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import { SVGs } from "@Assets";
import { FOOTER_NAV_ITEMS } from "@Config";
import { ButtonComponent } from "@GlobalComponents";

function FooterComponent() {
  const { width } = useWindowSize();

  const renderSection = (title: string, links: string[]) => (
    <div
      key={title}
      className="flex flex-col gap-3 md:col-span-3 lg:col-span-2"
    >
      <p className="text-xs font-medium tracking-wider uppercase md:text-sm">
        {title}
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-3 md:flex-col md:gap-2">
        {links.map((item) => (
          <li key={item}>
            {width && (
              <ButtonComponent
                text={item}
                variant="link"
                size={width > 768 ? "sm" : "xs"}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="w-full border-t">
      <div className="container py-8 md:py-12 lg:py-16 grid-container">
        <div className="flex flex-col col-span-4 gap-4 md:col-span-5 md:gap-6">
          <Link to="/">
            <img src={SVGs.viora_logo} alt="Viora Logo" className="w-fit" />
          </Link>
          <p className="text-xs font-medium md:text-sm">
            This website is not fully functional. It was created to be included
            in a portfolio showcasing design and development skills.
          </p>
          {width && (
            <div className="space-y-1">
              <ButtonComponent
                text="View on GitHub"
                variant="link"
                size={width > 768 ? "sm" : "xs"}
                icon={ArrowRightIcon}
              />
              <ButtonComponent
                text="View Components here"
                variant="link"
                navigateTo="/components"
                size={width > 768 ? "sm" : "xs"}
                icon={ArrowRightIcon}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col col-span-4 gap-6 md:grid md:grid-cols-6 md:col-span-6 md:col-start-7 lg:grid-cols-4 lg:col-span-4 lg:col-start-9">
          {FOOTER_NAV_ITEMS.map(({ section, items }) =>
            renderSection(section, items),
          )}
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
