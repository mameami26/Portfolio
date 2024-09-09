import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Survey App",
      link: "http://aminata.sall.bronxsoftware.com/",
      github: "https://github.com/mameami26/survey-app.git",
      backgroundImage: "url('./Screenshot 2024-09-09 180758.png')" 
    },
    {
      title: "Note Taker",
      link: "https://note-taker-1-uzi3.onrender.com",
      github: "https://github.com/mameami26/Note-Taker.git",
      backgroundImage: "url('./Screenshot 2024-09-09 181035.png')"
    },
    {
      title: "Text Editor",
      link: "https://text-editor-1-7j6u.onrender.com",
      github: "https://github.com/mameami26/Text-Editor.git",
      backgroundImage: "url('./Screenshot 2024-09-09 181245.png')"
    },
    {
      title: "Plan Tracker",
      link: "https://project-2-pdzh.onrender.com",
      github: "https://github.com/Christopher-Chhim/PlanTracker.git",
      backgroundImage: "url('./image.png')"
    },
  ];

  return (
    <section id="portfolio" className="portfolioSection">
      <div className="portfolioGrid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="projectCard"
            style={{ backgroundImage: project.backgroundImage }}
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
