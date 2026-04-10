import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/About.css";

/*
  About component
  - Section (id="about") containing Education, Certifications, Skills, and Basic knowledge.
  - Uses Framer Motion's `motion.div` with `whileInView` to fade content into view when scrolled.
*/

const About = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">
        {/*
          Animated container: fades in when the section enters the viewport.
          - `initial` sets the starting state; `whileInView` sets the end state.
          - `viewport.once` prevents the animation from repeating on further scrolls.
        */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t.about.title}</h2>

          <div className="about-grid">
            <div className="about-card">
              <h3>{t.about.eduCareer}</h3>
              <ul>
                {t.about.educations.map((edu, idx) => (
                  <li key={idx}>
                    <strong>
                      {edu.institution}
                      <br />
                      {edu.degree}
                      <br />
                      {edu.period}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-card">
              <h3>{t.about.certifications}</h3>
              <ul>
                {t.about.certItems.map((cert, idx) => (
                  <li key={idx}>
                    <strong>
                      {cert.title}
                      <br />
                      {cert.date}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-card">
              <h3>{t.about.skills}</h3>
              {/*
                  Skills list: each `.skill-item` groups a skill title and its details.
                  This allows easier vertical spacing and per-skill layout control.
                */}
              <div className="skills-container">
                {t.about.skillItems.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <strong>{skill.name}</strong>
                    <ul>
                      {skill.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-card">
              <h3>{t.about.basicKnowledge}</h3>
              <div className="skills-container">
                {t.about.basicItems.map((knowledge, idx) => (
                  <div className="skill-item" key={idx}>
                    <strong>{knowledge.name}</strong>
                    <ul>
                      {knowledge.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;