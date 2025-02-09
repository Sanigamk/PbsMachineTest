import img1 from "../../assets/project-01/project-01.png";
import img2 from "../../assets/project-02/project-01.png";
import img3 from "../../assets/project-03/project-03.png";
import SwiperItem from "./SwiperItem";

export default function SectionFive() {
  return (
    <div className="section-five">
      <div className="section-five-blue-box">
        <h4 className="small-title">
          <span>AT A GLANCE</span>
        </h4>
        <h2 style={{ color: "white" }}>Your Trusted Construction Partner</h2>
      </div>
      <div className="section-five-content">
        <div className="section-five-content-top">
          <button className="about-content-read-more">
            READ MORE <span>&rarr;</span>
          </button>
        </div>
        <div className="section-five-content-body">
          <SwiperItem img={img1} location="Kozhikkod" title="Eiffel Complex" />
          <SwiperItem
            img={img2}
            location="Eranakulam"
            title="Electronic City"
          />
          <SwiperItem img={img3} location="Wayanad" title="Cabin wood" />
        </div>
      </div>
    </div>
  );
}
