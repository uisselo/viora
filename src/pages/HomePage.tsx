import { useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { Images } from "@Assets";
import { CATEGORIES } from "@Config";
import { ButtonComponent, TextInputComponent } from "@GlobalComponents";
import { ProductsCarouselComponent, useProductQueries } from "@Modules";
import { useValidate } from "@Utilities";

function HomePage() {
  const { beautyProducts, bagProducts } = useProductQueries();

  return (
    <div className="flex flex-col h-full gap-8 md:gap-12 lg:gap-16">
      <section className="space-y-4 lg:space-y-5">
        <HeroSection />
        <CategoriesSection />
      </section>
      {beautyProducts && bagProducts && (
        <>
          <ProductsCarouselComponent
            data={beautyProducts}
            title="Bestsellers"
          />
          <ProductsCarouselComponent data={bagProducts} title="New Arrivals" />
        </>
      )}
      <NewsletterSection />
    </div>
  );
}

export default HomePage;

function HeroSection() {
  const { width } = useWindowSize();

  return (
    <div className="relative aspect-[21/9] rounded overflow-hidden text-primary">
      <img src={Images.img_hero} alt="Hero" />
      <div className="absolute inset-0 md:grid md:grid-cols-12">
        <div className="flex flex-col justify-center h-full gap-4 px-6 md:gap-6 md:p-0 md:col-span-10 md:col-start-2 lg:gap-8">
          <div>
            <p className="text-lg font-bold md:text-2xl lg:text-4xl">
              Save up to 70%
            </p>
            <p className="font-semibold md:text-xl">Special Offer</p>
          </div>
          {width && (
            <ButtonComponent
              text="Shop Now"
              size={width > 1024 ? "lg" : width > 768 ? "sm" : "xs"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function CategoriesSection() {
  return (
    <div className="space-y-3">
      <p className="font-semibold md:text-lg">Shop our categories</p>
      <div className="grid grid-cols-3 gap-3 md:flex">
        {CATEGORIES.map((item, index) => (
          <div
            key={String(index)}
            className="col-span-1 relative aspect-[3/2] w-full rounded overflow-hidden"
          >
            <img src={item.image_url} alt={`${item.label} Category`} />
            <p className="absolute text-sm font-bold text-white top-2 left-2 md:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsletterSection() {
  const { width } = useWindowSize();
  const { createFields, register, handleSubmit, errors } = useValidate();

  useEffect(() => {
    createFields(["full_name", "email"]);
  }, []);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className="grid-container">
      <div className="col-span-4 space-y-4 space-y-6 md:py-8 lg:py-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
        <div className="space-y-1 md:text-center">
          <p className="font-semibold md:text-lg">
            Subscribe to our Newsletter
          </p>
          <p className="text-sm md:text-base">
            Stay in the Loop – Exclusive Deals, Fresh Finds, and More, Straight
            to Your Inbox!
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <TextInputComponent
            id="full_name"
            label="Full Name"
            placeholder="Full Name"
            register={register}
            error={errors.full_name?.message as string}
          />
          <TextInputComponent
            id="email"
            label="Email Address"
            placeholder="Email Address"
            register={register}
            error={errors.email?.message as string}
          />
          {width && (
            <ButtonComponent
              text="Submit"
              className="h-max"
              isFull={width < 768}
              size={width < 768 ? "sm" : "base"}
              onClick={handleSubmit(onSubmit)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
