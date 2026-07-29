import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaBullseye } from "react-icons/fa";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.wrapper}>
          {/* Left Side */}

          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.subtitle}>ABOUT ME</span>

            <h2>
              Passionate Frontend Developer Building Modern Web Experiences
            </h2>

            <p>
              I'm <strong>Emmanuel Obazee</strong>, a frontend developer and
              founder of <strong>Black Marvy Tech</strong>. I enjoy creating
              responsive, modern and user-friendly websites using React,
              JavaScript and Node.js.
            </p>

            <p>
              Besides web development, I'm also a Medical Laboratory Science
              graduate who enjoys solving problems, learning new technologies
              and building solutions that make life easier.
            </p>

            <a href="/resume" className={styles.btn}>
              View Resume
            </a>
          </motion.div>

          {/* Right Side */}

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.card}>
              <FaLaptopCode className={styles.icon} />
              <h3>Frontend Development</h3>
              <p>
                React, JavaScript, HTML5, CSS3, Bootstrap, Responsive Design and
                UI Development.
              </p>
            </div>

            <div className={styles.card}>
              <FaUserGraduate className={styles.icon} />
              <h3>Continuous Learning</h3>
              <p>
                Constantly improving my skills through projects, courses and
                practical development experience.
              </p>
            </div>

            <div className={styles.card}>
              <FaBullseye className={styles.icon} />
              <h3>My Goal</h3>
              <p>
                To build beautiful, fast and scalable web applications for
                businesses around the world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
