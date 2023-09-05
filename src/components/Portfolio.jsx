import React from "react";

function Portfolio() {
  return (
    <div>
      <h2>My Portfolio</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="../assets/weather-dashboard.png" className="card-img-top" alt="Weather Dashboard" />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">Displays current and future weather conditions</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        {/* Add more project cards or thumbnails */}
      </div>
    </div>
  );
}
export default Portfolio;
