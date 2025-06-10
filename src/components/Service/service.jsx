// src/components/Service/Service.jsx
import React from "react";
import "./service.css";

const Service = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description:
        "Building fast, responsive, and scalable websites using the MERN stack.",
      icon: "💻",
    },
    {
      title: "Android App Development",
      description:
        "Creating mobile apps using Android Studio and SQLite for local storage.",
      icon: "📱",
    },
    {
      title: "Data Analysis & Visualization",
      description:
        "Cleaning, organizing, and visualizing data for business insights and reports.",
      icon: "📊",
    },
    {
      title: "Brand Identity & Content Design",
      description:
        "Designing logos, flyers, social media graphics, and cohesive brand materials using Canva and other tools.",
      icon: "🎨",
    },
    {
      title: "Virtual Customer Support",
      description:
        "Providing email, chat, and CRM support to help businesses serve their clients.",
      icon: "💬",
    },
    {
      title: "Business Admin & Form Services",
      description:
        "Helping clients complete digital forms, structure documents, and manage submissions.",
      icon: "🗂️",
    },
    {
      title: "Digital Strategy Consulting",
      description:
        "Guiding small businesses to the right tools and tech for stronger online operations.",
      icon: "🧩",
    },
    {
      title: "Technical Support Assistant",
      description:
        "Helping non-technical users navigate websites, forms, or troubleshoot apps.",
      icon: "🛠️",
    },
    {
      title: "Tech Mentorship & Tutoring",
      description:
        "Guiding beginners through HTML, CSS, JavaScript, and project building.",
      icon: "🧑🏽‍🏫",
    },
  ];

  return (
    <section className="service-section" id="service">
      <p className="subtitle">MY EXPERTISE</p>
      <h2 className="title">What Services Do I Provide</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
