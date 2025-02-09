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

          <div className="hero-header-meadia">
            <button className="hero-header-meadia-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17.891"
                viewBox="0 0 18 17.891"
              >
                <path
                  id="facebook-brands"
                  d="M26,17a9,9,0,1,0-10.406,8.891V19.6H13.307V17h2.286V15.017a3.175,3.175,0,0,1,3.4-3.5,13.851,13.851,0,0,1,2.015.176v2.214H19.873a1.3,1.3,0,0,0-1.466,1.406V17h2.5l-.4,2.6h-2.1v6.289A9,9,0,0,0,26,17Z"
                  transform="translate(-8 -8)"
                  fill="#105689"
                />
              </svg>
            </button>
            <button className="hero-header-meadia-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17.996"
                viewBox="0 0 18 17.996"
              >
                <path
                  id="instagram-brands"
                  d="M8.927,36.209a4.614,4.614,0,1,0,4.614,4.614A4.607,4.607,0,0,0,8.927,36.209Zm0,7.614a3,3,0,1,1,3-3,3.005,3.005,0,0,1-3,3Zm5.879-7.8a1.076,1.076,0,1,1-1.076-1.076A1.074,1.074,0,0,1,14.806,36.02Zm3.056,1.092a5.326,5.326,0,0,0-1.454-3.771,5.361,5.361,0,0,0-3.771-1.454c-1.486-.084-5.939-.084-7.425,0a5.353,5.353,0,0,0-3.771,1.45A5.343,5.343,0,0,0-.012,37.109c-.084,1.486-.084,5.939,0,7.425A5.326,5.326,0,0,0,1.442,48.3a5.368,5.368,0,0,0,3.771,1.454c1.486.084,5.939.084,7.425,0A5.326,5.326,0,0,0,16.408,48.3a5.361,5.361,0,0,0,1.454-3.771C17.946,43.048,17.946,38.6,17.862,37.113Zm-1.919,9.015a3.037,3.037,0,0,1-1.711,1.711c-1.185.47-4,.361-5.3.361s-4.124.1-5.3-.361a3.037,3.037,0,0,1-1.711-1.711c-.47-1.185-.361-4-.361-5.3s-.1-4.124.361-5.3a3.037,3.037,0,0,1,1.711-1.711c1.185-.47,4-.361,5.3-.361s4.124-.1,5.3.361a3.037,3.037,0,0,1,1.711,1.711c.47,1.185.361,4,.361,5.3S16.412,44.947,15.942,46.128Z"
                  transform="translate(0.075 -31.825)"
                  fill="#105689"
                />
              </svg>
            </button>
            <button className="hero-header-meadia-social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12.656"
                viewBox="0 0 18 12.656"
              >
                <path
                  id="youtube-brands"
                  d="M32.557,65.98a2.262,2.262,0,0,0-1.591-1.6A53.449,53.449,0,0,0,23.933,64a53.449,53.449,0,0,0-7.032.379,2.262,2.262,0,0,0-1.591,1.6,25.466,25.466,0,0,0,0,8.721A2.228,2.228,0,0,0,16.9,76.278a53.449,53.449,0,0,0,7.032.379,53.449,53.449,0,0,0,7.032-.379A2.228,2.228,0,0,0,32.557,74.7a25.465,25.465,0,0,0,0-8.721ZM22.092,73.017V67.665l4.7,2.676Z"
                  transform="translate(-14.933 -64)"
                  fill="#105689"
                />
              </svg>
            </button>
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
