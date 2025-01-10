import { useCallback, useMemo } from "react";
import { sumBy } from "lodash-es";
import {
  type ShoppingBagItem,
  useProduct,
  useShoppingBagStore,
} from "@Modules";

export function useShoppingBag(quantity = 0) {
  const { productDetails } = useProduct();

  const items = useShoppingBagStore((state) => state.items);
  const addItem = useShoppingBagStore((state) => state.addItem);
  const updateItem = useShoppingBagStore((state) => state.updateItem);

  const itemInBag = useMemo(
    () =>
      items &&
      productDetails &&
      items.find((item) => item.product.id === productDetails.id),
    [items, productDetails],
  );

  const isDisabled = useMemo(() => {
    if (!items || !productDetails) return false;

    return items.some((item) => itemInBag?.quantity === item.product.stock);
  }, [items, productDetails, itemInBag]);

  const limit = useMemo(() => {
    if (!productDetails) return;

    return itemInBag
      ? productDetails.stock - itemInBag.quantity
      : productDetails.stock;
  }, [productDetails, itemInBag]);

  const totalAmount = useMemo(
    () => items && sumBy(items, "totalPrice"),
    [items],
  );

  const onClickAddToBag = useCallback(() => {
    if (!productDetails || isDisabled) return;

    const total = productDetails.price * quantity;
    const totalPriceDisplay = quantity === 0 ? productDetails.price : total;

    if (itemInBag) {
      updateItem({
        ...itemInBag,
        quantity: itemInBag.quantity + quantity,
        totalPrice: itemInBag.totalPrice + totalPriceDisplay,
      });
      return;
    }

    addItem({
      product: productDetails,
      quantity,
      totalPrice: totalPriceDisplay,
    });
  }, [quantity, itemInBag, productDetails, isDisabled, updateItem, addItem]);

  const onChangeQuantity = useCallback(
    (quantity: number, item: ShoppingBagItem) => {
      if (!items && quantity === item.quantity) return;

      updateItem({
        ...item,
        quantity,
        totalPrice: quantity * item.product.price,
      });
    },
    [items, updateItem],
  );

  return {
    items,
    totalAmount,
    isDisabled,
    limit,
    addItem,
    updateItem,
    onClickAddToBag,
    onChangeQuantity,
  };
}
