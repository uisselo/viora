import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Label, Radio, RadioGroup, TabPanel } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import { ButtonComponent, TextInputComponent } from "@GlobalComponents";
import { useValidate } from "@Utilities";
import { type PaymentForm, useOrderContext } from "../store";
import { ORDER_CONSTANTS } from "../constants";

function PaymentFormComponent() {
  const { width } = useWindowSize();
  const { isCardPayment, paymentForm, setSelectedTabIndex, setPaymentForm } =
    useOrderContext();

  const { createFields, register, handleSubmit, errors } =
    useValidate<PaymentForm>();

  useEffect(() => {
    if (isCardPayment) {
      createFields(["card_name", "card_number", "expiration_date", "cvv"]);
    }
  }, [isCardPayment]);

  const onSubmitPaymentForm: SubmitHandler<PaymentForm> = (data) => {
    if (isCardPayment) {
      setPaymentForm({
        ...paymentForm,
        ...data,
      });
    }

    setSelectedTabIndex(2);
  };

  return (
    <TabPanel className="space-y-6">
      <div className="space-y-0.5">
        <p className="font-semibold lg:text-lg">Choose a payment method</p>
        <p className="text-sm md:text-base">
          You will not be charged until you review your order in the next page.
        </p>
      </div>
      <div className="space-y-3">
        <RadioSection />
        {isCardPayment && (
          <>
            <TextInputComponent
              id="card_name"
              label="Card Name"
              placeholder="Card Name"
              register={register}
              error={errors.card_name?.message as string}
            />
            <TextInputComponent
              id="card_number"
              label="Card Number"
              placeholder="Card Number"
              register={register}
              error={errors.card_number?.message as string}
            />
            <div className="flex gap-3">
              <TextInputComponent
                id="expiration_date"
                label="Expiration Date"
                placeholder="Expiration Date"
                register={register}
                error={errors.expiration_date?.message as string}
              />
              <TextInputComponent
                id="cvv"
                label="CVV"
                placeholder="CVV"
                register={register}
                error={errors.cvv?.message as string}
              />
            </div>
          </>
        )}
      </div>
      {width && (
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
          <ButtonComponent
            variant="link"
            text="Return to Information"
            size={width > 768 ? "sm" : "xs"}
            icon={ChevronLeftIcon}
            iconPosition="trailing"
            onClick={() => setSelectedTabIndex(0)}
          />
          <ButtonComponent
            text="Proceed"
            size={width > 768 ? "base" : "sm"}
            isFull={width < 768}
            onClick={
              isCardPayment
                ? handleSubmit(onSubmitPaymentForm)
                : () => setSelectedTabIndex(2)
            }
          />
        </div>
      )}
    </TabPanel>
  );
}

export default PaymentFormComponent;

function RadioSection() {
  const { paymentForm, setPaymentForm } = useOrderContext();

  const onChange = (value: string) => {
    setPaymentForm({ payment_method: value });
  };

  return (
    <RadioGroup
      value={paymentForm.payment_method}
      onChange={onChange}
      className="flex flex-col gap-3 md:flex-row"
    >
      {ORDER_CONSTANTS.PAYMENT_OPTIONS.map((item) => (
        <Radio
          key={item}
          value={item}
          className="rounded w-full flex items-center gap-2 p-3 border border-gray-400 group focus:outline-none md:p-4 data-[checked]:bg-secondary data-[checked]:border-primary cursor-pointer"
        >
          <div className="flex justify-center items-center border border-gray-400 rounded-full size-5 group-data-[checked]:bg-primary group-data-[checked]:border-primary">
            <span className="bg-transparent rounded-full size-2 group-data-[checked]:bg-secondary" />
          </div>
          <Label className="text-sm md:text-base">{item}</Label>
        </Radio>
      ))}
    </RadioGroup>
  );
}
