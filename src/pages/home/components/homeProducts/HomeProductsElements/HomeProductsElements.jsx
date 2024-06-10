import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination, Scrollbar, A11y } from "swiper/modules";

import ProductCard from "../../../../../components/cards/productCard/ProductCard";

export default function HomeProductsElements(props) {
  return (
    <div className="homeProducts-elements">
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
