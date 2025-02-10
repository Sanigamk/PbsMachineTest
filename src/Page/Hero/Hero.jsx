import logo from "../../assets/logo/logo.png";
import HeaderContent from "./HeaderContent";
import img1 from "../../assets/bnr-01/bnr-01.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-header">
        <HeaderContent />
      </div>
      <div className="hero-content">
        <div className="swiper-img">
          <Swiper
            slidesPerView={1}
            loop={true}
            modules={[Navigation]}
            className="swiper"
            navigation
          >
            <SwiperSlide>
              <img src={img1} alt="logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="logo" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hero-content-text">
          BUILDING THE FOUNDATION FOR A BETTER TOMORROW
        </div>
      </div>
    </div>
  );
}
