import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
  BadgeComponent,
  ButtonComponent,
  ButtonIconComponent,
  NavItemComponent,
  QuantityComponent,
  TextInputComponent,
} from "@GlobalComponents";
import { ProductItemComponent, useProductQueries } from "@Modules";

function ComponentsPage() {
  const { beautyData } = useProductQueries();

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-4 gap-4 md:grid-cols-12 lg:gap-5">
        <div className="flex flex-col col-span-4 gap-12 md:col-span-6">
          <ButtonIconComponent icon={ShoppingBagIcon} className="p-0">
            <div className="absolute right-0">
              <div className="absolute left-0 -translate-x-2 translate-y-0.5">
                <BadgeComponent text="1" />
              </div>
            </div>
          </ButtonIconComponent>
          <ButtonComponent />
          <TextInputComponent id="text_input_component" />
          <NavItemComponent />
          <QuantityComponent value={20} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-12 lg:gap-5">
        {beautyData && (
          <div className="flex flex-col col-span-2 gap-2 gap-12 md:col-span-4 lg:col-span-3">
            <ProductItemComponent data={beautyData[0]}>
              <ProductItemComponent.Image />
              <div className="flex gap-3">
                <ProductItemComponent.Title />
                <ProductItemComponent.Price />
              </div>
            </ProductItemComponent>
          </div>
        )}
      </div>
    </div>
  );
}

export default ComponentsPage;
