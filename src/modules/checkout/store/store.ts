import { create } from "zustand";
import type { CheckoutStore } from "./types";

const useCheckoutStore = create<CheckoutStore>((set) => ({
  informationForm: {
    order_instructions: "",
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    postal_code: "",
    city: "",
    state: "",
    mobile_no: "",
  },
  paymentForm: {
    payment_method: "",
    card_name: "",
    card_number: "",
  },
  setInformationForm: (informationForm) => set({ informationForm }),
  setPaymentForm: (paymentForm) => set({ paymentForm }),
}));

export default useCheckoutStore;
