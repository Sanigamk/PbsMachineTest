import icon1 from "./../../assets/commercial.png";
import icon2 from "./../../assets/residential.svg";
import icon3 from "./../../assets/civil-infrastructure.svg";
function Grid() {
  const services = [
    {
      icon: icon1,
      title: "Commercial",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
    },
    {
      icon: icon2,
      title: "Residential",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
    },
    {
      icon: icon3,
      title: "Civil Infrastructure",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.",
    },
  ];
  return (
    <div className="service-grid">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="icon-container">
            <img src={service.icon} alt={`${service.title} icon`} />
          </div>
          <h3>{service.title}</h3>
          <div className="yellow-line"></div>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Grid;
