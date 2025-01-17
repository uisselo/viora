import { create } from "zustand";
import type { OrderStore } from "./types";

const useOrderStore = create<OrderStore>((set) => ({
  infoForm: {
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    postal_code: "",
    city: "",
    state: "",
    mobile_number: "",
    order_instructions: "",
  },
  paymentForm: {
    payment_method: "Paypal",
  },
  setInfoForm: (infoForm) => set({ infoForm }),
  setPaymentForm: (paymentForm) => set({ paymentForm }),
}));

export default useOrderStore;
