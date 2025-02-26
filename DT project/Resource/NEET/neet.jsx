import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap for styling

function NEET() {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const cardBodyStyle = {
    flex: '1', // Makes sure the body stretches to fill available space
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-light mb-4">NEET Resources</h1>

      {/* Navigation links to the resources */}
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-lg" style={cardStyle}>
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">Handbook</h5> {/* Changed from Cheat Sheet to Handbook */}
              <p className="card-text">Access a collection of NEET handbooks.</p>
              <Link to="/coming-soon" className="btn btn-primary mt-auto">
                Go to Handbook
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg" style={cardStyle}>
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">Notes</h5>
              <p className="card-text">Browse through NEET notes for better understanding.</p>
              <Link to="/coming-soon" className="btn btn-primary mt-auto">
                Go to Notes
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg" style={cardStyle}>
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">Practice Problems</h5>
              <p className="card-text">Find a variety of NEET practice problems.</p>
              <Link to="/coming-soon" className="btn btn-primary mt-auto">
                Go to Practice Problems
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NEET;
