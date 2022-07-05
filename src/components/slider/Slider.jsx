import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThemeContext } from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@src/style.css";

import {Lazy, Pagination, Navigation, EffectCoverflow } from "swiper";

const Slider = () => {
  const colorSurface = useContext(ThemeContext).colors.surface;
  const points = {
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": colorSurface,
          "--swiper-pagination-color": colorSurface,
        }}
        lazy={true}
        breakpoints={points}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={10}
        loop={false}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Lazy, Pagination, Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            data-src="https://lh4.googleusercontent.com/Vz-yyGkTT3ZGV34QuwXlnZd2ccl1JdlzTO-2xeK2FZAw0a_OKoT-vyeuw1nllzwr_4ypdfIQbsJJ1hlr02SVvw=w16383"
            alt=""
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://lh6.googleusercontent.com/h4x5W9yrop_FeG2xdT7bYXMmcpTO_0x9qdjzZguoN9yekc4NqpOK16xP1PvTkUGklsan4qhiSBsQcfWYwibN-Nk=w16383"
            alt=""
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="
            https://lh6.googleusercontent.com/bNFUhe75aXXc7xEGQjM53kHZNTtg7GYBMeWRT7PrK6xdUUIDjY_5qB5cmiICByq90apHCpGC4bUYUvziei5dQhI=w16383"
            alt=""
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export { Slider };
