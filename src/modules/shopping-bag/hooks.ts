import { useCallback, useMemo } from "react";
import { useProduct, useShoppingBagStore } from "@Modules";

export function useShoppingBag(quantity = 0) {
  const { productDetails } = useProduct();

  const items = useShoppingBagStore((state) => state.items);
  const addItem = useShoppingBagStore((state) => state.addItem);
  const updateItem = useShoppingBagStore((state) => state.updateItem);

  const isDisabled = useMemo(
    () => !!items.find((item) => item.quantity === item.product.stock),
    [items],
  );

  const onClickAddToBag = useCallback(() => {
    if (!productDetails || isDisabled) return;

    const total = productDetails.price * quantity;
    const totalPriceDisplay = quantity === 0 ? productDetails.price : total;
    const item = items.find((item) => item.product.id === productDetails.id);

    if (item) {
      updateItem({
        ...item,
        quantity: item.quantity + quantity,
        totalPrice: String(Number(item.totalPrice) + totalPriceDisplay),
      });
      return;
    }

    addItem({
      product: productDetails,
      quantity,
      totalPrice: String(totalPriceDisplay),
    });
  }, [productDetails, quantity, isDisabled, items, updateItem, addItem]);

  return {
    items,
    isDisabled,
    addItem,
    updateItem,
    onClickAddToBag,
  };
}
