/*
  Footer.tsx
  Simple footer component that shows the current year dynamically.
  Keeps copyright text up-to-date without manual changes.
*/
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/Footer.css";

const Footer = (): JSX.Element => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        {/* Dynamic year inserted from `year` constant */}
        <p>&copy; {year} {t.footer.rights}</p>
        {/* <p className="built-with">Built with React & Vite</p> */}
      </div>
    </footer>
  );
};

export default Footer;