import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination, Scrollbar, A11y } from "swiper/modules";

import ProductCard from "../../../../../components/cards/productCard/ProductCard";
import Loading from "../../../../../components/loading/Loading";
import SuccessModal from "../../../../../components/successModal/SuccessModal";

export default function HomeProductsElements(props) {
  const { products, setProducts } = props
  const [loading, setLoading] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [successData, setSuccessData] = useState({})
  return (
    <div className="homeProducts-elements">
      <Loading status={loading} />
      <SuccessModal status={successModal} setStatus={setSuccessModal} data={successData} />
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          562 :{
            slidesPerView: 2,
            spaceBetween: 24,
          },
          // when window width is < 640px
          0: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
        }}
      >
        {
          products && products.map((product, key) => (
            <SwiperSlide key={key}>
              <ProductCard
                product={product}
                setProducts={setProducts}
                setSuccessData={setSuccessData}
                setSuccessModal={setSuccessModal}
                setLoading={setLoading}
              />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  );
}
