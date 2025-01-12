import { ButtonComponent } from "@GlobalComponents";
import { TabPanel } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import { useCheckoutStore } from "../store";

function ConfirmationComponent() {
  const { width } = useWindowSize();

  const informationForm = useCheckoutStore((state) => state.informationForm);
  const paymentForm = useCheckoutStore((state) => state.paymentForm);

  const ORDER_FORM_INFO = [
    { title: "Shipping Information", data: informationForm.address },
    {
      title: "Payment Information",
      data: `Card ending in ${paymentForm.card_number.slice(-4)}`,
    },
    {
      title: "Order Instructions",
      data: informationForm.order_instructions,
    },
  ];

  return (
    <TabPanel className="space-y-6">
      <p className="text-sm md:text-base">
        Confirm your items, shipping, and payment details before placing your
        order.
      </p>
      {ORDER_FORM_INFO.map((item, index) => (
        <div key={String(index)} className="space-y-1.5">
          <div className="flex justify-between gap-2 md:justify-start">
            <p className="font-semibold md:text-lg">{item.title}</p>
            {width && (
              <ButtonComponent
                variant="link"
                size={width < 768 ? "xs" : "sm"}
                text="Edit"
              />
            )}
          </div>
          <p className="text-sm md:text-base">{item.data}</p>
        </div>
      ))}
      {width && (
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start">
          <ButtonComponent
            variant="link"
            text="Return to Payment"
            size={width > 768 ? "sm" : "xs"}
            icon={ChevronLeftIcon}
            iconPosition="trailing"
          />
          <ButtonComponent
            text="Complete Order"
            size={width > 768 ? "base" : "sm"}
            isFull={width < 768}
          />
        </div>
      )}
    </TabPanel>
  );
}

export default ConfirmationComponent;
