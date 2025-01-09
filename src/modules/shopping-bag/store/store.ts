import { create } from "zustand";
import type { ShoppingBagState } from "./types";

const useShoppingBagStore = create<ShoppingBagState>((set) => ({
  items: [],
  totalAmount: "",
  setItems: (items) => set({ items }),
  setTotalAmount: (totalAmount) => set({ totalAmount }),
  updateItem: (updatedItem) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === updatedItem.product.id
          ? { ...item, ...updatedItem }
          : item,
      ),
    })),
}));

export default useShoppingBagStore;
