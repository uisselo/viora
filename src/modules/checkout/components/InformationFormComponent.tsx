import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { TabPanel } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  ButtonComponent,
  TextAreaComponent,
  TextInputComponent,
} from "@GlobalComponents";
import { useValidate } from "@Utilities";
import { type InformationForm, useCheckoutStore } from "../store";

function InformationFormComponent({ onClick }: { onClick: () => void }) {
  const { width } = useWindowSize();
  const { createFields, register, handleSubmit, errors } =
    useValidate<InformationForm>();
  const setInformationForm = useCheckoutStore(
    (state) => state.setInformationForm,
  );

  useEffect(() => {
    createFields([
      "email",
      "first_name",
      "last_name",
      "address",
      "postal_code",
      "city",
      "state",
      "mobile_number",
    ]);
  }, []);

  const onSubmit: SubmitHandler<InformationForm> = (data) => {
    setInformationForm({ ...data });
    onClick();
  };

  return (
    <TabPanel className="space-y-6">
      <div className="space-y-3">
        <p className="text-lg font-semibold">Contact</p>
        <TextInputComponent
          id="email"
          label="Email Address"
          placeholder="Email Address"
          register={register}
          error={errors.email?.message as string}
        />
      </div>
      <div className="space-y-3">
        <p className="text-lg font-semibold">Shipping Information</p>
        <div className="flex flex-col gap-3 lg:flex-row">
          <TextInputComponent
            id="first_name"
            label="First Name"
            placeholder="First Name"
            register={register}
            error={errors.first_name?.message as string}
          />
          <TextInputComponent
            id="last_name"
            label="Last Name"
            placeholder="Last Name"
            register={register}
            error={errors.last_name?.message as string}
          />
        </div>
        <TextAreaComponent
          id="address"
          label="Address"
          placeholder="Address"
          register={register}
          error={errors.address?.message as string}
        />
        <TextInputComponent
          id="postal_code"
          label="Postal Code"
          placeholder="Postal Code"
          register={register}
          error={errors.postal_code?.message as string}
        />
        <div className="flex flex-col gap-3 lg:flex-row">
          <TextInputComponent
            id="city"
            label="City"
            placeholder="City"
            register={register}
            error={errors.city?.message as string}
          />
          <TextInputComponent
            id="state"
            label="State"
            placeholder="State"
            register={register}
            error={errors.state?.message as string}
          />
        </div>
        <TextInputComponent
          id="mobile_number"
          label="Mobile Number"
          placeholder="Mobile Number"
          register={register}
          error={errors.mobile_number?.message as string}
        />
      </div>
      {width && (
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start">
          <ButtonComponent
            variant="link"
            navigateTo="/shopping-bag"
            text="Return to Shopping Bag"
            size={width > 768 ? "sm" : "xs"}
            icon={ChevronLeftIcon}
            iconPosition="trailing"
          />
          <ButtonComponent
            text="Proceed"
            size={width > 768 ? "base" : "sm"}
            isFull={width < 768}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      )}
    </TabPanel>
  );
}

export default InformationFormComponent;
