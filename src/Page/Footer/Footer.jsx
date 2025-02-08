const Footer = () => {
  return (
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
          Akshya Nagar 1st Block 1st Cross, Ramamurthy Nagar, Calicut - 560016
        </p>
        <p>
          <a href="tel:+919544491312">+91 9544 491 312</a>
        </p>
        <p>
          <a href="mailto:info@perfectbuildingsolutions.in">
            info@perfectbuildingsolutions.in
          </a>
        </p>
      </div>

      {/* Gallery Section */}
      <div className="footer-section footer-section-gallery">
        <h4>Gallery</h4>
        <div className="footer-gallery-images">
          <img src="image1.jpg" alt="Gallery Image 1" />
          <img src="image2.jpg" alt="Gallery Image 2" />
          <img src="image3.jpg" alt="Gallery Image 3" />
          <img src="image4.jpg" alt="Gallery Image 4" />
          <img src="image3.jpg" alt="Gallery Image 5" />
          <img src="image4.jpg" alt="Gallery Image 6" />
          <img src="image3.jpg" alt="Gallery Image 7" />
          <img src="image4.jpg" alt="Gallery Image 8" />
          <img src="image4.jpg" alt="Gallery Image 9" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
