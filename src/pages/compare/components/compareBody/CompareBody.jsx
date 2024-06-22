// CompareProducts.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './compareBody.css';
import ProductCard from '../../../../components/cards/productCard/ProductCard';
import ProgressBar from '../../../../components/progressBar/ProgressBar';

import PageText from '../../../../content/PagesText.json'
import { useSelector } from 'react-redux';

const { compare } = PageText

const CompareBody = () => {
  const { lang } = useSelector((state) => state.baristica);

  return (
    <div className="compareBody">
        <div className="container">
           <div className="compareBody-products">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
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

                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                </Swiper>
           </div>
            {/* acidity  */}
            <div className="compareBody-chars">
                <h2 className="green800 f24">
                    {compare[lang]?.body?.acidityHeading}
                </h2>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                >
                    <SwiperSlide>
                    <ProgressBar percentage={10} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProgressBar percentage={60} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProgressBar percentage={70} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProgressBar percentage={20} />
                    </SwiperSlide>
                </Swiper>

            </div>
            {/* dencity  */}
            <div className="compareBody-chars">
                <h2 className="green800 f24">
                {compare[lang]?.body?.dencityHeading}
                </h2>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                >
                    <SwiperSlide>
                    <ProgressBar percentage={80} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProgressBar percentage={90} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProgressBar percentage={70} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProgressBar percentage={20} />
                    </SwiperSlide>
                </Swiper>

            </div>
            {/* sweetness  */}
            <div className="compareBody-chars">
                <h2 className="green800 f24">
                {compare[lang]?.body?.sweetnessHeading}

                </h2>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                >
                    <SwiperSlide>
                    <ProgressBar percentage={50} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProgressBar percentage={80} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProgressBar percentage={70} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProgressBar percentage={20} />
                    </SwiperSlide>
                </Swiper>

            </div>
            {/* taste  */}
            <div className="compareBody-chars">
                <h2 className="green800 f24">
                    {compare[lang]?.body?.sweetnessHeading}
                </h2>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                >
                    <SwiperSlide>
                        <p className="green600 f16">
                            Легкий кофе с нотами цветов, желтых фруктов и спелого лимона
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                            Легкий кофе с нотами цветов, желтых фруктов и спелого лимона
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                            Легкий кофе с нотами цветов, желтых фруктов и спелого лимона
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                            Легкий кофе с нотами цветов, желтых фруктов и спелого лимона
                        </p>
                    </SwiperSlide>
                </Swiper>

                
            </div>
            {/* processing method  */}
            <div className="compareBody-chars">
                <h2 className="green800 f24">
                    {compare[lang]?.body?.processingMethodHeading}
                </h2>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                >
                    <SwiperSlide>
                        <p className="green600 f16">
                           Способ обработки:
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        Способ обработки:
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        Способ обработки:
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        Способ обработки:
                        </p>
                    </SwiperSlide>
                </Swiper>

                
            </div>
            {/* roasting level  */}
            <div className="compareBody-chars">
                <h2 className="green800 f24">
                    {compare[lang]?.body?.roastingLevelHeading}
                </h2>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                >
                    <SwiperSlide>
                        <p className="green600 f16">
                        Фильтр
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        Темное эспрессо
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        Эспресс
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        Темное эспрессо
                        </p>
                    </SwiperSlide>
                </Swiper>

                
            </div>
            {/* variety */}
            <div className="compareBody-chars">
                <h2 className="green800 f24">
                    {compare[lang]?.body?.varietyHeading}
                </h2>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                >
                    <SwiperSlide>
                        <p className="green600 f16">
                        -
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        -
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        -
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        -
                        </p>
                    </SwiperSlide>
                </Swiper>

                
            </div>
            {/* growing height */}
            <div className="compareBody-chars">
                <h2 className="green800 f24">
                    {compare[lang]?.body?.growingHeightHeading}
                </h2>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                >
                    <SwiperSlide>
                        <p className="green600 f16">
                        1600 - 1900м
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        
                        </p>
                    </SwiperSlide>
                </Swiper>

                
            </div>
            {/* Q-Grader Rating */}
            <div className="compareBody-chars">
                <h2 className="green800 f24">
                    {compare[lang]?.body?.QGraderRatingHeading}
                </h2>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                >
                    <SwiperSlide>
                        <p className="green600 f16">
                        -
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        -
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        -
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <p className="green600 f16">
                        -
                        </p>
                    </SwiperSlide>
                </Swiper>

                
            </div>
        </div>
      
    </div>
  );
};

export default CompareBody;
