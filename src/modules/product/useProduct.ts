import { useCallback, useMemo } from "react";
import { useParams } from "react-router";
import { useProductQueries, useShoppingBag } from "@Modules";

export function useProduct(quantity = 0) {
  const { id } = useParams();
  const { items, updateItem, addItem } = useShoppingBag();
  const { productDetails, beautyProducts, bagProducts } = useProductQueries(id);

  const itemInBag = useMemo(
    () => items.find((item) => item.product.id === productDetails?.id),
    [items, productDetails],
  );

  const isDisabled = useMemo(() => {
    return items.some(
      (item) => itemInBag?.quantity === item.product.minimumOrderQuantity,
    );
  }, [items, itemInBag]);

  const limit = useMemo(() => {
    if (!productDetails) return;

    return itemInBag
      ? productDetails.minimumOrderQuantity - itemInBag.quantity
      : productDetails.minimumOrderQuantity;
  }, [productDetails, itemInBag]);

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

  return {
    productDetails,
    beautyProducts,
    bagProducts,
    isDisabled,
    limit,
    onClickAddToBag,
  };
}
