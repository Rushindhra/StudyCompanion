import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home1.jsx";
import Pathway from "./Pathway.jsx";
import YouTubeResources from "./YouTubeResources.jsx";
import ComingSoon from "./comingsoon.jsx";
import JEE from "./Resource/JEE/jee.jsx";
import Handbook from "./Resource/JEE/Handbook.jsx";
import Notes from "./Resource/JEE/Notes.jsx";
import PracticeProblems from "./Resource/JEE/PracticeProblems.jsx";
import NEET from "./Resource/NEET/neet.jsx";
import UPSC from "./Resource/UPSC/UPSC.jsx";
// import './Main.css'; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import { CSSTransition, TransitionGroup } from "react-transition-group"; 
import { PiStudent } from "react-icons/pi";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Animated Route Wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/resources/jee" element={<JEE />} />
          <Route path="/resources/jee/handbook" element={<Handbook />} />
          <Route path="/resources/jee/notes" element={<Notes />} />
          <Route path="/resources/jee/practiceproblems" element={<PracticeProblems />} />
          <Route path="/resources/neet" element={<NEET />} />
          <Route path="/resources/upsc" element={<UPSC />} />
          <Route path="/pathway" element={<Pathway />} />
          <Route path="/youtube" element={<YouTubeResources />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function Main() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div className="container">
    <Link className="navbar-brand fw-bold text-primary" to="/">
    <PiStudent />Study Companion
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link text-primary" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to="/pathway">
            Personalized Pathways
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to="/youtube">
            YouTube Links
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        {/* Animated Page Content */}
        <div className="container mt-4">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default Main;
