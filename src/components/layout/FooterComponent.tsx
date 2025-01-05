import { Link } from "react-router";
import VioraLogo from "../../assets/viora_logo.svg";
import { ABOUT_US_LINKS, HELP_LINKS } from "../../utils";
import { ButtonComponent } from "../common";

function FooterComponent() {
  const CLASSES = {
    CONTAINER: "flex justify-center w-full border-t",
    CONTENT:
      "container flex flex-col md:grid md:grid-cols-12 gap-4 lg:gap-5 py-4 md:py-8",
    CONTENT_COL_1: "md:col-span-6",
    CONTENT_COL_2:
      "flex flex-col gap-4 md:grid md:grid-cols-4 lg:gap-5 md:col-span-6",
    SECTION: "flex flex-col gap-3 md:col-span-2",
    SECTION_TITLE: "text-sm tracking-wider uppercase",
    SECTION_LINKS: "flex flex-wrap gap-4 md:flex-col md:gap-2",
  };

  const renderSection = (title: string, links: string[]) => (
    <div className={CLASSES.SECTION}>
      <p className={CLASSES.SECTION_TITLE}>{title}</p>
      <ul className={CLASSES.SECTION_LINKS}>
        {links.map((item, index) => (
          <li key={index.toString()}>
            <ButtonComponent text={item} variant="link" size="sm" />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className={CLASSES.CONTAINER}>
      <div className={CLASSES.CONTENT}>
        <div className={CLASSES.CONTENT_COL_1}>
          <Link to="/">
            <img src={VioraLogo} alt="Viora Logo" className="w-fit" />
          </Link>
        </div>
        <div className={CLASSES.CONTENT_COL_2}>
          {renderSection("About Us", ABOUT_US_LINKS)}
          {renderSection("Help", HELP_LINKS)}
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
