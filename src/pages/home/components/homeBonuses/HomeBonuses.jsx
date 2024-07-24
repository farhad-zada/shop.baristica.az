import React from 'react'
import { useSelector } from 'react-redux';
import PagesText from "../../../../content/PagesText.json";
import "./homeBonuses.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HomeBonusCard from './components/HomeBonusCard';

const { home } = PagesText;
const { body } = home;

const HomeBonuses = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className="homeBonuses">
        <div className='container'>
            <div className='homeBonuses-section flex border24'>
                <div className='homeBonuses-left'>
                    <h1 className='homeBonuses-title green800'>{lang ? body[lang]?.bonuses.text.title : ''}</h1>
                    <p className='homeBonuses-subtitle green800'>{lang ? body[lang]?.bonuses.text.subtitle : ''}</p>
                    <button className='homeBonuses-btn defaultBtn white f18 border16'>{lang ? body[lang]?.bonuses.text.btn : ''}</button>
                </div>
                <div className='homeBonuses-right'>
                    <Swiper
                        spaceBetween={24}
                        pagination={{ clickable: true }}
                        breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                        },
                        500: {
                            slidesPerView: 1.5
                        },
                        640: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.9,
                        },
                        1024: {
                            slidesPerView: 2.9,
                        },
                        }}
                    >
                        {lang && body[lang]?.bonuses?.list?.map((link, index) => (
                            <SwiperSlide key={index}>
                                <HomeBonusCard content={link}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBonuses