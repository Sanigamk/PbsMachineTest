import pbs from "../../assets/intro-text-tmb/intro-text-tmb.png";

function PbsFirst() {
  return (
    <section className="about">
      <div className="about-content">
        <h4 className="small-title" style={{ marginBottom: "1rem" }}>
          <span>AT A GLANCE</span>
        </h4>
        <h2>Perfect Building Solutions LLP</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vestibulum nisl ac mauris lobortis accumsan. Vivamus justo lectus,
          eleifend commodo nunc vitae, imperdiet feugiat arcu. Nam vel hendrerit
          mauris, sit amet venenatis diam.
        </p>
        <button className="footer-header-button">
          READ MORE{" "}
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
      <div className="about-image-container">
        <img src={pbs} alt="About Us Background" />
      </div>
    </section>
  );
}

export default PbsFirst;
