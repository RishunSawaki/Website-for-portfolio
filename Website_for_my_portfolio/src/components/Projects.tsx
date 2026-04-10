/*
  Projects.tsx
  Renders a grid of project cards from the local `works` array.
  To add a project, edit the `works` array (title, description, techStack, github, demo).
*/
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/Projects.css";

const Projects = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <section id="works" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Projects section: title + project cards grid */}
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="projects-grid">
            {t.projects.works.map((work, idx) => (
              <div key={idx} className="project-card">
                <div className="project-info">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="tech-stack">
                    {/* Reusing hardcoded techStack for now as technologies don't typically need translation */}
                    {["HTML", "CSS", "React", "Vite", "Framer Motion"].map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com/rishun"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={20} /> {t.projects.code}
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={18} /> {t.projects.liveDemo}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {t.projects.works.length === 1 && (
            <p className="coming-soon">{t.projects.comingSoon}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;