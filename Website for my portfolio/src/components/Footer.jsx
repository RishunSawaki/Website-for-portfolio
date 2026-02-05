import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Rishun. All rights reserved.</p>
        <p className="built-with">Built with React & Vite</p>
      </div>
    </footer>
  );
};

export default Footer;
