import type { ProductItem } from "../../product";

export type ShoppingBagItem = {
  product: ProductItem;
  quantity: number;
  totalPrice: number;
};

export type ShoppingBagState = {
  items: ShoppingBagItem[];
  addItem: (data: ShoppingBagItem) => void;
  updateItem: (data: ShoppingBagItem) => void;
  removeItem: (data: ShoppingBagItem) => void;
  clearItems: () => void;
};
