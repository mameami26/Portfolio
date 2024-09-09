import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resumeSection">
      <a
        href="https://docs.google.com/document/d/1KtYBwKi81j6KRwXN2q_XZPY84z41Qs3t1fTOpJ2yB4M/edit?usp=sharing"
        download
        className="downloadResume"
      >
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul className="proficiencyList">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>MySQL</li>
      </ul>
    </section>
  );
};

export default Resume;
