import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Home.css"; // Import the updated CSS file for styling

function Home() {
  return (
    <div className="home-container container">
      <h1 className="text-center text-light mb-4 animate-fade-in">
        Welcome to Study Helper!
      </h1>
      <p className="text-center text-primary animate-fade-in animate-delay-1">
        Your one-stop solution for achieving your academic goals.
      </p>

      {/* Row of cards */}
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        {/* JEE Card */}
        <div className="col">
          <Link to="/resources/jee" className="text-decoration-none">
            <div className="card shadow-lg card-hover animate-fade-in-delay animate-delay-2">
              <img
                src="https://www.emathsworld.com/wp-content/uploads/2019/06/jeeadvanced.jpg"
                alt="JEE"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">JEE</h5>
              </div>
            </div>
          </Link>
        </div>

        {/* NEET Card */}
        <div className="col">
          <Link to="/resources/neet" className="text-decoration-none">
            <div className="card shadow-lg card-hover animate-fade-in-delay animate-delay-3">
              <img
                src="https://images.news18.com/ibnlive/uploads/2021/03/1614758688_neet2020-10-23_08_52_56_371446.jpg"
                alt="NEET"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">NEET</h5>
              </div>
            </div>
          </Link>
        </div>

        {/* UPSC Card */}
        <div className="col">
          <Link to="/resources/upsc" className="text-decoration-none">
            <div className="card shadow-lg card-hover animate-fade-in-delay animate-delay-4">
              <img
                src="https://i.cdn.newsbytesapp.com/images/l60420230928210332.jpeg"
                alt="UPSC"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">UPSC</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        {/* SSC Card */}
        <div className="col">
          <Link to="/coming-soon" className="text-decoration-none">
            <div className="card shadow-lg card-hover animate-fade-in-delay animate-delay-5">
              <img
                src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/06/ssc-1719232743.jpg"
                alt="SSC"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">SSC</h5>
              </div>
            </div>
          </Link>
        </div>

        {/* TOEFL Card */}
        <div className="col">
          <Link to="/coming-soon" className="text-decoration-none">
            <div className="card shadow-lg card-hover animate-fade-in-delay animate-delay-6">
              <img
                src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/04/25204738/TOEFL-iBT-Vs-TOEFL-PBT.jpg"
                alt="TOEFL"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">TOEFL</h5>
              </div>
            </div>
          </Link>
        </div>

        {/* More Card */}
        <div className="col">
          <Link to="/coming-soon" className="text-decoration-none">
            <div className="card shadow-lg card-hover animate-fade-in-delay animate-delay-6">
              <img
                src="https://akuprim.com/wp-content/uploads/2018/03/and-many-more.jpg"
                alt="More"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">More</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
