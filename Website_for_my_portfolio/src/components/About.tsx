import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

/*
  About component
  - Section (id="about") containing Education, Certifications, Skills, and Basic knowledge.
  - Uses Framer Motion's `motion.div` with `whileInView` to fade content into view when scrolled.
*/

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
}

interface CertificationItem {
  id: number;
  title: string;
  date: string;
}

interface SkillCategory {
  id: number;
  name: string;
  items: string[];
}

const educations: EducationItem[] = [
  {
    id: 1,
    institution: "Kobe University, Japan",
    degree: "Bachelor of Electrical and Electronic Engineering",
    period: "March 2026 – Present",
  },
  {
    id: 2,
    institution: "Tampere University, Finland",
    degree: "Exchange Student of Information Technology and Communication Sciences",
    period: "August 2025 – May 2026 (1 year programme)",
  }
];

const certifications: CertificationItem[] = [
  {
    id: 1,
    title: "TOEIC Listening & Reading IP: 770",
    date: "May 2024 (First-year student)",
  },
  {
    id: 2,
    title: "IELTS: 6.5",
    date: "December 2024 (First-year student)",
  }
];

const skills: SkillCategory[] = [
  { id: 1, name: "HTML", items: ["Portfolio website"] },
  { id: 2, name: "CSS", items: ["Portfolio website"] },
  { id: 3, name: "JavaScript", items: ["Portfolio website"] },
  { id: 4, name: "React", items: ["Portfolio website"] }
];

const basicKnowledge: SkillCategory[] = [
  { id: 1, name: "Python", items: ["I learned it by myself and used it in a lecture of the machine learning."] },
  { id: 2, name: "C", items: ["I learned it in a lecture."] }
];

const About = (): JSX.Element => {
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
          <h2 className="section-title">About Me</h2>

          <div className="about-grid">
            <div className="about-card">
              <h3>Education & Career</h3>
              <ul>
                {educations.map((edu) => (
                  <li key={edu.id}>
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
              <h3>Certifications</h3>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert.id}>
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
              <h3>Skills</h3>
              {/*
                  Skills list: each `.skill-item` groups a skill title and its details.
                  This allows easier vertical spacing and per-skill layout control.
                */}
              <div className="skills-container">
                {skills.map((skill) => (
                  <div className="skill-item" key={skill.id}>
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
              <h3>Basic knowledge</h3>
              <div className="skills-container">
                {basicKnowledge.map((knowledge) => (
                  <div className="skill-item" key={knowledge.id}>
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