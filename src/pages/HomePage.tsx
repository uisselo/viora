import { useMemo } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { Images } from "@Assets";
import { CATEGORIES } from "@Config";
import { ButtonComponent } from "@GlobalComponents";
import { ProductsComponent, useProductQueries } from "@Modules";

function HomePage() {
  const { beautyData } = useProductQueries();

  return (
    <div className="flex flex-col h-full gap-8 md:gap-12 lg:gap-16">
      <section className="space-y-4 lg:space-y-5">
        <HeroSection />
        <CategoriesSection />
      </section>
      {beautyData && (
        <ProductsComponent data={beautyData} title="Bestsellers" />
      )}
    </div>
  );
}

function HeroSection() {
  const { width } = useWindowSize();

  const buttonSize = useMemo(() => {
    if (width) {
      return width > 1024 ? "lg" : width > 768 ? "sm" : "xs";
    }
    return "xs";
  }, [width]);

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
          <ButtonComponent text="Shop Now" size={buttonSize} />
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

export default HomePage;
