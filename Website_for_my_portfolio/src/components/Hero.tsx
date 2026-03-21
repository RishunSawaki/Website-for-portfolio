import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "../styles/Hero.css";

/*
  Hero component
  - Top section of the page (id="home") containing intro text and CTAs.
  - Uses Framer Motion's `motion.div` to animate the content on mount (fade+slide up).
  - Buttons use `react-scroll` to scroll to other page sections smoothly.
*/

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/*
          Animated container (fade in and slide up on mount):
          - `initial` defines the starting state (hidden, shifted down).
          - `animate` defines the end state (visible, original position).
          - `transition` sets the duration of the animation.
        */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-subtitle">Hi, my name is</p>
          <h1 className="hero-title">Rishun.</h1>
          <h2 className="hero-role">
            Electrical and Electronic Engineering student
          </h2>
          <p className="hero-description">
            I'm a university student passionate about computer technology. <br />This is the beginning of my engineering journey.
          </p>
          <div className="hero-buttons">
            <Link to="works" smooth={false} duration={300}>
              <button className="btn primary-btn">View My Work</button>
            </Link>
            <Link to="contact" smooth={false} duration={300}>
              <button className="btn secondary-btn">Contact Me</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;