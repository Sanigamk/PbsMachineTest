import logo from "../../assets/logo/logo.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-header">
        <div className="hero-header-container">
          <div className="hero-header-container-contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                id="phone-solid"
                d="M5.153.747A1.246,1.246,0,0,0,3.672.022L.922.772A1.254,1.254,0,0,0,0,1.978a14,14,0,0,0,14,14,1.254,1.254,0,0,0,1.206-.922l.75-2.75a1.246,1.246,0,0,0-.725-1.481l-3-1.25a1.246,1.246,0,0,0-1.447.362L9.521,11.478A10.561,10.561,0,0,1,4.5,6.456L6.04,5.2A1.247,1.247,0,0,0,6.4,3.75l-1.25-3Z"
                transform="translate(0 0.023)"
                fill="#105689"
              />
            </svg>
            <h7>+91 9544 481 312</h7>
          </div>

          <div className="hero-header-container-contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="12"
              viewBox="0 0 16 12"
            >
              <path
                id="envelope-solid"
                d="M1.5,64a1.5,1.5,0,0,0-.9,2.7l6.8,5.1a1,1,0,0,0,1.2,0l6.8-5.1a1.5,1.5,0,0,0-.9-2.7ZM0,67.5V74a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V67.5L9.2,72.6a2,2,0,0,1-2.4,0Z"
                transform="translate(0 -64)"
                fill="#105689"
              />
            </svg>
            <h7>info@perfectbuildingsolutions.in</h7>
          </div>
        </div>
      </div>
      <div className="hero-content">
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
