import { Link } from "react-router";
import { CarouselComponent } from "@GlobalComponents";
import type { ProductItem } from "../store";
import { ProductItemComponent } from "./ProductItemComponent";

type Props = { title?: string; data: ProductItem[] };

function ProductsCarouselComponent(props: Props) {
  const { title, data } = props;

  return (
    <section className="space-y-3 md:space-y-4">
      {title && <p className="font-semibold md:text-lg">{title}</p>}

      <CarouselComponent items={data}>
        {({ item }) => (
          <Link to={`/product/${item.id}`}>
            <ProductItemComponent data={item} className="flex flex-col gap-2">
              <ProductItemComponent.Image />
              <div className="flex gap-3">
                <ProductItemComponent.Title />
                <ProductItemComponent.Price />
              </div>
            </ProductItemComponent>
          </Link>
        )}
      </CarouselComponent>
    </section>
  );
}

export default ProductsCarouselComponent;
