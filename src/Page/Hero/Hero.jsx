import logo from "../../assets/logo/logo.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-header"></div>
      <div className="hero-content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hero-content-text">
          BUILD THE FOUNDATION OF BETTER TOMMARROW
        </div>
      </div>
    </div>
  );
}
