// src/components/Portfolio/Portfolio.jsx
import React from "react";
import "./portfolio.css";
import neexWeb from "./neexWeb.png";
import neexMobile from "./neexMobile.jpg";
import cunyImage from "./cuny.png";
import candogram from "./surveyApp.png";
import designMockup from "./design.jpg";
import formSupport from "./forms.png";


const Portfolio = () => {
  const projects = [
    {
      title: "Neex Nday Jor – Web Ordering System",
      description:
        "A MERN full-stack food ordering app with user authentication, category filtering, and cart system. Deployed online.",
      image: neexWeb,
      liveLink: "https://neex-nday-jor-1.onrender.com",
      github: "https://github.com/mameami26/NeexNdayJorApp.git",
    },
    {
      title: "CUNY Networking Platform",
      description:
        "A MERN-based social networking app for CUNY students. Features profiles, messaging, and JWT auth.",
      image: cunyImage,
      github: "https://github.com/mameami26/HERE-IS-CUNY.git",
      liveLink: "https://mameami26.github.io/TechConnectCUNY/", 
    },
    {
      title: "Neex Nday Jor – Android App",
      description:
        "Built in Android Studio with SQLite integration, category-based menu, login functionality, and shopping cart.",
      image: neexMobile,
      github: "https://github.com/mameami26/NeexNdayJorApp.git", 
    },
    {
      title: "Survey Results Dashboard",
      description:
        "Built for Candogram to analyze and visualize survey responses using Chart.js. Used by students and admins.",
      image: candogram,
      github: "https://github.com/mameami26/survey-app.git", 
      liveLink: "http://aminata.sall.bronxsoftware.com/"
    },
    {
      title: "Brand Pack Design – Freelance Client",
      description:
        "Designed logo, business cards, flyers, and IG templates using Canva. Focused on bold, modern branding.",
      image: designMockup,
      liveLink: "https://www.canva.com/design/DAGoYsBm_qU/MLMKxNOQHp_dHnEUvpRiLg/edit"
    },
    {
      title: "NayJor Services ",
      description:
        "A multi-service platform where I assisted clients with immigration paperwork, government aid applications, and form preparation. Known for personalized, reliable service that helps underserved communities navigate complex processes.",
      image: formSupport,
      github: "https://github.com/mameami26/NayJor-Services.git", 
      liveLink: "https://mameami26.github.io/NayJor-Services/"
    },
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <p className="subtitle">PORTFOLIO</p>
      <h2 className="title">Some of My Work</h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio-links">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌐 Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💻 GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
