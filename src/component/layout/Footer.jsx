import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        {/* Brand */}

        <div className={styles.brand}>
          <h2>
            <span>Black</span> Marvy Tech
          </h2>

          <p>
            Building modern, responsive and high-performance web applications
            with React and modern JavaScript.
          </p>
        </div>

        {/* Quick Links */}

        <div className={styles.links}>
          <h3>Quick Links</h3>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>
        </div>

        {/* Socials */}

        <div className={styles.social}>
          <h3>Connect</h3>

          <div className={styles.icons}>
            <a
              href="https://github.com/black-marvy"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/emmanuel-marvel-6b49353b5/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:emmanuelmarvel91@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} Black Marvy Tech. All rights reserved.</p>

        <button onClick={scrollTop} className={styles.topButton}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
