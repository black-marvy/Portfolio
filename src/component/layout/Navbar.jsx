import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaFileAlt } from "react-icons/fa";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            Black <span>Marvy</span>
          </Link>

          {/* Navigation */}
          <ul
            className={`${styles.navLinks} ${
              menuOpen ? styles.active : ""
            }`}
          >
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/project" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" onClick={closeMenu}>
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog" onClick={closeMenu}>
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Side */}
          <div className={styles.right}>
            <NavLink to="/resume" className={styles.resume}>
              <FaFileAlt />
              Resume
            </NavLink>

            <button
              className={styles.menuBtn}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;