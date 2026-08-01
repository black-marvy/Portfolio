
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import { SiExpress, SiVite } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

import styles from "./Hero.module.css";
import profile from "../../assets/image/profile.png";

function Hero() {
  return (
    <section className={styles.hero} id="home">

      {/* Background Effects */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className="container">
        <div className={styles.wrapper}>

          {/* ================= LEFT SIDE ================= */}

          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className={styles.badge}>
              👋 Welcome to Black Marvy Tech
            </span>

            <h1>
              Building
              <span> Modern Digital </span>
              Experiences
            </h1>

            <div className={styles.typing}>
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "JavaScript Developer",
                  2000,
                  "Node.js Developer",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </div>

            <p>
              I design and build fast, responsive and visually stunning web
              applications using React, JavaScript, Node.js and Express, with
              a strong focus on performance, accessibility and user experience.
            </p>

            {/* Buttons */}

            <div className={styles.buttons}>

              {/* Hire Me */}
              <a
                href="#contact"
                className={styles.primary}
              >
                Hire Me
                <FaArrowRight />
              </a>

              {/* Download CV */}
              <a
                href="/resume.pdf"
                download="Emmanuel-Obazee-Marvellous-CV.pdf"
                className={styles.secondary}
              >
                <FaDownload />
                Download CV
              </a>

            </div>

            {/* Social Links */}

            <div className={styles.socials}>

              <a
                href="https://github.com/black-marvy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/emmanuel-marvel-6b49353b5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className={styles.imageWrapper}>

              {/* Floating React Icon */}
              <div className={`${styles.icon} ${styles.react}`}>
                <FaReact />
              </div>

              {/* Floating Node Icon */}
              <div className={`${styles.icon} ${styles.node}`}>
                <FaNodeJs />
              </div>

              {/* Floating JavaScript Icon */}
              <div className={`${styles.icon} ${styles.js}`}>
                <FaJsSquare />
              </div>

              {/* Floating Express Icon */}
              <div className={`${styles.icon} ${styles.express}`}>
                <SiExpress />
              </div>

              {/* Floating Vite Icon */}
              <div className={`${styles.icon} ${styles.vite}`}>
                <SiVite />
              </div>

              {/* Decorative Rings */}
              <div className={styles.ringOne}></div>
              <div className={styles.ringTwo}></div>

              {/* Profile Image */}
              <div className={styles.imageBox}>
                <img
                  src={profile}
                  alt="Emmanuel Obazee Marvellous"
                />
              </div>

            </div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}

        <motion.a
          href="#about"
          className={styles.scroll}
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
        >
          Scroll Down
        </motion.a>

      </div>

    </section>
  );
}

export default Hero;

