import { motion } from "framer-motion";
import { FaFilePdf, FaDownload, FaEye } from "react-icons/fa";
import schoolapp from "../../assets/pdf/schoolapp.pdf";

import styles from "./Resume.module.css";

function Resume() {
  return (
    <section className={styles.resume} id="resume">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>RESUME</span>

          <h2>Download My Resume</h2>

          <p>
            Interested in working together? Download my resume to learn more
            about my education, experience, technical skills and projects.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.icon}>
            <FaFilePdf />
          </div>

          <div className={styles.content}>
            <h3>Frontend Developer Resume</h3>

            <p>
              A professional resume highlighting my frontend development
              experience, React projects, Medical Laboratory Science background,
              leadership experience and technical skills.
            </p>

            <div className={styles.buttons}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={styles.view}
              >
                <FaEye />
                View Resume
              </a>

              <a href="/resume.pdf" download className={styles.download}>
                <FaDownload />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
