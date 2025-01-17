import { useState } from "react";
import clsx from "clsx";
import { times } from "lodash-es";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useWindowSize } from "@uidotdev/usehooks";
import { ButtonComponent, QuantityComponent } from "@GlobalComponents";
import {
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
      <ProductItemComponent
        data={productDetails}
        isProductPage
        className="flex flex-col col-span-4 gap-8 md:col-span-12 lg:col-start-2 lg:col-span-10 md:gap-12 lg:gap-16"
      >
        <div className="flex flex-col gap-8 md:gap-4 lg:gap-5 md:grid md:grid-cols-12 lg:grid-cols-10 lg:col-span-10">
          <ProductItemComponent.Image className="md:col-span-6 lg:col-span-5" />
          <InformationSection />
        </div>
        <MoreInformationSection />
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
    <div className="space-y-8 md:space-y-6 md:col-span-6 lg:col-span-5 lg:flex lg:flex-col lg:justify-center">
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
            Minimum order reached.
          </p>
        )}
        {width && (
          <ButtonComponent
            text="Add to Bag"
            size={width < 768 ? "sm" : "base"}
            isFull={width < 768}
            onClick={onClickAddToBag}
            disabled={isDisabled}
          />
        )}
      </div>
    </div>
  );
}

function MoreInformationSection() {
  const { productDetails } = useProduct();

  const renderRating = (value: number) => {
    const icon = (index: number) =>
      index < value ? StarIcon : OutlineStarIcon;

    return (
      <div className="flex items-center gap-1">
        {times(5, (index) => {
          const Icon = icon(index);

          return (
            <Icon key={index} className="size-3.5 stroke-2 text-yellow-400" />
          );
        })}
        <p className="text-sm md:text-base">({value})</p>
      </div>
    );
  };

  if (!productDetails) return null;

  const tabItems = [
    "More Information",
    `Reviews (${productDetails.reviews.length})`,
  ];

  const moreInformationData = [
    { label: "Brand", data: productDetails.brand },
    {
      label: "Minimum Order Quantity",
      data: productDetails.minimumOrderQuantity,
    },
    { label: "Shipping", data: productDetails.shippingInformation },
    { label: "Warranty", data: productDetails.warrantyInformation },
    { label: "Returns", data: productDetails.returnPolicy },
  ];

  return (
    <TabGroup className="flex flex-col gap-4 text-sm md:text-base lg:gap-5 md:grid md:grid-cols-12 lg:grid-cols-10 lg:col-span-10">
      <TabList className="flex col-span-4 md:flex-col lg:col-span-3">
        {tabItems.map((item) => (
          <Tab
            key={item}
            className={({ selected }) =>
              clsx(
                "w-full p-3 md:text-left border-b border-gray-300 focus:outline-none",
                { "text-primary border-primary font-semibold": selected },
              )
            }
          >
            {item}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="md:col-span-8 lg:col-span-7">
        <TabPanel className="flex flex-col">
          {moreInformationData.map((item, index) => (
            <div
              key={String(index)}
              className="flex justify-between p-3 border-b border-gray-300"
            >
              <p className="font-medium">{item.label}</p>
              <p>{item.data}</p>
            </div>
          ))}
        </TabPanel>
        <TabPanel className="flex flex-col">
          <ButtonComponent
            text="Write a Review"
            variant="link"
            className="px-4 py-3"
          />
          {productDetails.reviews.map((item, index) => (
            <div
              key={String(index)}
              className="p-4 space-y-4 border-b border-gray-300 lg:space-y-5"
            >
              <div className="flex justify-between">
                <div className="space-y-1">
                  <p className="font-semibold">{item.reviewerName}</p>
                  {renderRating(item.rating)}
                </div>
                <p className="text-xs md:text-sm">
                  {formatDate(item.date, "MMM D, YYYY")}
                </p>
              </div>
              <p>{item.comment}</p>
            </div>
          ))}
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
