import { MdArrowOutward } from "react-icons/md";
import image1 from "../../assets/01@2x.png";
import image2 from "../../assets/02@2x.png";
import image3 from "../../assets/03@2x.png";
import image4 from "../../assets/04@2x.png";
import image5 from "../../assets/05@2x.png";
import image6 from "../../assets/06@2x.png";
import logo from "../../assets/logosesame.png";
import location from "../../assets/house-solid.svg";
import phone from "../../assets/phone-solid.svg";
import email from "../../assets/envelope-solid.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-header">
        <div className="footer-header-bg"></div>
        <div className="footer-header-content">
          <p>For all your construction needs!</p>
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
      </div>
      <footer className="footer">
        {/* About Us Section */}
        <div className="footer-section footer-section-about-us">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare
            elit at orci luctus, at aliquet erat faucibus. Aliquam mollis dolor
            eget felis elementum varius. Phasellus quis cursus leo. Nunc mauris
            magna, molestie vel nisi bibendum, facilisis rhoncus ante.
          </p>
          <a href="#about" className="footer-read-more">
            Read More
          </a>
        </div>

        {/* Useful Links Section */}
        <div className="footer-section footer-section-useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#our-team">Our Team</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Connect Us Section */}
        <div className="footer-section footer-section-connect-us">
          <h4>Connect Us</h4>
          <p>
            <img src={location} alt="location" width={20} /> Akshya Nagar 1st
            Block 1st Cross, Ramamurthy Nagar, Calicut - 560016
          </p>
          <p>
            <img src={phone} alt="location" width={20} />
            <a href="tel:+919544491312">+91 9544 491 312</a>
          </p>
          <p>
            <img src={email} alt="location" width={20} />{" "}
            <a href="mailto:info@perfectbuildingsolutions.in">
              info@perfectbuildingsolutions.in
            </a>
          </p>
        </div>

        {/* Gallery Section */}
        <div className="footer-section footer-section-gallery">
          <h4>Gallery</h4>
          <div className="footer-gallery-images">
            <img src={image1} alt="Gallery Image 1" />
            <img src={image2} alt="Gallery Image 2" />
            <img src={image3} alt="Gallery Image 3" />
            <img src={image4} alt="Gallery Image 4" />
            <img src={image5} alt="Gallery Image 5" />
            <img src={image6} alt="Gallery Image 6" />
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p className="footer-bottom-copyright">
          Copyright © 2024 Perfect Building Solutions. All rights reserved.
        </p>
        <div className="footer-bottom-develop">
          <p>Website developed by</p> <img src={logo} alt="sesame" width={70} />
        </div>
      </div>
    </>
  );
};

export default Footer;
