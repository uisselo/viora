import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import { SVGs } from "@Assets";
import { FOOTER_NAV_ITEMS } from "@Config";
import { ButtonComponent } from "@GlobalComponents";

function FooterComponent() {
  const { width } = useWindowSize();

  const renderSection = (title: string, links: string[]) => (
    <div key={title} className="flex flex-col gap-3 md:col-span-2">
      <p className="text-xs font-medium tracking-wider uppercase md:text-sm">
        {title}
      </p>
      <ul className="flex flex-wrap gap-4 md:flex-col md:gap-2">
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
      <div className="container flex flex-col gap-8 py-4 md:grid md:grid-cols-12 md:py-8 lg:gap-5">
        <div className="flex flex-col gap-4 md:col-span-6">
          <Link to="/">
            <img src={SVGs.viora_logo} alt="Viora Logo" className="w-fit" />
          </Link>
          <p className="lg:w-[30rem] text-xs md:text-sm font-medium">
            This website is not fully functional. This is a portfolio project
            created to showcase design and development skills.
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
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 lg:gap-5 md:col-span-6">
          {FOOTER_NAV_ITEMS.map(({ section, items }) =>
            renderSection(section, items),
          )}
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
