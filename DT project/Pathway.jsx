import React, { useState } from "react";
import { jsPDF } from "jspdf";

function Pathway() {
  const [goal, setGoal] = useState("");
  const [milestones, setMilestones] = useState([]);
  const [resources, setResources] = useState([]);
  const [suggestion, setSuggestion] = useState("");

  const roadmapData = {
    jee: {
      milestones: [
        { step: "Step 1", description: "Master NCERT textbooks for Physics, Chemistry, and Mathematics." },
        { step: "Step 2", description: "Practice problems from previous years' question papers." },
        { step: "Step 3", description: "Enroll in mock tests and identify weak areas." },
        { step: "Step 4", description: "Focus on advanced topics for JEE Advanced preparation." },
        { step: "Step 5", description: "Revise key formulas and concepts regularly." },
      ],
      resources: [
        "Books: HC Verma for Physics, OP Tandon for Chemistry, RD Sharma for Mathematics",
        "Mock Test Platforms: Allen, FIITJEE, Aakash",
        "YouTube Channels: Unacademy JEE, Vedantu JEE",
        "NCERT Solutions and Notes",
      ],
    },
    neet: {
      milestones: [
        { step: "Step 1", description: "Study NCERT Biology, Physics, and Chemistry thoroughly." },
        { step: "Step 2", description: "Practice diagrams and labeling for Biology." },
        { step: "Step 3", description: "Solve chapter-wise question banks." },
        { step: "Step 4", description: "Attempt full-length mock tests to improve speed and accuracy." },
        { step: "Step 5", description: "Review mistakes from mock tests and strengthen weak topics." },
      ],
      resources: [
        "Books: NCERT Biology, Trueman's Biology, DC Pandey for Physics",
        "Mock Test Platforms: Aakash, BYJU'S, Allen",
        "YouTube Channels: Unacademy NEET, Physics Wallah",
        "Past Year Question Papers",
      ],
    },
    upsc: {
      milestones: [
        { step: "Step 1", description: "Understand the UPSC syllabus and exam pattern." },
        { step: "Step 2", description: "Read NCERT books and standard reference materials." },
        { step: "Step 3", description: "Practice answer writing for the Mains exam." },
        { step: "Step 4", description: "Prepare for the Prelims with mock tests and revision." },
        { step: "Step 5", description: "Focus on current affairs and join a test series." },
      ],
      resources: [
        "Books: Laxmikant for Polity, Spectrum for History, Shankar IAS for Environment",
        "Websites: PIB, InsightsIAS",
        "Mock Test Platforms: Vision IAS, Drishti IAS",
        "Newspapers: The Hindu, Indian Express",
      ],
    },
    ssc: {
      milestones: [
        { step: "Step 1", description: "Understand the syllabus and previous years' question trends." },
        { step: "Step 2", description: "Learn shortcuts and tricks for quantitative aptitude." },
        { step: "Step 3", description: "Practice reasoning and English comprehension daily." },
        { step: "Step 4", description: "Take online mock tests to improve speed." },
        { step: "Step 5", description: "Revise general knowledge topics regularly." },
      ],
      resources: [
        "Books: RS Aggarwal for Quant, Kiran's SSC Question Bank",
        "Mock Test Platforms: Testbook, Gradeup",
        "YouTube Channels: Adda247, Study IQ",
        "Daily Current Affairs Apps",
      ],
    },
    toefl: {
      milestones: [
        { step: "Step 1", description: "Familiarize yourself with the TOEFL exam structure." },
        { step: "Step 2", description: "Practice reading comprehension and vocabulary building." },
        { step: "Step 3", description: "Improve listening and note-taking skills." },
        { step: "Step 4", description: "Practice speaking tasks using a timer." },
        { step: "Step 5", description: "Take full-length mock tests to simulate exam conditions." },
      ],
      resources: [
        "Books: The Official Guide to the TOEFL Test",
        "Practice Platforms: ETS TOEFL Practice, Magoosh",
        "YouTube Channels: TST Prep, Noteful",
        "Apps: Duolingo, Vocabulary Builder",
      ],
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const goalLower = goal.toLowerCase();
    if (goalLower in roadmapData) {
      const roadmap = roadmapData[goalLower];
      setMilestones(roadmap.milestones);
      setResources(roadmap.resources);
      setSuggestion(`Based on your goal: "${goal}", here's a roadmap to help you succeed!`);
    } else {
      setSuggestion(`Sorry, we don't have a roadmap for "${goal}" yet.`);
      setMilestones([]);
      setResources([]);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Road Map for Success", 20, 20);

    doc.setFontSize(14);
    doc.text(`Goal: ${goal}`, 20, 30);

    doc.setFontSize(16);
    doc.text("Milestones:", 20, 40);
    let yPosition = 50;
    milestones.forEach((milestone, index) => {
      doc.setFontSize(12);
      doc.text(`${milestone.step}: ${milestone.description}`, 20, yPosition);
      yPosition += 10;
    });

    doc.setFontSize(16);
    doc.text("Recommended Resources:", 20, yPosition + 10);
    yPosition += 20;
    resources.forEach((resource) => {
      doc.setFontSize(12);
      doc.text(`• ${resource}`, 20, yPosition);
      yPosition += 10;
    });

    doc.save("roadmap.pdf");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-light mb-4">Personalized Road Map</h1>
      <form onSubmit={handleSubmit} className="p-4 shadow-lg bg-light rounded">
        <div className="mb-3">
          <label className="form-label text-info">Enter your exam or academic goal:</label>
          <input
            type="text"
            className="form-control border-primary"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="E.g., JEE Mains & Advanced, NEET, UPSC"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Get Roadmap
        </button>
      </form>

      {suggestion && (
        <div className="alert alert-success mt-4 text-center">{suggestion}</div>
      )}

      {milestones.length > 0 && (
        <div className="mt-4 p-4 border rounded" style={{ backgroundColor: "#f4f7fc" }}>
          <h4>Milestones:</h4>
          <ul>
            {milestones.map((milestone, index) => (
              <li key={index}>
                {milestone.step}: {milestone.description}
              </li>
            ))}
          </ul>
          <h4>Recommended Resources:</h4>
          <ul>
            {resources.map((resource, index) => (
              <li key={index}>{resource}</li>
            ))}
          </ul>
          <button
            onClick={generatePDF}
            className="btn btn-success mt-3 w-100"
            style={{ fontSize: "16px" }}
          >
            Download Road Map
          </button>
        </div>
      )}
    </div>
  );
}

export default Pathway;
