import { useState } from "react";

function OurService() {
  const services = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55.974"
          height="56.532"
          viewBox="0 0 55.974 56.532"
        >
          <g id="construction" transform="translate(-14.408 -12)">
            <path
              id="Path_5"
              data-name="Path 5"
              d="M59.169,32.3h8.446V31.1H59.169Zm10.055,1.854H57.561A1.161,1.161,0,0,0,56.4,35.308V68.532h3.4V58.9a1.721,1.721,0,0,1,1.8-1.622h3.578a1.722,1.722,0,0,1,1.8,1.622v9.63h2.474a.929.929,0,0,0,.927-.927v-32.3a1.16,1.16,0,0,0-1.158-1.158ZM62.466,50.877a.464.464,0,0,1-.463.463h-2.37a.464.464,0,0,1-.463-.463V48.817a.464.464,0,0,1,.463-.463H62a.464.464,0,0,1,.463.463Zm0-4.841A.464.464,0,0,1,62,46.5h-2.37a.464.464,0,0,1-.463-.463V43.975a.464.464,0,0,1,.463-.463H62a.464.464,0,0,1,.463.463Zm0-4.841a.464.464,0,0,1-.463.463h-2.37a.464.464,0,0,1-.463-.463V39.134a.464.464,0,0,1,.463-.463H62a.464.464,0,0,1,.463.463Zm5.15,9.682a.464.464,0,0,1-.463.463h-2.37a.464.464,0,0,1-.463-.463V48.817a.464.464,0,0,1,.463-.463h2.37a.464.464,0,0,1,.463.463Zm0-4.841a.464.464,0,0,1-.463.463h-2.37a.464.464,0,0,1-.463-.463V43.975a.464.464,0,0,1,.463-.463h2.37a.464.464,0,0,1,.463.463Zm0-4.841a.464.464,0,0,1-.463.463h-2.37a.464.464,0,0,1-.463-.463V39.134a.464.464,0,0,1,.463-.463h2.37a.464.464,0,0,1,.463.463ZM44.263,44.326h8.446V43.132H44.263Zm9.373,1.853H43.581a1.161,1.161,0,0,0-1.158,1.158V67.374a1.161,1.161,0,0,0,1.158,1.158H54.549V46.179ZM47.559,63.227a.464.464,0,0,1-.463.463h-2.37a.464.464,0,0,1-.463-.463V61.166a.464.464,0,0,1,.463-.463H47.1a.464.464,0,0,1,.463.463Zm0-4.841a.464.464,0,0,1-.463.463h-2.37a.464.464,0,0,1-.463-.463V56.325a.464.464,0,0,1,.463-.463H47.1a.464.464,0,0,1,.463.463Zm0-4.841a.464.464,0,0,1-.463.463h-2.37a.464.464,0,0,1-.463-.463V51.484a.464.464,0,0,1,.463-.463H47.1a.464.464,0,0,1,.463.463Zm5.15,9.682a.464.464,0,0,1-.463.463h-2.37a.464.464,0,0,1-.463-.463V61.166a.464.464,0,0,1,.463-.463h2.37a.464.464,0,0,1,.463.463Zm0-4.841a.464.464,0,0,1-.463.463h-2.37a.464.464,0,0,1-.463-.463V56.325a.464.464,0,0,1,.463-.463h2.37a.464.464,0,0,1,.463.463Zm0-4.841a.464.464,0,0,1-.463.463h-2.37a.464.464,0,0,1-.463-.463V51.484a.464.464,0,0,1,.463-.463h2.37a.464.464,0,0,1,.463.463ZM22.24,25.3l-.518-.758V25.3Zm34.009.217L51.67,21.693a.924.924,0,0,0-.634-.251H49.591l-16.9-8.132v-.383A.927.927,0,0,0,31.762,12H28.6a.926.926,0,0,0-.894.687l-.246.91-8.741,7.046H15.181a.775.775,0,0,0-.773.773v5.768a.775.775,0,0,0,.773.773h5.768a.775.775,0,0,0,.773-.773v-.025h2.789V64.174H22.077a.7.7,0,0,0-.7.7v2.968a.7.7,0,0,0,.7.7H35.123a.7.7,0,0,0,.7-.7V64.869a.7.7,0,0,0-.7-.7H32.689V37.791H42.07a.58.58,0,0,0,.579-.579V32.2l-2.577-5.038h9.86v7.284H48.741a.464.464,0,0,0-.463.463v4.236a.464.464,0,0,0,.463.463h4.236a.464.464,0,0,0,.463-.463V34.906a.464.464,0,0,0-.463-.463H51.786V27.159l3.87,0a.925.925,0,0,0,.594-1.635ZM29.308,13.854h1.527v7.588H27.257Zm-7.866,6.969,5.2-4.189-1.3,4.808H21.722v-.025A.772.772,0,0,0,21.442,20.822Zm2.684,3.965L23.106,23.3h2.513Zm3.73-1.109L29.483,25.3H26.23Zm-1.492,4.79,4.086,4.086-4.086,4.086ZM30.451,45.2l-4.086,4.087V41.116Zm-4.086,8.561,4.086,4.087-4.086,4.086Zm4.47,10.41H26.748l4.087-4.087Zm0-8.561-4.087-4.086,4.087-4.087Zm0-12.647-4.087-4.086,4.087-4.086Zm0-12.647-3.16-3.16h3.16Zm.885-5.4L30.094,23.3h3.252ZM39.869,35.01H34.542v-6H37.9l1.972,3.855Zm-5.912-9.705,1.626-1.626,1.626,1.626Zm5.489-.384L37.82,23.3h3.252Zm2.237.384,1.626-1.626,1.626,1.626Zm-9-3.863V15.358l12.645,6.084Zm14.485,3.48L45.547,23.3H48.8Zm2.237.384,1.683-1.683,2.012,1.683Z"
              fill="#105689"
              fill-rule="evenodd"
            />
          </g>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46.561"
          height="46.561"
          viewBox="0 0 46.561 46.561"
        >
          <g id="architecture" transform="translate(0 0)">
            <path
              id="Path_7"
              data-name="Path 7"
              d="M42.468,12h4.092V2.851a1.364,1.364,0,0,0-2.329-.965L1.887,44.231a1.364,1.364,0,0,0,.965,2.329H12V42.923a1.364,1.364,0,1,1,2.728,0V46.56H18.37V42.923a1.364,1.364,0,1,1,2.728,0V46.56h3.638V42.923a1.364,1.364,0,1,1,2.728,0V46.56H31.1V42.923a1.364,1.364,0,0,1,2.728,0V46.56h3.638V42.923a1.364,1.364,0,1,1,2.728,0V46.56h5A1.365,1.365,0,0,0,46.561,45.2v-5H42.923a1.364,1.364,0,1,1,0-2.728h3.638V33.829H42.923a1.364,1.364,0,1,1,0-2.728h3.638V27.463H42.923a1.364,1.364,0,1,1,0-2.728h3.638V21.1H42.923a1.364,1.364,0,1,1,0-2.728h3.638V14.732H42.468a1.364,1.364,0,0,1,0-2.728ZM38.376,37.012a1.365,1.365,0,0,1-1.364,1.364h-14.4a1.364,1.364,0,0,1-.965-2.329l14.4-14.4a1.364,1.364,0,0,1,2.329.965ZM4.209,26.41,10,32.2l-3.81,3.809a1.364,1.364,0,0,1-1.929,0L.4,32.148a1.364,1.364,0,0,1,0-1.929ZM31.7,10.123c.127,0,.256,0,.386-.011L11.926,30.269,6.138,24.481,26.029,4.59a5.6,5.6,0,0,0,1.6,3.932A5.626,5.626,0,0,0,31.7,10.123Zm4.58-8.175L33.944,6.863c-1.667.76-3.4.72-4.386-.27A3.693,3.693,0,0,1,29.1,2.674L34.457.131a1.364,1.364,0,0,1,1.818,1.817Z"
              transform="translate(0 0)"
              fill="#105689"
            />
          </g>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46.561"
          height="46.561"
          viewBox="0 0 46.561 46.561"
        >
          <g id="architecture" transform="translate(0 0)">
            <path
              id="Path_7"
              data-name="Path 7"
              d="M42.468,12h4.092V2.851a1.364,1.364,0,0,0-2.329-.965L1.887,44.231a1.364,1.364,0,0,0,.965,2.329H12V42.923a1.364,1.364,0,1,1,2.728,0V46.56H18.37V42.923a1.364,1.364,0,1,1,2.728,0V46.56h3.638V42.923a1.364,1.364,0,1,1,2.728,0V46.56H31.1V42.923a1.364,1.364,0,0,1,2.728,0V46.56h3.638V42.923a1.364,1.364,0,1,1,2.728,0V46.56h5A1.365,1.365,0,0,0,46.561,45.2v-5H42.923a1.364,1.364,0,1,1,0-2.728h3.638V33.829H42.923a1.364,1.364,0,1,1,0-2.728h3.638V27.463H42.923a1.364,1.364,0,1,1,0-2.728h3.638V21.1H42.923a1.364,1.364,0,1,1,0-2.728h3.638V14.732H42.468a1.364,1.364,0,0,1,0-2.728ZM38.376,37.012a1.365,1.365,0,0,1-1.364,1.364h-14.4a1.364,1.364,0,0,1-.965-2.329l14.4-14.4a1.364,1.364,0,0,1,2.329.965ZM4.209,26.41,10,32.2l-3.81,3.809a1.364,1.364,0,0,1-1.929,0L.4,32.148a1.364,1.364,0,0,1,0-1.929ZM31.7,10.123c.127,0,.256,0,.386-.011L11.926,30.269,6.138,24.481,26.029,4.59a5.6,5.6,0,0,0,1.6,3.932A5.626,5.626,0,0,0,31.7,10.123Zm4.58-8.175L33.944,6.863c-1.667.76-3.4.72-4.386-.27A3.693,3.693,0,0,1,29.1,2.674L34.457.131a1.364,1.364,0,0,1,1.818,1.817Z"
              transform="translate(0 0)"
              fill="#105689"
            />
          </g>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45.813"
          height="45.049"
          viewBox="0 0 45.813 45.049"
        >
          <g id="planning" transform="translate(-2 -3)">
            <path
              id="Path_8"
              data-name="Path 8"
              d="M46.286,27.906H42.468v3.054L38.65,27.143l-9.163,9.163V48.522H36.36V38.6h4.581v9.926h6.872V36.305l-1.527-1.527ZM5.054,48.522H8.108V8.054H5.054A3.054,3.054,0,0,1,2,5V45.468A3.054,3.054,0,0,0,5.054,48.522Z"
              transform="translate(0 -0.473)"
              fill="#105689"
            />
            <path
              id="Path_9"
              data-name="Path 9"
              d="M5.527,6.054h4.581V41.177H28.434V35.2l10.69-10.69L41.414,26.8v-.894h5.345V3H5.527a1.527,1.527,0,0,0,0,3.054ZM16.98,38.887H15.453V37.36H16.98Zm3.054,0H18.507V37.36h1.527Zm22.906-33.6V21.325H33.015V19.035h3.054v-.764a3.825,3.825,0,0,0-3.054-3.741V5.291ZM13.926,15.98h6.108V14.453H13.926V5.291h9.163v9.163h-.764V15.98h2.291V5.291h6.872V15.98h.764a2.3,2.3,0,0,1,2.161,1.527H31.488v3.818H26.906V32.778H21.562V29.724a3.053,3.053,0,0,0-3.054,3.054H13.926ZM12.4,37.36h1.527v1.527H12.4Z"
              transform="translate(-0.473)"
              fill="#105689"
            />
          </g>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48.49"
          height="48.49"
          viewBox="0 0 48.49 48.49"
        >
          <g
            id="_3d-modelling"
            data-name="3d-modelling"
            transform="translate(-2 -2)"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M47.892,2H4.6A2.6,2.6,0,0,0,2,4.6V35.77a2.6,2.6,0,0,0,2.6,2.6H47.892a2.6,2.6,0,0,0,2.6-2.6V4.6a2.6,2.6,0,0,0-2.6-2.6Zm-.866,3.464V31.44H5.464V5.464ZM34.9,48.758a1.732,1.732,0,0,1-1.732,1.732H19.318a1.732,1.732,0,1,1,0-3.464H21.05V40.965H31.44v6.061h1.732A1.732,1.732,0,0,1,34.9,48.758Z"
              transform="translate(0 0)"
              fill="#105689"
            />
            <path
              id="Path_11"
              data-name="Path 11"
              d="M12.056,8.767l8.172-2.724a.509.509,0,0,1,.329,0l8.172,2.724-8.339,2.78Zm7.036,15.839-8.737-2.913A.52.52,0,0,1,10,21.2V10.822l9.092,3.031ZM30.781,10.822V21.2a.521.521,0,0,1-.355.494l-8.737,2.911V13.853Z"
              transform="translate(5.854 2.938)"
              fill="#105689"
            />
          </g>
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
            <div className="services-item-icon">{service.icon}</div>
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
