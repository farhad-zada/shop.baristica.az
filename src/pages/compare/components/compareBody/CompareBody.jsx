// CompareProducts.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './compareBody.css';
import ProductCard from '../../../../components/cards/productCard/ProductCard';
import ProgressBar from '../../../../components/progressBar/ProgressBar';

import PageText from '../../../../content/PagesText.json'
import { useSelector } from 'react-redux';
import Loading from '../../../../components/loading/Loading';
import SuccessModal from '../../../../components/successModal/SuccessModal';

const { compare } = PageText

const CompareBody = () => {
    const { lang, compareProducts } = useSelector((state) => state.baristica);
    const [loading, setLoading] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [successData, setSuccessData] = useState({})
    return (
        <div className="compareBody">
            <Loading status={loading} />
            <SuccessModal status={successModal} setStatus={setSuccessModal} data={successData} />
            <div className="container">
                <div className="compareBody-products">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    >
                        {
                            compareProducts && compareProducts.map((product, key) => (
                                <SwiperSlide>
                                    <ProductCard
                                        product={product}
                                        key={key}
                                        setSuccessData={setSuccessData}
                                        setSuccessModal={setSuccessModal}
                                        setLoading={setLoading}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                {/* acidity  */}
                <div className="compareBody-chars">
                    <h2 className="green800 f24">
                        {lang ? compare[lang]?.body?.acidityHeading : ''}
                    </h2>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    >
                        {
                            compareProducts && compareProducts.map((product, key) => (
                                <SwiperSlide>
                                    <ProgressBar percentage={product?.acidity} key={key} />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </div>
                {/* dencity  */}
                <div className="compareBody-chars">
                    <h2 className="green800 f24">
                        {lang ? compare[lang]?.body?.dencityHeading : ''}
                    </h2>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    >
                        {
                            compareProducts && compareProducts.map((product, key) => (
                                <SwiperSlide>
                                    <ProgressBar percentage={product?.viscosity} key={key} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
                {/* sweetness  */}
                <div className="compareBody-chars">
                    <h2 className="green800 f24">
                        {lang ? compare[lang]?.body?.sweetnessHeading : ''}

                    </h2>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    >
                        {
                            compareProducts && compareProducts.map((product, key) => (
                                <SwiperSlide>
                                    <ProgressBar percentage={product?.sweetness} key={key} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>

                {/* processing method  */}
                <div className="compareBody-chars">
                    <h2 className="green800 f24">
                        {lang ? compare[lang]?.body?.processingMethodHeading : ''}
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
                        {lang ? compare[lang]?.body?.roastingLevelHeading : ''}
                    </h2>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    >
                        {
                            compareProducts && compareProducts.map((product, key) => (
                                <SwiperSlide>
                                    <p className="green600 f16">
                                        {product.roastingLevel[lang] ? product.roastingLevel[lang] : '-'}
                                    </p>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>


                </div>
                {/* variety */}
                <div className="compareBody-chars">
                    <h2 className="green800 f24">
                        {lang ? compare[lang]?.body?.varietyHeading : ''}
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
                        {lang ? compare[lang]?.body?.growingHeightHeading : ''}
                    </h2>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    >
                        {
                            compareProducts && compareProducts.map((product, key) => (
                                <SwiperSlide>
                                    <p className="green600 f16">
                                        {product?.height ? product.height : '-'}
                                    </p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>


                </div>
                {/* Q-Grader Rating */}
                <div className="compareBody-chars">
                    <h2 className="green800 f24">
                        {lang ? compare[lang]?.body?.QGraderRatingHeading : ''}
                    </h2>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    >
                        {
                            compareProducts && compareProducts.map((product, key) => (
                                <SwiperSlide>
                                    <p className="green600 f16">
                                        {product?.qGrader ? product.qGrader : '-'}
                                    </p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>


                </div>
            </div>

        </div>
    );
};

export default CompareBody;
