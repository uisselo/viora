import { Fragment, useCallback, useMemo, useState } from "react";
import clsx from "clsx";
import { every, omit } from "lodash-es";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ORDER_CONSTANTS } from "../constants";
import { OrderContext, useOrderStore } from "../store";
import InformationFormComponent from "./InformationFormComponent";
import OrderConfirmationComponent from "./OrderConfirmationComponent";
import PaymentFormComponent from "./PaymentFormComponent";

function OrderFormComponent() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const infoForm = useOrderStore((state) => state.infoForm);
  const paymentForm = useOrderStore((state) => state.paymentForm);
  const setInfoForm = useOrderStore((state) => state.setInfoForm);
  const setPaymentForm = useOrderStore((state) => state.setPaymentForm);

  const isCardPayment = useMemo(
    () => paymentForm?.payment_method === ORDER_CONSTANTS.PAYMENT_OPTIONS[1],
    [paymentForm],
  );

  const isTabDisabled = useCallback(
    (index: number) => {
      const isInfoFormIncomplete = every(
        omit(infoForm, "order_instructions"),
        (value) => value === "",
      );

      return (
        isInfoFormIncomplete ||
        (index === 2 && isCardPayment && !paymentForm.card_name)
      );
    },
    [infoForm, paymentForm, isCardPayment],
  );

  const onClickTab = (index: number) => {
    if (isTabDisabled(index)) return;

    setSelectedTabIndex(index);
  };

  return (
    <OrderContext.Provider
      value={{
        isCardPayment,
        selectedTabIndex,
        infoForm,
        paymentForm,
        setSelectedTabIndex,
        setInfoForm,
        setPaymentForm,
      }}
    >
      <TabGroup selectedIndex={selectedTabIndex} className="space-y-6">
        <TabList className="flex items-center gap-x-3">
          {ORDER_CONSTANTS.TAB_ITEMS.map((item, index) => (
            <Fragment key={String(index)}>
              <Tab
                className={({ selected }) =>
                  clsx(
                    "text-xs uppercase md:text-sm focus:outline-none",
                    selected
                      ? "font-semibold text-primary"
                      : "font-medium text-gray-400",
                    { "cursor-not-allowed": isTabDisabled(index) },
                  )
                }
                onClick={() => onClickTab(index)}
              >
                {item}
              </Tab>
              {index < ORDER_CONSTANTS.TAB_ITEMS.length - 1 && (
                <ChevronRightIcon className="stroke-current size-3 stroke-gray-400 stoke-2" />
              )}
            </Fragment>
          ))}
        </TabList>
        <TabPanels>
          <InformationFormComponent />
          <PaymentFormComponent />
          <OrderConfirmationComponent />
        </TabPanels>
      </TabGroup>
    </OrderContext.Provider>
  );
}

export default OrderFormComponent;
