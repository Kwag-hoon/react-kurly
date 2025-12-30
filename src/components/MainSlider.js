import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import '../css/MainSlider.css';

import slide01 from '../images/slide01.jpg';
import slide02 from '../images/slide02.jpg';
import slide03 from '../images/slide03.jpg';
import slide04 from '../images/slide04.jpg';
import slide05 from '../images/slide05.jpg';
import slide06 from '../images/slide06.jpg';
import slide07 from '../images/slide07.jpg';
import slide08 from '../images/slide08.jpg';
import slide09 from '../images/slide09.jpg';
import slide10 from '../images/slide10.jpg';
import slide11 from '../images/slide11.jpg';
import slide12 from '../images/slide12.jpg';
import arrowIcon from '../images/mainslidearrow.svg';

function MainSlider() {
  const slides = [
    slide01,
    slide02,
    slide03,
    slide04,
    slide05,
    slide06,
    slide07,
    slide08,
    slide09,
    slide10,
    slide11,
    slide12,
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="main-slider">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
        className="main-swiper"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`슬라이드${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className="main-slider-nav main-slider-prev"
        ref={prevRef}
        aria-label="이전 슬라이드"
      >
        <img src={arrowIcon} alt="" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="main-slider-nav main-slider-next"
        ref={nextRef}
        aria-label="다음 슬라이드"
      >
        <img src={arrowIcon} alt="" aria-hidden="true" />
      </button>

      <div className="main-slider-pagination" aria-label="슬라이드 페이지네이션">
        <span className="main-slider-current">{activeIndex}</span>
        <span className="main-slider-sep">|</span>
        <span className="main-slider-total">{slides.length}</span>
        <span className="main-slider-viewall">전체보기 &gt;</span>
      </div>
    </div>
  );
}

export default MainSlider;
