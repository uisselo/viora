import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
  AccordionComponent,
  BadgeComponent,
  ButtonComponent,
  ButtonIconComponent,
  CarouselComponent,
  QuantityComponent,
  TextAreaComponent,
  TextInputComponent,
  ToastComponent,
  type ToastComponentFunction,
} from "@GlobalComponents";
import { ProductItemComponent, useProductQueries } from "@Modules";
import { useRef } from "react";

function ComponentsPage() {
  const { productDetails } = useProductQueries("1");

  const carouselData = [
    { title: "Sample Title 1", content: "Content 1" },
    { title: "Sample Title 2", content: "Content 2" },
    { title: "Sample Title 3", content: "Content 3" },
    { title: "Sample Title 4", content: "Content 4" },
    { title: "Sample Title 5", content: "Content 5" },
  ];

  const toastComponentRef = useRef<ToastComponentFunction>(null);

  return (
    <div className="text-sm grid-container md:text-base">
      <div className="col-span-4 space-y-2 text-center md:col-span-12">
        <p className="text-lg font-semibold md:text-xl text-primary">
          Welcome to the Components page!
        </p>
        <p>
          Here you'll find the reusable UI components used throughout the
          website, designed for consistency and flexibility.
        </p>
      </div>
      <div className="col-span-4 divide-y md:col-span-12">
        <p className="py-2 font-bold text-center uppercase border-t text-primary">
          Global Components
        </p>
        <div className="flex flex-col col-span-4 gap-5 py-6 md:flex-row md:col-span-12">
          <div className="space-y-1 md:w-1/2">
            <p className="font-bold text-primary">Accordion Component</p>
            <p>
              Built with Headless UI's Disclosure, offering customizable button
              and panel.
            </p>
          </div>
          <div className="w-full p-4 border rounded flex-center">
            <AccordionComponent className="w-full">
              <AccordionComponent.Button text="Button" />
              <AccordionComponent.Panel className="space-y-1">
                <p>Panel</p>
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Odio nec
                  curae sociosqu curae tellus ipsum placerat. Habitasse primis
                  cubilia maximus ultrices eleifend auctor. Vel ex fames
                  efficitur ac tristique montes.
                </p>
              </AccordionComponent.Panel>
            </AccordionComponent>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-6 md:flex-row">
          <div className="space-y-2 md:w-1/2">
            <div className="space-y-1">
              <p className="font-bold text-primary">ButtonIconComponent</p>
              <p>A customizable button specifically designed for icons.</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-primary">BadgeComponent</p>
              <p>
                An absolute-positioned badge that requires a relatively
                positioned parent for proper alignment.
              </p>
            </div>
          </div>
          <div className="w-full p-4 border rounded flex-center">
            <ButtonIconComponent icon={ShoppingBagIcon} className="p-0">
              <div className="absolute right-0">
                <div className="absolute left-0 -translate-x-2 translate-y-0.5">
                  <BadgeComponent text="1" />
                </div>
              </div>
            </ButtonIconComponent>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-6 md:flex-row">
          <div className="space-y-1 md:w-1/2">
            <p className="font-bold text-primary">ButtonComponent</p>
            <p>
              A versatile and reusable button with three variants (primary,
              outline, and link) and five size options (xs, sm, base, lg, xl).
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-2 p-4 overflow-x-auto border rounded">
            <div className="flex items-center w-full gap-2 md:w-max">
              <ButtonComponent className="h-max" text="Primary" size="xs" />
              <ButtonComponent className="h-max" text="Primary" size="sm" />
              <ButtonComponent className="h-max" text="Primary" />
              <ButtonComponent className="h-max" text="Primary" size="lg" />
              <ButtonComponent className="h-max" text="Primary" size="xl" />
            </div>
            <div className="flex items-center w-full gap-2 md:w-max">
              <ButtonComponent
                className="h-max"
                text="Outline"
                variant="outline"
                size="xs"
              />
              <ButtonComponent
                className="h-max"
                text="Outline"
                variant="outline"
                size="sm"
              />
              <ButtonComponent
                className="h-max"
                text="Outline"
                variant="outline"
              />
              <ButtonComponent
                className="h-max"
                text="Outline"
                variant="outline"
                size="lg"
              />
              <ButtonComponent
                className="h-max"
                text="Outline"
                variant="outline"
                size="xl"
              />
            </div>
            <div className="flex items-center w-full gap-2 md:w-max">
              <ButtonComponent
                className="h-max"
                text="Link"
                variant="link"
                size="xs"
              />
              <ButtonComponent
                className="h-max"
                text="Link"
                variant="link"
                size="sm"
              />
              <ButtonComponent className="h-max" text="Link" variant="link" />
              <ButtonComponent
                className="h-max"
                text="Link"
                variant="link"
                size="lg"
              />
              <ButtonComponent
                className="h-max"
                text="Link"
                variant="link"
                size="xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-6 md:flex-row">
          <div className="space-y-1 md:w-1/2">
            <p className="font-bold text-primary">CarouselComponent</p>
            <p>
              Built with Swiper.js, offering highly customizable items for
              seamless integration. Supports responsive layouts, navigation
              controls, and dynamic content.
            </p>
          </div>
          <div className="w-full p-4 overflow-x-auto border rounded">
            <CarouselComponent items={carouselData}>
              {({ item }) => (
                <div className="h-32 p-4 border border-2 bg-gray-50">
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              )}
            </CarouselComponent>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-6 md:flex-row">
          <div className="space-y-1 md:w-1/2">
            <p className="font-bold text-primary">QuantityComponent</p>
            <p>
              A flexible component that either shows buttons to modify the value
              or displays the value only.
            </p>
          </div>
          <div className="w-full gap-2 p-4 border rounded flex-center">
            <QuantityComponent value={3} />
            <QuantityComponent value={3} isDisplayOnly />
          </div>
        </div>
        <div className="flex flex-col gap-5 py-6 md:flex-row">
          <div className="space-y-1 md:w-1/2">
            <p className="font-bold text-primary">TextAreaComponent</p>
            <p>
              A flexible input field for multi-line text, customizable with
              textarea-specific props.
            </p>
          </div>
          <div className="flex-col w-full gap-4 p-4 border rounded flex-center">
            <TextAreaComponent id="text_area_component_1" rows={4} />
            <TextAreaComponent
              id="text_area_component_2"
              rows={4}
              error="Error message here"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 py-6 md:flex-row">
          <div className="space-y-1 md:w-1/2">
            <p className="font-bold text-primary">TextInputComponent</p>
            <p>
              A single-line input field for text, customizable with
              input-specific props and of type "text."
            </p>
          </div>
          <div className="flex-col w-full gap-4 p-4 border rounded flex-center">
            <TextInputComponent id="text_input_component_1" />
            <TextInputComponent
              id="text_input_component_2"
              error="Error message here"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 py-6 md:flex-row">
          <div className="space-y-1 md:w-1/2">
            <p className="font-bold text-primary">ToastComponent</p>
            <p>
              Built with react-hot-toast, providing customizable notifications
              with smooth animations and easy integration.
            </p>
          </div>
          <div className="w-full p-4 border rounded flex-center">
            <ButtonComponent
              text="Click here"
              onClick={() => toastComponentRef.current?.showToast()}
            />
            <ToastComponent
              ref={toastComponentRef}
              message="This is a toast!"
              position="top-center"
            />
          </div>
        </div>
      </div>
      <div className="col-span-4 divide-y md:col-span-12">
        <p className="py-2 font-bold text-center uppercase border-t text-primary">
          Module Components
        </p>
        <div className="flex flex-col gap-5 py-6 md:flex-row">
          <div className="space-y-1 md:w-1/2">
            <p className="font-bold text-primary">ProductItemComponent</p>
            <p>
              A fixed-style component with a default layout to display product
              details (image, title, price), easily customizable via props.
            </p>
          </div>
          <div className="w-full p-4 border rounded flex-center">
            {productDetails && (
              <ProductItemComponent
                data={productDetails}
                className="flex flex-col w-40 gap-2 md:w-64"
              >
                <ProductItemComponent.Image />
                <div className="flex gap-3">
                  <ProductItemComponent.Title />
                  <ProductItemComponent.Price />
                </div>
              </ProductItemComponent>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentsPage;
