import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="about-grid">
            <div className="about-card">
              <h3>Education</h3>
              <p>
                <strong>University Student</strong>
              </p>
              <p>Major in Computer Science</p>
              <p>Major in Electrical & Electronic Engineering</p>
              <p className="description">
                Focusing on the intersection of hardware and software.
              </p>
            </div>

            <div className="about-card">
              <h3>Career Goals</h3>
              <p>
                Aspiring Engineer. I have never created works and services
                professionally yet, but I am eager to start making a lot of
                things. This portfolio marks the beginning of my engineering
                career.
              </p>
            </div>

            <div className="about-card full-width">
              <h3>Skills</h3>
              <div className="skills-container">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Vite</span>
                {/* Add more as needed */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
