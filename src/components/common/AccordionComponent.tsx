import type { HTMLAttributes, PropsWithChildren } from "react";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { cn } from "@Utilities";

function AccordionComponent({
  children,
  className,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <Disclosure as="div" className={cn("space-y-0.5", className)}>
      {children}
    </Disclosure>
  );
}

AccordionComponent.Button = Button;
AccordionComponent.Panel = Panel;

export default AccordionComponent;

function Button({
  children,
  text = "Button text here",
  className,
}: PropsWithChildren<{ text?: string } & HTMLAttributes<HTMLButtonElement>>) {
  return (
    <DisclosureButton
      className={cn(
        "flex items-center justify-between w-full p-3 font-medium border border-gray-300 md:p-4 bg-gray-50 md:text-lg",
        className,
      )}
    >
      {({ open }) => {
        const Icon = open ? ChevronUpIcon : ChevronRightIcon;

        return (
          <>
            {children || text}
            <Icon className="size-4 md:size-5 stroke-current stroke-1.5" />
          </>
        );
      }}
    </DisclosureButton>
  );
}

function Panel({
  children,
  text,
  className,
}: PropsWithChildren<{ text?: string } & HTMLAttributes<HTMLDivElement>>) {
  return (
    <Transition
      as="div"
      className="overflow-hidden origin-top"
      enter="transition-all duration-300 ease-out"
      enterFrom="transform scale-y-0 opacity-0 max-h-0"
      enterTo="transform scale-y-100 opacity-100 max-h-screen"
      leave="transition-all duration-200 ease-in"
      leaveFrom="transform scale-y-100 opacity-100 max-h-screen"
      leaveTo="transform scale-y-0 opacity-0 max-h-0"
    >
      <DisclosurePanel
        className={cn(
          "p-3 text-sm border border-gray-300 md:p-4 md:text-base",
          className,
        )}
      >
        {children || text}
      </DisclosurePanel>
    </Transition>
  );
}
