import { Link } from "react-router";
import { SVGs } from "@Assets";
import { ABOUT_US_LINKS, HELP_LINKS } from "@Utilities";
import { ButtonComponent } from "@GlobalComponents";

const SECTIONS = [
  { title: "About Us", links: ABOUT_US_LINKS },
  { title: "Help", links: HELP_LINKS },
];

function FooterComponent() {
  const renderSection = (title: string, links: string[]) => (
    <div key={title} className="flex flex-col gap-3 md:col-span-2">
      <p className="text-sm font-medium tracking-wider uppercase">{title}</p>
      <ul className="flex flex-wrap gap-4 md:flex-col md:gap-2">
        {links.map((item) => (
          <li key={item}>
            <ButtonComponent text={item} variant="link" size="sm" />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="w-full border-t">
      <div className="container flex flex-col gap-4 py-4 md:grid md:grid-cols-12 md:py-8 lg:gap-5">
        <div className="md:col-span-6">
          <Link to="/">
            <img src={SVGs.viora_logo} alt="Viora Logo" className="w-fit" />
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 lg:gap-5 md:col-span-6">
          {SECTIONS.map(({ title, links }) => renderSection(title, links))}
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
