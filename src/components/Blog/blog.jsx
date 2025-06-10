// src/components/Blog/Blog.jsx
import React from "react";
import "./blog.css";
import blog1 from "./blog1.png"; // Replace with real blog images
import blog2 from "./blog2.png";

const Blog = () => {
  const posts = [
    {
      title: "My Journey Into Tech",
      date: "May 28, 2025",
      description: "From security guard to full stack developer—how I did it while raising a family and going to school full time.",
      image: blog1,
      link: "#",
    },
    {
      title: "Building Neex Nday Jor",
      date: "April 15, 2025",
      description: "The design and code process behind building a restaurant ordering app using React and SQLite.",
      image: blog2,
      link: "#",
    },
  ];

  return (
    <section className="blog-section" id="blog">
      <p className="subtitle">BLOG</p>
      <h2 className="title">Latest Posts</h2>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{post.date}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <a href={post.link} className="blog-button">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
