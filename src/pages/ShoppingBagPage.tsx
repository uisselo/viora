import { useCallback, useMemo } from "react";
import { isEmpty, round } from "lodash-es";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useMeasure } from "@uidotdev/usehooks";
import { ButtonIconComponent, QuantityComponent } from "@GlobalComponents";
import {
  ProductItemComponent,
  type ShoppingBagItem,
  useShoppingBagStore,
} from "@Modules";

function ShoppingBagPage() {
  const items = useShoppingBagStore((state) => state.items);

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
    <div className="grid grid-cols-4 gap-4 md:grid-cols-12 lg:gap-5">
      <div className="flex flex-col col-span-4 gap-12 md:col-span-10 lg:col-span-8">
        <section>
          <p className="text-lg font-semibold md:text-2xl">Your Shopping Bag</p>
          <p className="text-sm md:text-base">{itemsQuantityText}</p>
        </section>
        <ShoppingBagItemsSection data={items} />
      </div>
    </div>
  );
}

function ShoppingBagItemsSection({ data }: { data: ShoppingBagItem[] }) {
  const [ref, { height: quantityDivHeight }] = useMeasure();
  const updateItem = useShoppingBagStore((state) => state.updateItem);

  const onChangeQuantity = useCallback(
    (quantity: number, item: ShoppingBagItem) => {
      if (!data && quantity === item.quantity) return;

      updateItem({
        ...item,
        quantity,
        totalPrice: String(quantity * item.product.price),
      });
    },
    [data, updateItem],
  );

  if (isEmpty(data)) return;

  return (
    <section className="space-y-4">
      {data.map((item) => (
        <ProductItemComponent key={item.product.id} data={item.product}>
          <div className="grid w-full grid-cols-4 gap-4 md:grid-cols-8 lg:gap-5">
            <ProductItemComponent.Image className="col-span-1 md:col-span-2" />
            <div className="flex flex-col col-span-2 gap-1 md:col-span-4">
              <ProductItemComponent.Title />
              <ProductItemComponent.Price />
            </div>
            <div className="flex flex-col items-end justify-between col-span-1 gap-1 md:col-span-2">
              <p className="text-sm font-semibold md:text-base whitespace-nowrap">
                $ {round(Number(item.totalPrice), 2)}
              </p>
              <div className="flex items-center self-end gap-2">
                <ButtonIconComponent
                  icon={TrashIcon}
                  containerSize={quantityDivHeight || 20}
                  className="border border-gray-300"
                  iconClassName="stroke-red-500"
                />
                <QuantityComponent
                  ref={ref}
                  value={Number(item.quantity)}
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
