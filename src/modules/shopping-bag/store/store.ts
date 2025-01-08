import { create } from "zustand";
import type { ShoppingBagState } from "./types";

const useShoppingBagStore = create<ShoppingBagState>((set) => ({
  items: [],
  totalAmount: "",
  setItems: (items) => set({ items }),
  setTotalAmount: (totalAmount) => set({ totalAmount }),
}));

export default useShoppingBagStore;
