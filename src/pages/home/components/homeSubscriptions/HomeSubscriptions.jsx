import React from 'react'
import { useSelector } from 'react-redux';
import PagesText from "../../../../content/PagesText.json";
import "../homeSubscriptions/homeSubscriptions.css"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HomeSubscriptionCard from './components/HomeSubscriptionCard';

const { home } = PagesText;
const { body } = home;

const HomeSubscriptions = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className="homeSubscriptions">
        <div className='container'>
            <div className='homeSubscriptions-section flex border24'>
                <div className='homeSubscriptions-left'>
                    <h1 className='homeSubscriptions-title green800'>{body[lang]?.subscriptions.text.title}</h1>
                    <p className='homeSubscriptions-subtitle green800'>{body[lang]?.subscriptions.text.subtitle}</p>
                    <button className='homeSubscriptions-btn defaultBtn white f18 border16'>{body[lang]?.subscriptions.text.btn}</button>
                </div>
                <div className='homeSubscriptions-right'>
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
                        {body[lang]?.subscriptions?.list?.map((link, index) => (
                            <SwiperSlide key={index}>
                                <HomeSubscriptionCard content={link}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSubscriptions