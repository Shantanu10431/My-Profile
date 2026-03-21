import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> academics
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E in Computer Science and Design Engineering</h4>
                <h5>Tontadarya College of Engineering, Gadag</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              CGPA: 6.95 | 2022 – 2026. Focus on core computer science subjects, design engineering principles, and data analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Pre-University Board</h4>
                <h5>BIPS PU College, Bagalkot</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Score: 55.5% | 2020 – 2022.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSLC</h4>
                <h5>Phoenix Eng Med School, Sulikeri</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Score: 66% | 2019 – 2020.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
