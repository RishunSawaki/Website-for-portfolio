import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

const Projects = () => {
  const works = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "The website you are looking at right now. Built with React and Vite to introduce myself and showcase my projects.",
      techStack: ["HTML", "CSS","React", "Vite", "Framer Motion"],
      github: "https://github.com/rishun", // Placeholder
      demo: "#",
    },
    // Add more projects here in the future
  ];

  return (
    <section id="works" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Works</h2>
          <div className="projects-grid">
            {works.map((work) => (
              <div key={work.id} className="project-card">
                <div className="project-info">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="tech-stack">
                    {work.techStack.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={work.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={20} /> Code
                    </a>

                    <a
                      href={work.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={18} /> Live Demo
                    </a>

                    {/*}
                    {work.demo !== "#" && (
                      <a
                        href={work.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt size={18} /> Live Demo
                      </a>
                    )}
                    */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {works.length === 1 && (
            <p className="coming-soon">More projects coming soon!</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
