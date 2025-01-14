import { useRef, type PropsWithChildren } from "react";
import { useNavigate } from "react-router";
import { TabPanel } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  ButtonComponent,
  ToastComponent,
  type ToastComponentFunction,
} from "@GlobalComponents";
import { useShoppingBag } from "@Modules";
import { useOrderContext } from "../store";

function OrderConfirmationComponent() {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const { isCardPayment, infoForm, paymentForm, setSelectedTabIndex } =
    useOrderContext();
  const { clearItems } = useShoppingBag();

  const toastComponentRef = useRef<ToastComponentFunction>(null);

  const onClickCompleteOrder = () => {
    navigate("/");
    clearItems();
    toastComponentRef.current?.showToast();
  };

  return (
    <TabPanel className="space-y-6">
      <p className="text-sm md:text-base">
        Confirm your items, shipping, and payment details before placing your
        order.
      </p>
      <InformationItem title="Shipping Information" toTabIndex={0}>
        <p className="font-medium">
          {infoForm.first_name} {infoForm.last_name}
        </p>
        <p>{infoForm.address}</p>
        <p>
          {infoForm.city}, {infoForm.state}, {infoForm.postal_code}
        </p>
      </InformationItem>
      <InformationItem title="Payment Information" toTabIndex={1}>
        {isCardPayment
          ? `Card ending in ${paymentForm.card_number?.slice(-4)}`
          : paymentForm.payment_method}
      </InformationItem>
      <InformationItem title="Order Instructions" toTabIndex={0}>
        {infoForm?.order_instructions || "N/A"}
      </InformationItem>
      {width && (
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start">
          <ButtonComponent
            variant="link"
            text="Return to Payment"
            size={width > 768 ? "sm" : "xs"}
            icon={ChevronLeftIcon}
            iconPosition="trailing"
            onClick={() => setSelectedTabIndex(1)}
          />
          <ButtonComponent
            text="Complete Order"
            size={width > 768 ? "base" : "sm"}
            isFull={width < 768}
            onClick={onClickCompleteOrder}
          />
        </div>
      )}
      <ToastComponent
        ref={toastComponentRef}
        title="Thank you for your order!"
        message="Your order has been successfully placed."
      />
    </TabPanel>
  );
}

export default OrderConfirmationComponent;

function InformationItem({
  children,
  title,
  toTabIndex,
}: PropsWithChildren<{ title: string; toTabIndex: number }>) {
  const { width } = useWindowSize();
  const { setSelectedTabIndex } = useOrderContext();

  return (
    <div className="space-y-1.5 border-b pb-6">
      <div className="flex justify-between gap-2 md:justify-start">
        <p className="font-semibold md:text-lg">{title}</p>
        {width && (
          <ButtonComponent
            variant="link"
            size={width < 768 ? "xs" : "sm"}
            text="Edit"
            onClick={() => setSelectedTabIndex(toTabIndex)}
          />
        )}
      </div>
      <div className="text-sm md:text-base">{children}</div>
    </div>
  );
}
