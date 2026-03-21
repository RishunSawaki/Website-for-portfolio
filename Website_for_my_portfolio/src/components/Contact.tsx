/*
  Contact.tsx
  Contact section component with social links and a demo contact form.
  `handleSubmit` currently prevents default submission and shows a demo alert.
  Replace submission logic with EmailJS or an API call as needed.
*/
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

interface SocialLink {
  id: number;
  href: string;
  icon: React.ReactNode;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    href: "mailto:rikomake@icloud.com",
    icon: <FaEnvelope size={24} />,
    label: "Email Me",
  },
  {
    id: 2,
    href: "https://github.com/RishunSawaki",
    icon: <FaGithub size={24} />,
    label: "GitHub",
  },
  {
    id: 3,
    href: "https://linkedin.com/in/rishun-sawaki",
    icon: <FaLinkedin size={24} />,
    label: "LinkedIn",
  },
];

const Contact = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
    // Integrate EmailJS or another service here
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Contact section: intro text, social links, and contact form */}
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            I am currently looking for new opportunities and collaborations.
            Whether you have a question or just want to say hi, feel free to
            drop a message!
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <div className="social-links">
                {socialLinks.map(({ id, href, icon, label }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
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
                  rows={5}
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