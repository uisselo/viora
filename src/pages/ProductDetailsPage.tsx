import { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router";
import { find, map, some } from "lodash-es";
import { useWindowSize } from "@uidotdev/usehooks";
import { ButtonComponent, QuantityComponent } from "@GlobalComponents";
import {
  type ProductItem,
  ProductItemComponent,
  useProductQueries,
  useShoppingBagStore,
} from "@Modules";

function ProductDetailsPage() {
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const { productDetails } = useProductQueries(id);

  if (!productDetails) return;

  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-12 lg:gap-5">
      <ProductItemComponent data={productDetails} isProductPage>
        <div className="flex flex-col w-full col-span-4 gap-8 md:col-span-12 md:grid md:grid-cols-12 md:gap-4 lg:gap-5 lg:col-start-2 lg:col-span-10 lg:grid-cols-10">
          <div className="md:col-span-6 lg:col-span-5">
            <ProductItemComponent.Image />
          </div>
          <div className="space-y-8 md:space-y-6 md:col-span-6 lg:col-span-5">
            <div className="flex flex-col gap-3">
              <div>
                <ProductItemComponent.Title />
                <ProductItemComponent.Price />
              </div>
              <p className="text-sm md:text-base">
                {productDetails.description}
              </p>
            </div>
            <div className="space-y-1.5">
              <QuantityComponent
                value={quantity}
                onChange={setQuantity}
                limit={productDetails.stock}
              />
              <p className="text-sm md:text-base">
                {productDetails.availabilityStatus}
              </p>
            </div>
            <AddToBagButton data={productDetails} quantity={quantity} />
          </div>
        </div>
      </ProductItemComponent>
    </div>
  );
}

function AddToBagButton({
  data,
  quantity,
}: { data: ProductItem; quantity: number }) {
  const { width } = useWindowSize();
  const items = useShoppingBagStore((state) => state.items);
  const setItems = useShoppingBagStore((state) => state.setItems);

  const isDisabled = useMemo(
    () => !!find(items, (item) => item.quantity === item.product.stock),
    [items],
  );

  const onClickAddToBag = useCallback(() => {
    if (!data || isDisabled) return;

    const total = data.price * quantity;
    const totalPriceDisplay = quantity === 0 ? data.price : total;
    const isItemInBag = some(items, (item) => item.product.id === data.id);

    const updatedItems = isItemInBag
      ? map(items, (item) =>
          item.product.id === data.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                totalPrice: String(Number(item.totalPrice) + totalPriceDisplay),
              }
            : item,
        )
      : [
          ...items,
          {
            product: data,
            quantity,
            totalPrice: String(totalPriceDisplay),
          },
        ];

    setItems(updatedItems);
  }, [data, quantity, isDisabled, items, setItems]);

  return (
    <ButtonComponent
      text="Add to Bag"
      size={(width || 0) < 768 ? "sm" : "base"}
      isFull={(width || 0) < 1024}
      onClick={onClickAddToBag}
      disabled={isDisabled}
    />
  );
}

export default ProductDetailsPage;
