import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-subtitle">Hi, my name is</p>
          <h1 className="hero-title">Rishun.</h1>
          <h2 className="hero-role">
            Computer Science & <br /> Electrical Engineering Student.
          </h2>
          <p className="hero-description">
            I'm a university student passionate about building digital
            experiences. This is the beginning of my engineering journey.
          </p>
          <div className="hero-buttons">
            <Link to="works" smooth={true} duration={500}>
              <button className="btn primary-btn">View My Work</button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn secondary-btn">Contact Me</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
