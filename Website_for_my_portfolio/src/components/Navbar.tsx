import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

/*
  Navbar component
  - Responsive navigation bar used site-wide.
  - Shows a horizontal menu on larger screens and a hamburger icon on small screens.
  - Uses `react-scroll`'s `Link` for smooth in-page scrolling to section ids.
  - `nav` state toggles the mobile full-screen menu.
  - Icons come from `react-icons/fa` and render as SVGs.
*/

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleClick = () => setNav(!nav);

  const links = [
    { id: 1, link: "home", text: "Home" },
    { id: 2, link: "about", text: "About" },
    { id: 3, link: "works", text: "Works" },
    { id: 4, link: "contact", text: "Contact" },
  ];

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <h1 className="logo">Portfolio</h1>

        {/* Desktop Menu: visible on wider screens. Uses `react-scroll` links to move within the page. */}
        <ul className="nav-menu">
          {links.map(({ id, link, text }) => (
            <li key={id} className="nav-item">
              <ScrollLink to={link} smooth={true} duration={10} className="nav-link">
                {text}
              </ScrollLink>
            </li>
          ))}
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
              onClick={() => setNav(false)}
              to={link}
              smooth={true}
              duration={500}
            >
              {text}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;