import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  AccordionComponent,
  ButtonComponent,
  QuantityComponent,
} from "@GlobalComponents";
import {
  PRODUCT_CONSTANTS,
  ProductItemComponent,
  ProductsCarouselComponent,
  useProduct,
} from "@Modules";
import { formatDate } from "@Utilities";

function ProductDetailsPage() {
  const { productDetails, bagProducts } = useProduct();

  if (!productDetails) return null;

  return (
    <div className="grid-container">
      <ProductItemComponent data={productDetails} isProductPage>
        <div className="flex flex-col col-span-4 gap-8 md:gap-4 md:col-span-12 md:grid md:grid-cols-12 lg:gap-5 lg:col-start-2">
          <div className="md:col-span-6 lg:col-span-5">
            <ProductItemComponent.Image />
          </div>
          <div className="space-y-8 md:col-span-6 lg:col-span-5">
            <InformationSection />
            <AccordionSection />
          </div>
        </div>
      </ProductItemComponent>
      {bagProducts && (
        <div className="col-span-4 md:col-span-12">
          <ProductsCarouselComponent
            data={bagProducts}
            title="Similar Products"
          />
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;

function InformationSection() {
  const [quantity, setQuantity] = useState<number>(1);

  const { width } = useWindowSize();
  const { productDetails } = useProduct();
  const { isDisabled, limit, onClickAddToBag } = useProduct(quantity);

  if (!productDetails) return null;

  return (
    <div className="space-y-8 md:space-y-6">
      <div className="flex flex-col gap-3">
        <div>
          <ProductItemComponent.Title />
          <ProductItemComponent.Price />
        </div>
        <p className="text-sm md:text-base">{productDetails.description}</p>
      </div>
      <div className="space-y-1.5">
        <QuantityComponent
          value={quantity}
          limit={limit}
          isButtonDisabled={isDisabled}
          onChange={setQuantity}
        />
        <p className="text-sm md:text-base">
          {productDetails.availabilityStatus}
        </p>
      </div>
      <div className="space-y-1">
        {isDisabled && (
          <p className="text-xs text-red-500 md:text-sm">
            Stock limit reached.
          </p>
        )}
        {width && (
          <ButtonComponent
            text="Add to Bag"
            size={width < 768 ? "sm" : "base"}
            isFull={width < 1024}
            onClick={onClickAddToBag}
            disabled={isDisabled}
          />
        )}
      </div>
    </div>
  );
}

function AccordionSection() {
  const { DELIVERY, REVIEWS } = PRODUCT_CONSTANTS;
  const { productDetails } = useProduct();

  if (!productDetails) return null;

  return (
    <div className="space-y-0.5">
      <AccordionComponent>
        <AccordionComponent.Button text={DELIVERY.TITLE} />
        <AccordionComponent.Panel text={DELIVERY.INFO} />
      </AccordionComponent>
      <AccordionComponent>
        <AccordionComponent.Button
          text={REVIEWS.TITLE(productDetails.reviews.length)}
        />
        <AccordionComponent.Panel className="p-0 md:p-0">
          {productDetails.reviews.map((item, index) => (
            <div key={String(index)} className="p-3 md:p-4 space-y-3.5">
              <div>
                <p className="text-sm font-semibold md:text-base">
                  {item.reviewerName}
                </p>
                <span className="text-xs text-gray-500 md:text-sm">
                  {formatDate(item.date, "M/DD/YYYY")}
                </span>
              </div>
              <p>{item.comment}</p>
            </div>
          ))}
        </AccordionComponent.Panel>
      </AccordionComponent>
    </div>
  );
}
