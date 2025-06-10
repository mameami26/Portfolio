// src/components/Home/home.jsx
import React from "react";
import "./home.css";
import heroImage from "./Home.png"; 

const Home = () => {
  return (
    <section id="home" className="home-section">
      <aside className="introImage">
        <img src={heroImage} alt="Aminata Sall" /> 
      </aside>

      <div className="introContent">
        <h1 className="hello">Hello, I'm Aminata Sall</h1>
        <p className="aboutMe">
          A Full Stack Developer, Data Analyst, and passionate problem-solver.  
          With a strong foundation in the MERN stack and hands-on experience building real-world applications,  
          I create accessible, scalable tech solutions that empower communities and small businesses.
        </p>
        <a href="#about" className="start-button">
          <button>
            <span className="buttonText">Get Started</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;
