/*
  Contact.tsx
  Contact section component with social links and a demo contact form.
  `handleSubmit` currently prevents default submission and shows a demo alert.
  Replace submission logic with EmailJS or an API call as needed.
*/
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/Contact.css";

const Contact = (): JSX.Element => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { t } = useLanguage();

  const socialLinks = [
    {
      id: 1,
      href: "mailto:rikomake@icloud.com",
      icon: <FaEnvelope size={24} />,
      label: t.contact.socials.email,
    },
    {
      id: 2,
      href: "https://github.com/RishunSawaki",
      icon: <FaGithub size={24} />,
      label: t.contact.socials.github,
    },
    {
      id: 3,
      href: "https://linkedin.com/in/rishun-sawaki",
      icon: <FaLinkedin size={24} />,
      label: t.contact.socials.linkedin,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mykbvvny", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
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
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="contact-text">
            {t.contact.text}
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
                <label htmlFor="name">{t.contact.form.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t.contact.form.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.contact.form.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t.contact.form.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.contact.form.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={t.contact.form.message}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn submit-btn" 
                disabled={status === "submitting"}
              >
                {status === "submitting" ? t.contact.form.sending : t.contact.form.send}
              </button>
              
              {status === "success" && (
                <p className="form-message success-message">{t.contact.form.success}</p>
              )}
              {status === "error" && (
                <p className="form-message error-message">{t.contact.form.error}</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;