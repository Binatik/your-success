import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@src/style.css";

import { Lazy, Pagination, Navigation, EffectCoverflow } from "swiper";

const Slider = () => {
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
            data-src="https://sun9-38.userapi.com/impf/hmFT5EVBUF-O7yUTBz_FQrri-ZZMEHCUP7tFYg/cuDYiZNcm9k.jpg?size=1280x1280&quality=95&sign=4cb7f57d837b09321c63cca46f2294fd&type=album"
            alt=""
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://sun9-34.userapi.com/impf/vpGDwBafRX8HBigTECppj2Wys9U-UBfVnYYzlg/1CZtxGtxfgs.jpg?size=1280x1280&quality=95&sign=e8830b595213e716d130f3948ce62010&type=album"
            alt=""
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="
            https://sun9-50.userapi.com/impf/lCLXI91OkzhPnOgO6uLylA7mckhdQ_rx1dsnig/AC0PRfh5GFY.jpg?size=1280x1280&quality=96&sign=405474002a54bd34b9704f4fd058be7c&type=album"
            alt=""
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="
            https://sun9-32.userapi.com/impf/Bxn90gRbW-k6ctFJr6PmEvtVj0Zwyj-ifxAGrA/VZbCHDtg494.jpg?size=1280x1280&quality=96&sign=5ef4f09cd700975fab645526dfce536a&type=album"
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
