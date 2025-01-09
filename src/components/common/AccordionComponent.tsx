import { cn } from "@Utilities";
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

function AccordionComponent({ children }: PropsWithChildren) {
  return <div className="space-y-0.5">{children}</div>;
}

AccordionComponent.Heading = AccordionHeading;
AccordionComponent.Body = AccordionBody;

export default AccordionComponent;

type AccordionHeadingProps = {
  text?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
type AccordionBodyProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

function AccordionHeading(props: AccordionHeadingProps) {
  const { text = "Heading here", className, ...buttonProps } = props;

  return (
    <button className={cn("p-4 bg-gray-50", className)} {...buttonProps}>
      {text}
    </button>
  );
}

function AccordionBody(props: AccordionBodyProps) {
  const { children, className, ...divProps } = props;

  return (
    <div className={cn("p-4 bg-gray-50", className)} {...divProps}>
      {children}
    </div>
  );
}
