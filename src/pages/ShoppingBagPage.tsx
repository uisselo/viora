import type { ChangeEvent } from "react";
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
  useOrderStore,
  useProduct,
  useShoppingBag,
} from "@Modules";

function ShoppingBagPage() {
  const { beautyProducts } = useProduct();
  const { itemsQuantityText } = useShoppingBag();

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
          <ShoppingBagSummarySection />
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

export default ShoppingBagPage;

function ShoppingBagItemsSection() {
  const [ref, { height: quantityDivHeight }] = useMeasure();
  const { items, onChangeQuantity } = useShoppingBag();

  if (isEmpty(items)) return null;

  return (
    <section className="space-y-4">
      {items.map((item) => (
        <ProductItemComponent
          key={item.product.id}
          data={item.product}
          className="grid w-full grid-cols-4 gap-4 pb-4 border-b border-gray-300 md:grid-cols-8 lg:gap-5"
        >
          <ProductItemComponent.Image className="col-span-1 md:col-span-2" />
          <div className="flex flex-col col-span-2 gap-1 md:col-span-3">
            <ProductItemComponent.Title />
            <ProductItemComponent.Price />
          </div>
          <div className="flex flex-col items-end justify-between col-span-1 md:col-span-3">
            <ProductItemComponent.TotalPrice
              value={round(item.totalPrice, 2)}
            />
            <div className="flex flex-col self-end gap-1">
              {item.quantity === item.product.stock && (
                <p className="text-xs text-right text-red-500 md:text-sm">
                  Stock limit reached.
                </p>
              )}
              <div className="flex items-center justify-end gap-2">
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

function ShoppingBagSummarySection() {
  const { width } = useWindowSize();
  const { items, totalAmount } = useShoppingBag();
  const infoForm = useOrderStore((state) => state.infoForm);
  const setInfoForm = useOrderStore((state) => state.setInfoForm);

  const onChangeOrderInstructions = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInfoForm({ ...infoForm, order_instructions: e.target.value });
  };

  if (isEmpty(items)) return null;

  return (
    <div className="space-y-4 h-max md:space-y-6 lg:col-span-4 lg:p-6 lg:bg-gray-50">
      <div className="space-y-3">
        <div className="flex justify-between font-semibold md:text-lg">
          <p>Total</p>
          <p>$ {round(totalAmount, 2)}</p>
        </div>
        <TextAreaComponent
          value={infoForm.order_instructions}
          onChange={onChangeOrderInstructions}
          placeholder="Order Instructions"
          rows={4}
          hideLabel
          isOptional
        />
      </div>
      <div className="flex flex-col gap-3 md:items-end lg:items-start">
        <p className="text-sm md:text-base">
          Shipping is calculated at checkout.
        </p>
        {width && (
          <ButtonComponent
            navigateTo="/checkout"
            text="Checkout"
            size={width < 768 ? "sm" : "base"}
            isFull={!(width >= 768 && width < 1024)}
          />
        )}
      </div>
    </div>
  );
}
