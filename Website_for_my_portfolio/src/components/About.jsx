import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/About.css";

/*
  About component
  - Section (id="about") containing Education, Certifications, Skills, and Basic knowledge.
  - Uses Framer Motion's `motion.div` with `whileInView` to fade content into view when scrolled.
*/

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        {/*
          Animated container: fades in when the section enters the viewport.
          - `initial` sets the starting state; `whileInView` sets the end state.
          - `viewport.once` prevents the animation from repeating on further scrolls.
        */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="about-grid">
            <div className="about-card">
              <h3>Education & Career</h3>
              <ul>
                <li>
                  <strong>
                    Kobe University, Japan
                    <br />
                    Bachelor of Electrical and Electronic Engineering
                    <br />
                    March 2026 – Present
                  </strong>
                </li>
                <li>
                  <strong>
                    Tampere University, Finland
                    <br />
                    Exchange Student of Information Technology and Communication
                    Sciences
                    <br />
                    August 2025 – May 2026 (1 year programme)
                  </strong>
                </li>
              </ul>
            </div>

            <div className="about-card">
              <h3>Certifications</h3>
              <ul>
                <li>
                  <strong>
                    TOEIC Listening & Reading IP: 770
                    <br />
                    May 2024 (First-year student)
                  </strong>
                </li>
                <li>
                  <strong>
                    IELTS: 6.5
                    <br />
                    December 2024 (First-year student)
                  </strong>
                </li>
              </ul>
            </div>

            <div className="about-card">
              <h3>Skills</h3>
              {/*
                  Skills list: each `.skill-item` groups a skill title and its details.
                  This allows easier vertical spacing and per-skill layout control.
                */}
              <div className="skills-container">
                <div className="skill-item">
                  <strong>HTML</strong>
                  <ul>
                    <li>Portfolio website</li>
                  </ul>
                </div>

                <div className="skill-item">
                  <strong>CSS</strong>
                  <ul>
                    <li>Portfolio website</li>
                  </ul>
                </div>

                <div className="skill-item">
                  <strong>JavaScript</strong>
                  <ul>
                    <li>Portfolio website</li>
                  </ul>
                </div>

                <div className="skill-item">
                  <strong>React</strong>
                  <ul>
                    <li>Portfolio website</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="about-card">
              <h3>Basic knowledge</h3>
              <div className="skills-container">
                <div className="skill-item">
                  <strong>Python</strong>
                  <ul>
                    <li>
                      I learned it by myself and used it in a lecture of the
                      machine learning.
                    </li>
                  </ul>
                </div>

                <div className="skill-item">
                  <strong>C</strong>
                  <ul>
                    <li>I learned it in a lecture.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
