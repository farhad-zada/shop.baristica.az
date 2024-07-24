import React, { useRef, useState } from 'react';
import './galery.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


export default function Galery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='galery w-100'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <div className="galery-element_big border24">
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="galery-element_big border24">
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="galery-element_big border24">
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="galery-elements_small">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="galery-element_small border16">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="galery-element_small border16">
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="galery-element_small border16">
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>
            </div>

        </div>
    )
}
