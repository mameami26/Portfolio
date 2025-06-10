import React from 'react';
import './about.css';
import profilePic from './about1.png'; 

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Right-side image with dynamic shapes */}
        <div className="about-image-wrapper">
          <div className="bg-shape bg1"></div>
          <div className="bg-shape bg2"></div>
          <img src={profilePic} alt="Aminata Sall" className="about-image" />
        </div>

        {/* Left-side content */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m <strong>Aminata Sall</strong>, a Full Stack Developer and customer servivice representative, with hands-on experience building
            web and mobile apps using the MERN stack. From designing food ordering platforms like Neex Nday Jor to 
            developing tech solutions for student engagement, I enjoy solving real-world problems through code.
          </p>
          <p>
            I’ve completed a Full Stack Certificate at Columbia University and I have finishing my Associate Degree in 
            Computer Science at Hostos Community College. I speak English, French, and Wolof, and I’m driven by a passion 
            for accessible, inclusive tech.
          </p>

          <div className="education">
            <h3>🎓 Education</h3>
            <ul>
              <li><strong>Hostos Community College (CUNY)</strong> — A.S. in Computer Science (2025)</li>
              <li><strong>Columbia University</strong> — Full Stack Certificate (2024)</li>
              <li><strong>Manhattan Comprehensive High School</strong> High School Diploma (2023)</li>
            </ul>
          </div>
           <a 
            href="https://docs.google.com/document/d/1KtYBwKi81j6KRwXN2q_XZPY84z41Qs3t1fTOpJ2yB4M/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="download-btn">View Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
