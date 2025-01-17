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
  card_name?: string;
  card_number?: string;
  expiration_date?: string;
  cvv?: string;
};

export type OrderStore = {
  infoForm: InformationForm;
  paymentForm: PaymentForm;
  setInfoForm: (data: InformationForm) => void;
  setPaymentForm: (data: PaymentForm) => void;
};

export type OrderContextData = OrderStore & {
  isCardPayment: boolean;
  selectedTabIndex: number;
  setSelectedTabIndex: (data: number) => void;
};
