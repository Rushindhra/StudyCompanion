import React, { useState } from "react";

function Notes() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const notesData = [
    {
      subject: "Maths",
      chapters: [
        { title: "Chapter 1: Relation and functions", description: "Master relation and functions with concise notes.", link: "https://www.nios.ac.in/media/documents/SrSec311NEW/311_Maths_Eng/311_Maths_Eng_Lesson23.pdf" },
        { title: "Chapter 2: Matrices", description: "Detailed explanations of Matrices concepts.", link: "https://autotutor.com.au/_formula_sheets/Maths%20Notes%20for%20Class%2012%20chapter%203.%20Matrices%20.pdf" },
        { title: "Chapter 3: Permutation and combinations", description: "Understand geometry and its applications.", link: "https://ncert.nic.in/pdf/publication/exemplarproblem/classXI/mathematics/keep207.pdf" },
      ],
    },
    {
      subject: "Physics",
      chapters: [
        { title: "Chapter 1: Kinematics", description: "Understand the principles of Kinematics.", link: "https://www.uvm.edu/~ldonfort/P21S20/2_Kinematics.pdf" },
        { title: "Chapter 2: Newton Laws Of Motion", description: "Learn about Newton Laws Of Motion in depth.", link: "https://fac.iitg.ac.in/saurabh/ph101/Lecture3.pdf" },
        { title: "Chapter 3: Fluid Mechanics", description: "Dive into Fluid topics.", link: "https://www.masterjeeclasses.com/wp-content/uploads/2018/12/9.Fluid-MechanicsTheory.pdf" },
      ],
    },
    {
      subject: "Chemistry",
      chapters: [
        { title: "Chapter 1: General Organic Chemistry", description: "Learn general organic chemistry concepts.", link: "https://ncert.nic.in/textbook/pdf/kech202.pdf" },
        { title: "Chapter 2: Co-ordination Compounds", description: "Explore Co-ordination Compounds topics.", link: "https://ncert.nic.in/textbook/pdf/lech109.pdf" },
        { title: "Chapter 3: Solutions", description: "Deep dive into solutions concepts.", link: "https://www.spiroacademy.com/pdf-notes/study-meterials/Chemical/solution.pdf" },
      ],
    },
  ];
  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject); 
  };

  const closeChapters = () => {
    setSelectedSubject(null); 
  };
  return (
    <div className="container mt-5">
    <h1 className="text-center text-light mb-4">JEE Notes</h1>
      {/* Subject Cards */}
      <div className="row">
        {notesData.map((subject, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div
              className="card shadow-lg"
              style={{ cursor: "pointer" }}
              onClick={() => handleSubjectClick(subject)}
            >
              <div className="card-body text-center">
                <h5 className="card-title">{subject.subject}</h5>
                <p>Click to view chapters</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Chapters Display Line by Line */}
      {selectedSubject && (
        <div className="mt-3 pt-3">
          <h2 className="text-center text-light mb-4">{selectedSubject.subject} Chapters</h2>
          <div>
            {selectedSubject.chapters.map((chapter, chapterIndex) => (
              <div key={chapterIndex} className="mb-4">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">{chapter.title}</h5>
                    <p className="card-text">{chapter.description}</p>
                    <a
                      href={chapter.link}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Notes
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              onClick={closeChapters}
              className="btn btn-secondary btn-lg w-25" // 'w-100' makes the button span full width
              style={{ display: "block", margin: "0 auto" }}
            >
              Close Chapters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
