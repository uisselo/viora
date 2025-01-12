import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import { round, some } from "lodash-es";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import { AccordionComponent, QuantityComponent } from "@GlobalComponents";
import {
  ConfirmationComponent,
  InformationFormComponent,
  PaymentFormComponent,
  ProductItemComponent,
  useCheckoutStore,
  useShoppingBag,
} from "@Modules";

function CheckoutPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-lg font-semibold md:text-2xl">Checkout</p>
        <p className="text-sm md:text-base">
          Almost there! Just a few steps to go.
        </p>
      </div>
      <div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2">
        <TabsSection />
        <OrderSummarySection />
      </div>
    </div>
  );
}

export default CheckoutPage;

function TabsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabItems = ["Information", "Payment", "Confirmation"];

  const informationForm = useCheckoutStore((state) => state.informationForm);
  const paymentForm = useCheckoutStore((state) => state.paymentForm);

  const onClickTab = (index: number) => {
    const infoFormError = some(informationForm, (item) => item === "");
    const paymentFormError = some(paymentForm, (item) => item === "");

    if (index === 1 && infoFormError) return;
    if (index === 2 && paymentFormError) return;
    setSelectedIndex(index);
  };

  return (
    <TabGroup selectedIndex={selectedIndex} className="space-y-6">
      <TabList className="flex items-center gap-x-3">
        {tabItems.map((item, index) => (
          <Fragment key={String(index)}>
            <Tab
              className={({ selected }) =>
                clsx(
                  "text-xs uppercase md:text-sm focus:outline-none",
                  selected
                    ? "font-semibold text-primary"
                    : "font-medium text-gray-400",
                )
              }
              onClick={() => onClickTab(index)}
            >
              {item}
            </Tab>
            {index < tabItems.length - 1 && (
              <ChevronRightIcon className="stroke-current size-3 stroke-gray-400 stoke-2" />
            )}
          </Fragment>
        ))}
      </TabList>
      <TabPanels>
        <InformationFormComponent onClick={() => setSelectedIndex(1)} />
        <PaymentFormComponent />
        <ConfirmationComponent />
      </TabPanels>
    </TabGroup>
  );
}

function OrderSummarySection() {
  const { width } = useWindowSize();
  const { items, totalAmount } = useShoppingBag();

  return (
    width && (
      <div className="h-max space-y-0.5">
        <AccordionComponent defaultOpen={width > 1024}>
          <AccordionComponent.Button
            text="Order Summary"
            className="p-4 md:p-6"
          />
          <AccordionComponent.Panel className="p-4 space-y-4 md:p-6">
            {items.map((item, index) => (
              <ProductItemComponent
                key={String(index)}
                data={item.product}
                className="grid w-full grid-cols-4 gap-4 md:grid-cols-8 lg:gap-5"
              >
                <ProductItemComponent.Image className="col-span-1 md:col-span-2" />
                <div className="flex flex-col col-span-2 gap-1 md:col-span-3">
                  <ProductItemComponent.Title />
                  <ProductItemComponent.Price />
                </div>
                <div className="flex flex-col items-end col-span-1 gap-2 md:col-span-3">
                  <QuantityComponent value={item.quantity} isDisplayOnly />
                  <ProductItemComponent.TotalPrice
                    value={round(item.totalPrice, 2)}
                  />
                </div>
              </ProductItemComponent>
            ))}
          </AccordionComponent.Panel>
        </AccordionComponent>
        <div className="w-full p-4 space-y-2 bg-gray-50 md:p-6">
          <div className="flex justify-between text-sm md:text-base">
            <p>Subtotal</p>
            <p>$ {round(totalAmount, 2)}</p>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <p>Shipping Fee</p>
            <p>Calculated at next step</p>
          </div>
          <div className="flex justify-between font-semibold lg:text-lg">
            <p>Total</p>
            <p>$ {round(totalAmount, 2)}</p>
          </div>
        </div>
      </div>
    )
  );
}
