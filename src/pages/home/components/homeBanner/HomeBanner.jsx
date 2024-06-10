import React from "react";
import { useSelector } from "react-redux";
import './homeBanner.css';
import PagesText from "../../../../content/PagesText.json";
import HomeBannerCard from "./components/HomeBannerCard";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { Pagination, Scrollbar, A11y } from 'swiper/modules';

const { home } = PagesText;
const { head } = home;

export default function HomeBanner() {
  const { lang } = useSelector((state) => state.baristica);

  return (
    <div className="homeBanner">
      <div className="container">
        <div className="homeBanner-head">
            <h2 className="white">{head[lang]?.title}</h2>
        </div>
        <div className="homeBanner-cards">
            <Swiper
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={24}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  500: {
                    slidesPerView: 1.5
                  },
                  640: {
                    slidesPerView: 1.5,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
            >
                {head[lang]?.links?.map((link, index) => (
                    <SwiperSlide key={index}>
                        <HomeBannerCard content={link} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
      </div>
    </div>
  );
}
