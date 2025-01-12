import { useState } from "react";
import { Label, Radio, RadioGroup, TabPanel } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import { ButtonComponent, TextInputComponent } from "@GlobalComponents";

function PaymentFormComponent() {
  const { width } = useWindowSize();
  const paymentOptions = ["Paypal", "Debit or Credit Card"];

  const [selected, setSelected] = useState(paymentOptions[0]);

  return (
    <TabPanel className="space-y-6">
      <div className="space-y-0.5">
        <p className="font-semibold lg:text-lg">Choose a payment method</p>
        <p className="text-sm md:text-base">
          You will not be charged until you review your order in the next page.
        </p>
      </div>
      <div className="space-y-3">
        <RadioGroup
          value={selected}
          onChange={setSelected}
          className="flex flex-col gap-3 md:flex-row"
        >
          {paymentOptions.map((item) => (
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
        <TextInputComponent
          id="card_name"
          label="Card Name"
          placeholder="Card Name"
        />
        <TextInputComponent
          id="card_number"
          label="Card Number"
          placeholder="Card Number"
        />
        <div className="flex gap-3">
          <TextInputComponent
            id="expiration_date"
            label="Expiration Date"
            placeholder="Expiration Date"
          />
          <TextInputComponent id="cvv" label="CVV" placeholder="CVV" />
        </div>
      </div>
      {width && (
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start">
          <ButtonComponent
            variant="link"
            text="Return to Information"
            size={width > 768 ? "sm" : "xs"}
            icon={ChevronLeftIcon}
            iconPosition="trailing"
          />
          <ButtonComponent
            text="Proceed"
            size={width > 768 ? "base" : "sm"}
            isFull={width < 768}
          />
        </div>
      )}
    </TabPanel>
  );
}

export default PaymentFormComponent;
