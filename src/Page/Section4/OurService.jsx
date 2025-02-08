import { useState } from "react";

function OurService() {
  const services = [
    {
      id: 1,
      icon: (
        <svg className="services-item-icon" viewBox="0 0 24 24">
          <path d="M3 20h18v-2H3v2zm0-7h18v-2H3v2zm0-7h18V4H3v2z" />
        </svg>
      ),
      title: "Building Construction",
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      description:
        "Lorem ipsum dolor sit amet sed, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      icon: (
        <svg className="services-item-icon" viewBox="0 0 24 24">
          <path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z" />
        </svg>
      ),
      title: "Building Renovation",
      description:
        "Lorem ipsum dolor sit amet sed, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      icon: (
        <svg className="services-item-icon" viewBox="0 0 24 24">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m5 0h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M9 3v18M15 3v18" />
        </svg>
      ),
      title: "Architecture Design",
      description:
        "Lorem ipsum dolor sit amet sed, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      icon: (
        <svg className="services-item-icon" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
        </svg>
      ),
      title: "Projects Plannings",
      description:
        "Lorem ipsum dolor sit amet sed, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      icon: (
        <svg className="services-item-icon" viewBox="0 0 24 24">
          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z" />
        </svg>
      ),
      title: "3D Modelling",
      description:
        "Lorem ipsum dolor sit amet sed, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="services-section">
      <div className="services-header">
        <span className="services-header-subtitle">OUR SERVICES</span>
        <h2 className="services-header-title">Quality construction services</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`services-item`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={
              hoveredIndex === index
                ? {
                    backgroundImage: `url(${service?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {
                    backgroundImage: `url(${service?.image})`,
                    backgroundSize: "0%",
                    backgroundPosition: "center",
                  }
            }
          >
            {service.icon}
            <h3 className="services-item-title">{service.title}</h3>
            <p className="services-item-description">{service.description}</p>
          </div>
        ))}
        <div className="services-cta">
          <h3 className="services-cta-title">
            Making sure you have all the services you need for your new project.
          </h3>
          <button className="services-cta-button">
            VIEW ALL
            <span className="services-cta-button-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurService;
