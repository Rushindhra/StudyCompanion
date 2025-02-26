import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function JEE() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-light mb-4">JEE Resources</h1>

      {/* Navigation links to the resources */}
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-lg d-flex flex-column">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Handbook</h5>
              <p className="card-text">Access a collection of JEE Handbooks.</p>
              <Link to="/resources/jee/handbook" className="btn btn-primary mt-auto">
                Go to Handbook
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg d-flex flex-column">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Notes</h5>
              <p className="card-text">JEE notes for better understanding.</p>
              <Link to="/resources/jee/notes" className="btn btn-primary mt-auto">
                Go to Notes
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg d-flex flex-column">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Practice Problems</h5>
              <p className="card-text">Find a variety of JEE practice problems.</p>
              <Link to="/resources/jee/practiceproblems" className="btn btn-primary mt-auto">
                Go to Practice Problems
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JEE;
