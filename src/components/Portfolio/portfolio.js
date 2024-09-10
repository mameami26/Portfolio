import React from "react";
import "./portfolio.css";
import survey from './surveyApp.png';
import note from './noteTacker.png';
import text from './textEditor.png';
import plan from './planTracker.png';

const Portfolio = () => {
  const projects = [
    {
      title: "Survey App",
      link: "http://aminata.sall.bronxsoftware.com/",
      github: "https://github.com/mameami26/survey-app.git",
      backgroundImage: survey
    },
    {
      title: "Note Taker",
      link: "https://note-taker-1-uzi3.onrender.com",
      github: "https://github.com/mameami26/Note-Taker.git",
      backgroundImage: note
    },
    {
      title: "Text Editor",
      link: "https://text-editor-1-7j6u.onrender.com",
      github: "https://github.com/mameami26/Text-Editor.git",
      backgroundImage: text
    },
    {
      title: "Plan Tracker",
      link: "https://project-2-pdzh.onrender.com",
      github: "https://github.com/Christopher-Chhim/PlanTracker.git",
      backgroundImage: plan
    },
  ];

  return (
    <section id="portfolio" className="portfolioSection">
      <div className="portfolioGrid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="projectCard"
            style={{ backgroundImage: `url(${project.backgroundImage})` }}
          >
            <div className="content">
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Deployed Application
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
