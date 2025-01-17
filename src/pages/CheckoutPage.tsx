import { clsx } from "clsx";
import { round } from "lodash-es";
import { useWindowSize } from "@uidotdev/usehooks";
import { AccordionComponent, QuantityComponent } from "@GlobalComponents";
import {
  OrderFormComponent,
  ProductItemComponent,
  useOrderStore,
  useShoppingBag,
} from "@Modules";

function CheckoutPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-lg font-semibold md:text-2xl">Checkout</p>
        <p className="text-sm md:text-base">
          Almost there! Just a few steps to go.
        </p>
      </div>
      <div className="flex flex-col-reverse gap-8 md:gap-12 lg:gap-5 lg:grid lg:grid-cols-2">
        <OrderFormComponent />
        <OrderSummarySection />
      </div>
    </div>
  );
}

export default CheckoutPage;

function OrderSummarySection() {
  const { width } = useWindowSize();
  const { items, totalAmount } = useShoppingBag();
  const infoForm = useOrderStore((state) => state.infoForm);

  return (
    width && (
      <div className="h-max">
        <AccordionComponent defaultOpen={width > 1024}>
          <AccordionComponent.Button
            text="Order Summary"
            className="p-4 md:p-6"
          />
          <AccordionComponent.Panel className="space-y-4">
            <p className="font-semibold lg:text-lg">
              In your bag ({items.length})
            </p>
            <div className="space-y-3">
              {items.map((item, index) => (
                <ProductItemComponent
                  key={String(index)}
                  data={item.product}
                  className="grid w-full grid-cols-4 gap-4 md:grid-cols-8 lg:gap-5"
                >
                  <ProductItemComponent.Image className="col-span-1 md:col-span-2" />
                  <div className="flex flex-col col-span-2 gap-1 md:col-span-3">
                    <ProductItemComponent.Title />
                    <ProductItemComponent.Price />
                  </div>
                  <div className="flex flex-col items-end col-span-1 gap-2 md:col-span-3">
                    <QuantityComponent value={item.quantity} isDisplayOnly />
                    <ProductItemComponent.TotalPrice
                      value={round(item.totalPrice, 2)}
                    />
                  </div>
                </ProductItemComponent>
              ))}
            </div>
          </AccordionComponent.Panel>
        </AccordionComponent>
        <div className="w-full p-4 space-y-2 border-b border-gray-300 border-x md:p-6">
          <div className="flex justify-between text-sm md:text-base">
            <p>Subtotal</p>
            <p>$ {round(totalAmount, 2)}</p>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <p>Shipping Fee</p>
            <p className={clsx({ "text-gray-500": !infoForm?.address })}>
              {infoForm?.address ? "$ 8.00" : "Calculated at next step"}
            </p>
          </div>
          <div className="flex justify-between font-semibold lg:text-lg">
            <p>Total</p>
            <p>$ {round(totalAmount, 2)}</p>
          </div>
        </div>
      </div>
    )
  );
}
