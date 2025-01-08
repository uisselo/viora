import type { ReactNode } from "react";
import { Swiper, type SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";

type Props<T> = {
  items: T[];
  children?: (props: { item: T }) => ReactNode;
} & Pick<SwiperProps, "breakpoints">;

const DEFAULT_BREAKPOINTS = {
  1024: { slidesPerView: 4, spaceBetween: 20 },
  768: { slidesPerView: 3, spaceBetween: 16 },
  0: { slidesPerView: 2, spaceBetween: 16 },
};

function CarouselComponent<T>(props: Props<T>) {
  const { children, items, breakpoints = DEFAULT_BREAKPOINTS } = props;

  return (
    <Swiper breakpoints={breakpoints}>
      {children &&
        items.map((item, index) => (
          <SwiperSlide key={index.toString()}>{children({ item })}</SwiperSlide>
        ))}
    </Swiper>
  );
}

export default CarouselComponent;
