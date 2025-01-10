import { create } from "zustand";
import type { ShoppingBagState } from "./types";

const useShoppingBagStore = create<ShoppingBagState>((set) => ({
  items: [],
  totalAmount: "",
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  updateItem: (updatedItem) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === updatedItem.product.id
          ? { ...item, ...updatedItem }
          : item,
      ),
    })),
  setTotalAmount: (totalAmount) => set({ totalAmount }),
}));

export default useShoppingBagStore;
