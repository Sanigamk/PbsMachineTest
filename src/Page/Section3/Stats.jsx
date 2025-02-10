export default function Stats() {
  return (
    <div className="stats">
      <div className="stats-img-container">
        <div className="play-button">
          <div className="play-icon"></div>
        </div>
      </div>
      <div className="stats-content">
        <div className="stats-content-header">
          <h4 className="small-title" style={{ marginBottom: "0.5rem" }}>
            <span>AT A GLANCE</span>
            <div></div>
          </h4>
          <h2 className="prime-title">Building with excellence</h2>
        </div>
        <div className="stats-content-body">
          <div className="stats-content-body-item">
            <h4>28+ </h4>
            <div className="line"></div>
            <p>Completed Projects</p>
          </div>
          <div className="stats-content-body-item">
            <h4>15+</h4>
            <div className="line"></div>
            <p>Years of Experience</p>
          </div>
          <div className="stats-content-body-item">
            <h4>5+</h4>
            <div className="line"></div>
            <p>Regional Offices</p>
          </div>
          <div className="stats-content-body-item">
            <h4>200+</h4>
            <div className="line"></div>
            <p>Team Members</p>
          </div>
        </div>
      </div>
    </div>
  );
}
