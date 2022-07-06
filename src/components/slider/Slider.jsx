import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThemeContext } from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@src/style.css";

import { Lazy, Pagination, Navigation, EffectCoverflow } from "swiper";

const Slider = () => {
  const colorSurface = useContext(ThemeContext).colors.surface;
  const points = {
    768: {
      slidesPerView: "auto",
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
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
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
            data-src="https://lh4.googleusercontent.com/OFI9fDHbJ7_gguLZW9XUwUOUtqaHpSAMLDDdi3GjPrMkq9qaTj-PWj-ib5ZKO0CsGkRt45owKjUBx0lKIYJt4WE=w16383"
            alt=""
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://lh4.googleusercontent.com/PwRfKpzr6YJr1UwIAQzvOu4D5wDorojKXZVg6hPE_G8k21Ti-eOBREF2U_VarhP8ZQQGVU1GCYHWRqTy0MWyOg=w16383"
            alt=""
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="
            https://lh4.googleusercontent.com/dip2NjxZc0AoIJsgg_Gl3NDsZwh_Ouy0UXmtXJGVZ4SaDlMGsQ-kJCixP46TG5QdK37CmjrZaKDWo036Rrg-zzA=w16383"
            alt=""
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="
            https://lh4.googleusercontent.com/4FI7PrYM_BgMjoV7_SKPMzZLwyKlb7pcBuNOr1N7FvhLug1TEMhKB_dnODJEYakIgfaU2fPRAkR72dbLFW9ZX3k=w16383"
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
