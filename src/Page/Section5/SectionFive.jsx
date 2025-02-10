import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/project-01/project-01.png";
import img2 from "../../assets/project-02/project-01.png";
import img3 from "../../assets/project-03/project-03.png";
import SwiperItem from "./SwiperItem";

export default function SectionFive() {
  return (
    <div className="section-five">
      <div className="section-five-blue-box">
        <h4 className="small-title">
          <span>OUR PROJECTS</span>
        </h4>
        <h2 style={{ color: "white" }}>Your Trusted Construction Partner</h2>
      </div>
      <div className="section-five-content">
        <div className="section-five-content-top">
          <button className="footer-header-button">
            CONTACT US{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12.029"
                viewBox="0 0 12 12.029"
              >
                <path
                  id="arrow-up-right"
                  d="M12,95.855v8.374a.6.6,0,1,1-1.2,0V97.306l-9.776,9.776a.6.6,0,1,1-.848-.848l9.784-9.784L3,96.43a.6.6,0,0,1,0-1.2l8.4.025A.6.6,0,0,1,12,95.855Z"
                  transform="translate(-0.003 -95.23)"
                  fill="#dfa01e"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="section-five-content-body">
          <Swiper
            modules={[Navigation]}
            spaceBetween={80}
            slidesPerView={3}
            navigation={true}
            className="swiper-two"
          >
            <SwiperSlide>
              <SwiperItem
                img={img1}
                location="Kozhikkod"
                title="Eiffel Complex"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem img={img3} location="Wayanad" title="Cabin wood" />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem
                img={img2}
                location="Eranakulam"
                title="Electronic City"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem
                img={img2}
                location="Eranakulam"
                title="Electronic City"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
