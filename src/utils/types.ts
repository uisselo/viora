import type { FC, SVGProps } from "react";

export type HeroIconProp = FC<SVGProps<SVGSVGElement>>;

export type NewsletterForm = {
  full_name: string;
  email: string;
};
