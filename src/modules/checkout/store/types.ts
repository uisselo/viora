export type InformationForm = {
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  city: string;
  state: string;
  mobile_number: string;
  order_instructions: string;
};

export type PaymentForm = {
  payment_method: string;
  card_name: string;
  card_number: string;
};

export type CheckoutStore = {
  informationForm: InformationForm;
  paymentForm: PaymentForm;
  setInformationForm: (data: InformationForm) => void;
  setPaymentForm: (data: PaymentForm) => void;
};
