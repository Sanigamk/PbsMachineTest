function PbsFirst() {
  return (
    <section className="about">
      <div className="about-content">
        <h5>ABOUT US</h5>
        <h2>Perfect Building Solutions LLP</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vestibulum nisl ac mauris lobortis accumsan. Vivamus justo lectus,
          eleifend commodo nunc vitae, imperdiet feugiat arcu. Nam vel hendrerit
          mauris, sit amet venenatis diam.
        </p>
        <button className="about-content-read-more">
          READ MORE <span>&rarr;</span>
        </button>
      </div>
      <div className="about-image-container">
        <div className="about-image-container-overlay">pbs</div>
        <img src="your-image-path.jpg" alt="About Us Background" />
      </div>
    </section>
  );
}

export default PbsFirst;
