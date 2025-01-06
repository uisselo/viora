import {
  ButtonComponent,
  NavItemComponent,
  ProductItemComponent,
  QuantityComponent,
  TextInputComponent,
} from "../components";
import { useProductQueries } from "../store";

function ComponentsPage() {
  const { beautyData } = useProductQueries();

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-4 gap-4 md:grid-cols-12 lg:gap-5">
        <div className="flex flex-col col-span-4 gap-12 md:col-span-6">
          <ButtonComponent />
          <TextInputComponent />
          <NavItemComponent />
          <QuantityComponent value={20} isDisplayOnly />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-12 lg:gap-5">
        <div className="col-span-2 gap-12 md:col-span-4 lg:col-span-3">
          {beautyData && <ProductItemComponent data={beautyData[0]} />}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-12 lg:gap-5">
        <div className="flex flex-col col-span-4 gap-12 md:col-span-10 lg:col-span-8">
          {beautyData && (
            <ProductItemComponent data={beautyData[0]} display="shopping bag" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ComponentsPage;
