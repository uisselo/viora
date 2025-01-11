import { useCallback, useMemo } from "react";
import { isEmpty, sumBy } from "lodash-es";
import { type ShoppingBagItem, useShoppingBagStore } from "@Modules";
import { useShallow } from "zustand/shallow";

export function useShoppingBag() {
  const items = useShoppingBagStore(useShallow((state) => state.items));
  const addItem = useShoppingBagStore((state) => state.addItem);
  const updateItem = useShoppingBagStore((state) => state.updateItem);

  const itemsQuantityText = useMemo(
    () =>
      isEmpty(items)
        ? "No items"
        : items.length > 1
          ? `${items.length} Items`
          : `${items.length} Item`,
    [items],
  );

  const totalAmount = useMemo(() => sumBy(items, "totalPrice"), [items]);

  const onChangeQuantity = useCallback(
    (quantity: number, item: ShoppingBagItem) => {
      if (quantity === item.quantity) return;

      updateItem({
        ...item,
        quantity,
        totalPrice: quantity * item.product.price,
      });
    },
    [updateItem],
  );

  return {
    items,
    itemsQuantityText,
    totalAmount,
    addItem,
    updateItem,
    onChangeQuantity,
  };
}
