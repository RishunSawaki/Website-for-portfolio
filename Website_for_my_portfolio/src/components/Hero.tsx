import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/Hero.css";

/*
  Hero component
  - Top section of the page (id="home") containing intro text and CTAs.
  - Uses Framer Motion's `motion.div` to animate the content on mount (fade+slide up).
  - Buttons use `react-scroll` to scroll to other page sections smoothly.
*/

const Hero = (): JSX.Element => {
  const { t } = useLanguage();

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
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <h1 className="hero-title">{t.hero.title}</h1>
          <h2 className="hero-role">
            {t.hero.role}
          </h2>
          <p className="hero-description" style={{ whiteSpace: "pre-wrap" }}>
            {t.hero.description}
          </p>
          <div className="hero-buttons">
            <ScrollLink to="works" smooth={false} duration={300}>
              <button className="btn primary-btn">{t.hero.btnWork}</button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={false} duration={300}>
              <button className="btn secondary-btn">{t.hero.btnContact}</button>
            </ScrollLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;