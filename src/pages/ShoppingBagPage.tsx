import { useMemo } from "react";
import { isEmpty, round } from "lodash-es";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useMeasure, useWindowSize } from "@uidotdev/usehooks";
import {
  ButtonComponent,
  ButtonIconComponent,
  QuantityComponent,
  TextAreaComponent,
} from "@GlobalComponents";
import {
  ProductItemComponent,
  ProductsCarouselComponent,
  useProduct,
  useShoppingBag,
} from "@Modules";

function ShoppingBagPage() {
  const { beautyProducts } = useProduct();
  const { items, totalAmount } = useShoppingBag();
  const { width } = useWindowSize();

  const itemsQuantityText = useMemo(
    () =>
      isEmpty(items)
        ? "No items"
        : items.length > 1
          ? `${items.length} Items`
          : `${items.length} Item`,
    [items],
  );

  return (
    <div className="grid-container">
      <div className="col-span-4 md:col-span-10 md:col-start-2 lg:col-span-12">
        <div className="space-y-8 md:space-y-12 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="space-y-8 lg:col-span-8">
            <section>
              <p className="text-lg font-semibold md:text-2xl">
                Your Shopping Bag
              </p>
              <p className="text-sm md:text-base">{itemsQuantityText}</p>
            </section>
            <ShoppingBagItemsSection />
          </div>
          <div className="space-y-4 h-max md:space-y-6 lg:col-span-4 lg:p-6 lg:bg-gray-50">
            <div className="space-y-3">
              <div className="flex justify-between font-semibold md:text-lg">
                <p>Total</p>
                <p>$ {totalAmount}</p>
              </div>
              <TextAreaComponent
                placeholder="Order Instructions"
                rows={4}
                hideLabel
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm md:text-base">
                Shipping is calculated at checkout.
              </p>
              {width && (
                <ButtonComponent
                  text="Checkout"
                  size={width < 768 ? "sm" : "base"}
                  isFull={!(width >= 768 && width < 1024)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {beautyProducts && (
        <div className="col-span-4 md:col-span-12">
          <ProductsCarouselComponent data={beautyProducts} title="Shop more" />
        </div>
      )}
    </div>
  );
}

function ShoppingBagItemsSection() {
  const [ref, { height: quantityDivHeight }] = useMeasure();

  const { items, onChangeQuantity } = useShoppingBag();

  if (isEmpty(items)) return null;

  return (
    <section className="space-y-4">
      {items.map((item) => (
        <ProductItemComponent key={item.product.id} data={item.product}>
          <div className="grid w-full grid-cols-4 gap-4 pb-4 border-b border-gray-300 md:grid-cols-8 lg:gap-5">
            <ProductItemComponent.Image className="col-span-1 md:col-span-2" />
            <div className="flex flex-col col-span-2 gap-1 md:col-span-4">
              <ProductItemComponent.Title />
              <ProductItemComponent.Price />
            </div>
            <div className="flex flex-col items-end justify-between col-span-1 md:col-span-2">
              <ProductItemComponent.TotalPrice
                value={round(item.totalPrice, 2)}
              />
              <div className="flex items-center self-end gap-2">
                <ButtonIconComponent
                  icon={TrashIcon}
                  containerSize={quantityDivHeight || 20}
                  className="border border-gray-300"
                  iconClassName="stroke-red-500"
                />
                <QuantityComponent
                  ref={ref}
                  value={item.quantity}
                  limit={item.product.stock}
                  onChange={(value) => onChangeQuantity(value, item)}
                />
              </div>
            </div>
          </div>
        </ProductItemComponent>
      ))}
    </section>
  );
}

export default ShoppingBagPage;
