import { Link } from "react-router";
import { useWindowSize } from "@uidotdev/usehooks";
import { SVGs } from "@Assets";
import { FOOTER_NAV_ITEMS } from "@Config";
import { ButtonComponent } from "@GlobalComponents";

function FooterComponent() {
  const { width } = useWindowSize();
  const buttonSize = (width || 0) > 768 ? "sm" : "xs";

  const renderSection = (title: string, links: string[]) => (
    <div key={title} className="flex flex-col gap-3 md:col-span-2">
      <p className="text-xs font-medium tracking-wider uppercase md:text-sm">
        {title}
      </p>
      <ul className="flex flex-wrap gap-4 md:flex-col md:gap-2">
        {links.map((item) => (
          <li key={item}>
            <ButtonComponent text={item} variant="link" size={buttonSize} />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="w-full border-t">
      <div className="container flex flex-col gap-8 py-4 md:grid md:grid-cols-12 md:py-8 lg:gap-5">
        <div className="md:col-span-6">
          <Link to="/">
            <img src={SVGs.viora_logo} alt="Viora Logo" className="w-fit" />
          </Link>
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
