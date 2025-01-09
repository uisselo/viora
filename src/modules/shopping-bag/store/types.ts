import type { ProductItem } from "../../product";

export type ShoppingBagItem = {
  product: ProductItem;
  quantity: number;
  totalPrice: string;
};

export type ShoppingBagState = {
  items: ShoppingBagItem[];
  totalAmount: string;
  setItems: (data: ShoppingBagItem[]) => void;
  setTotalAmount: (data: string) => void;
  updateItem: (data: ShoppingBagItem) => void;
};
