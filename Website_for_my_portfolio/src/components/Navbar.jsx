import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const links = [
    { id: 1, link: "home", text: "Home" },
    { id: 2, link: "about", text: "About" },
    { id: 3, link: "works", text: "Works" },
    { id: 4, link: "contact", text: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {links.map(({ id, link, text }) => (
            <li key={id} className="nav-item">
              <Link to={link} smooth={true} duration={10} className="nav-link">
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={handleClick}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={nav ? "mobile-menu active" : "mobile-menu"}>
        {links.map(({ id, link, text }) => (
          <li key={id} className="mobile-item">
            <Link
              onClick={() => setNav(false)}
              to={link}
              smooth={false}
              duration={300}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
