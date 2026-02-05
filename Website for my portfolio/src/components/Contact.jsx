import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
    // Integrate EmailJS or another service here
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            I am currently looking for new opportunities and collaborations.
            Whether you have a question or just want to say hi, feel free to
            drop a message!
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <div className="social-links">
                <a href="mailto:email@example.com" className="social-item">
                  <FaEnvelope size={24} />
                  <span>Email Me</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <FaGithub size={24} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <FaLinkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                {/* Add Twitter/X if needed */}
                {/* 
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-item">
                    <FaTwitter size={24} />
                    <span>Twitter</span>
                  </a>
                  */}
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
