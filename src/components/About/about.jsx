import React from "react";
import "./about.css";
import image from './Aminata.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="intoText">
          I am Aminata Sall <br /> Aspiring Full-Stack Developer | Mentor |
          Lifelong Learner
        </span>
        <br/>
        <span className="aboutMe">
          I’m Aminata Sall, but most of my friends call me Amina. My journey
          into the tech world was sparked by a natural curiosity and desire to
          understand the world around me. This drive led me to pursue a career
          in technology, where I’m constantly learning and evolving. Currently,
          I’m working as a mentor at the DOE School through the LYFE program,
          supporting parent students in achieving their academic goals. It’s a
          role that allows me to not only give back to the community but also
          refine my leadership and problem-solving skills. My ambition is to
          become one of the world’s leading full-stack developers, and I am
          committed to continuously learning and expanding my technical
          expertise to make that dream a reality. For me, the key to success is
          hard work, dedication, and the belief that we can achieve anything we
          set our minds to. I'm excited about the future and the endless
          possibilities that come with it.
        </span>
      </div>
     <div className="photo"><img src={image} alt="Profile" className="image"/></div>
    </section>
  );
};

export default About;
