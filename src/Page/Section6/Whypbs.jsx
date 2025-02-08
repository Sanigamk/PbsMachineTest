function Whypbs() {
  const services = [
    {
      id: 1,
      title: "We've expert & certified staff",
      checked: true,
    },
    {
      id: 2,
      title: "We only provide quality services",
      checked: true,
    },
    {
      id: 3,
      title: "We offer you free estimates",
      checked: true,
    },
    {
      id: 4,
      title: "We provide infrastructure & equipment's",
      checked: true,
    },
  ];
  return (
    <div className="building-services">
      <div className="building-services-content">
        <div className="building-services-content-subtitle">WHY US?</div>
        <h2 className="building-services-content-title">
          We building the best
        </h2>
        <p className="building-services-content-description">
          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua ut enim ad.
        </p>
        <div className="building-services-content-services-list">
          {services.map((service) => (
            <div
              key={service.id}
              className="building-services-content-services-item"
            >
              <svg
                className="building-services-content-services-item-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="building-services-content-services-item-text">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="building-services-image">
        <img
          src="/construction-site.jpg"
          alt="Construction site with cranes and building structure"
        />
      </div>
    </div>
  );
}

export default Whypbs;
