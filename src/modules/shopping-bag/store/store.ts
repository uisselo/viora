import { create } from "zustand";
import type { ShoppingBagState } from "./types";

const useShoppingBagStore = create<ShoppingBagState>((set) => ({
  items: [],
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
  removeItem: (item) =>
    set((state) => ({
      items: state.items.filter((e) => e.product.id !== item.product.id),
    })),
  clearItems: () => set({ items: [] }),
}));

export default useShoppingBagStore;
