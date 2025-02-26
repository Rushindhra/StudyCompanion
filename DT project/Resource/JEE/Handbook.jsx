import React from "react";

function Handbook() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-light">JEE Handbooks</h1>
      
      {/* Cards for each subject */}
      <div className="row mt-4">
        {/* Math Card */}
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Mathematics</h5>
              <p className="card-text">Access JEE Mathematics Handbook.</p>
              <a
                href="https://drive.google.com/file/d/11-t54afDfB4hlYfwFSLby-WAjqxegNo2/view?usp=drivesdk" // Replace with your Drive link
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Mathematics Handbook
              </a>
            </div>
          </div>
        </div>

        {/* Physics Card */}
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Physics</h5>
              <p className="card-text">Access JEE Physics Handbook.</p>
              <a
                href="https://drive.google.com/file/d/10vo2_g83TVtWZwSIV5UFMWsfyBrqgcHR/view?usp=drivesdk" // Replace with your Drive link
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Physics Handbook
              </a>
            </div>
          </div>
        </div>

        {/* Chemistry Card */}
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Chemistry</h5>
              <p className="card-text">Access JEE Chemistry Handbook.</p>
              <a
                href="https://drive.google.com/file/d/113e9Goo3-JXUbLY_Luhh2TQPVHGOKwVT/view?usp=drivesdk" // Replace with your Drive link
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Chemistry Handbook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Handbook;
