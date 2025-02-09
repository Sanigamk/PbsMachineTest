import logo from "../../assets/logo/logo.png";
import HeaderContent from "./HeaderContent";
import img1 from "../../assets/bnr-01/bnr-01.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-header">
        <HeaderContent />
      </div>
      <div className="hero-content">
        <div className="swiper-img">
          <img src={img1} alt="logo" />
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
