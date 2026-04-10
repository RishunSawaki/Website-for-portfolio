import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/Navbar.css";

/*
  Navbar component
  - Responsive navigation bar used site-wide.
  - Shows a horizontal menu on larger screens and a hamburger icon on small screens.
  - Uses `react-scroll`'s `Link` for smooth in-page scrolling to section ids.
  - `nav` state toggles the mobile full-screen menu.
  - Icons come from `react-icons/fa` and render as SVGs.
*/

interface NavLink {
  id: number;
  link: string;
  text: string;
}

const Navbar = (): JSX.Element => {
  const [nav, setNav] = useState<boolean>(false);
  const { language, toggleLanguage, t } = useLanguage();
  const handleClick = (): void => setNav((prev) => !prev);
  const closeMenu = (): void => setNav(false);

  const links: NavLink[] = [
    { id: 1, link: "home", text: t.navbar.links.home },
    { id: 2, link: "about", text: t.navbar.links.about },
    { id: 3, link: "works", text: t.navbar.links.works },
    { id: 4, link: "contact", text: t.navbar.links.contact },
  ];

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <h1 className="logo">{t.navbar.portfolio}</h1>

        {/* Desktop Menu: visible on wider screens. Uses `react-scroll` links to move within the page. */}
        <ul className="nav-menu">
          {links.map(({ id, link, text }) => (
            <li key={id} className="nav-item">
              <ScrollLink to={link} smooth={true} duration={10} className="nav-link">
                {text}
              </ScrollLink>
            </li>
          ))}
          <li className="nav-item">
            <button onClick={toggleLanguage} className="language-toggle" aria-label="Toggle language" style={{ background: "none", border: "none", color: "var(--light-color)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaGlobe size={20} />
              {language === 'en' ? 'JP' : 'EN'}
            </button>
          </li>
        </ul>

        {/* Hamburger Icon: toggles the mobile menu on small screens. The icons are purely presentational; provide ARIA on the button if converting to a button element. */}
        <div className="hamburger" onClick={handleClick}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/*
        Mobile Menu: a full-screen overlay used on small screens.
        - `.mobile-menu` is hidden by default; adding `.active` (via state) slides it into view.
        - Each link closes the menu by calling `setNav(false)` on click.
      */}
      <ul className={nav ? "mobile-menu active" : "mobile-menu"}>
        {links.map(({ id, link, text }) => (
          <li key={id} className="mobile-item">
            <ScrollLink
              onClick={closeMenu}
              to={link}
              smooth={true}
              duration={500}
            >
              {text}
            </ScrollLink>
          </li>
        ))}
        <li className="mobile-item">
            <button onClick={() => { toggleLanguage(); closeMenu(); }} className="language-toggle" aria-label="Toggle language" style={{ background: "none", border: "none", color: "var(--light-color)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.5rem" }}>
              <FaGlobe size={24} />
              {language === 'en' ? '日本語' : 'English'}
            </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;