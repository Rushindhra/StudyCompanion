import React from "react";

function PracticeProblems() {
  const practiceProblemsData = [
    {
      subject: "Math",
      problems: [
        { title: "Problem 1: Algebra", description: "Solve algebraic equations.", link: "https://drive.google.com/file/d/123DPsmoA2soR6DZH_lWfecA1lrGDQB_k/view?usp=drivesdk" },
        { title: "Problem 2: Calculus", description: "Differentiation and integration problems.", link: "https://aimstutorial.in/wp-content/uploads/2017/01/136306401-Calculus-for-iit-jee-pdf.pdf" },
        { title: "Problem 3: Geometry", description: "Geometry-based problems and theorems.", link: "https://www.upliftmaths.com/wp-content/uploads/2021/06/Om-Sharma-JEE-Advanced-Coordinate-Geometry-Book-Sample.pdf" },
      ],
    },
    {
      subject: "Physics",
      problems: [
        { title: "Problem 1: Mechanics", description: "Solve mechanics-based problems.", link: "https://www.physics.rutgers.edu/~shapiro/507/book.pdf" },
        { title: "Problem 2: Thermodynamics", description: "Thermodynamics-related problems.", link: "https://ncert.nic.in/textbook/pdf/keph204.pdf" },
        { title: "Problem 3: Electromagnetism", description: "Electromagnetic theory practice problems.", link: "https://drive.google.com/file/d/11mpLis4tKzKW0GvFl6bMXNUP182ZRkkV/view?usp=drivesdk" },
      ],
    },
    {
      subject: "Chemistry",
      problems: [
        { title: "Problem 1: Organic Chemistry", description: "Solve organic chemistry problems.", link: "https://www2.chemistry.msu.edu/faculty/reusch/virttxtjml/intro1.htm" },
        { title: "Problem 2: Physical Chemistry", description: "Practice physical chemistry calculations.", link: "https://tech.chemistrydocs.com/Books/Physical/Physical-chemistry-by-R-L-Madan.pdf" },
        { title: "Problem 3: Inorganic Chemistry", description: "Inorganic chemistry reaction problems.", link: "https://celqusb.files.wordpress.com/2017/12/inorganic-chemistry-g-l-miessler-2014.pdf" },
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center text-light mb-4">JEE Practice Problems</h1>
      
      {practiceProblemsData.map((subject, index) => (
        <div key={index} className="subject-section mb-4">
          <h3 className="text-center text-light mb-3">{subject.subject} Practice Problems</h3>
          <div className="row justify-content-center">
            {subject.problems.map((problem, problemIndex) => (
              <div key={problemIndex} className="col-md-4 mb-3">
                <div className="card shadow-lg border-light rounded">
                  <div className="card-body p-4">
                    <h5 className="card-title text-dark">{problem.title}</h5>
                    <p className="card-text text-muted">{problem.description}</p>
                    <a
                      href={problem.link}
                      className="btn btn-primary btn-lg btn-block mt-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     View Practice Problems
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PracticeProblems;
