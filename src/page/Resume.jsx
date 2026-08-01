import { motion } from "framer-motion";
import {
  FaDownload,
  FaUserGraduate,
  FaBriefcase,
  FaCode,
  FaCertificate,
} from "react-icons/fa";

import styles from "../Styles/Resume.module.css";

function Resume() {
  return (
    <section className={styles.resume}>
      <div className="container">
        {/* Heading */}
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>RESUME</span>

          <h2>Professional Resume</h2>

          <p>
            A summary of my education, professional experience, technical
            skills, leadership experience and certifications as a Frontend
            Developer and Medical Laboratory Science graduate.
          </p>
        </motion.div>

        <div className={styles.wrapper}>
          {/* LEFT COLUMN */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Education */}
            <div className={styles.section}>
              <h3 className={styles.title}>
                <FaUserGraduate />
                Education
              </h3>

              <div className={styles.item}>
                <h4>Ambrose Alli University</h4>

                <span>2018 – 2024</span>

                <p>
                  Bachelor of Medical Laboratory Science (B.MLS). Developed
                  strong analytical thinking, research ability, laboratory
                  procedures, quality assurance, documentation and
                  problem-solving skills through academic and practical training.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className={styles.section}>
              <h3 className={styles.title}>
                <FaBriefcase />
                Professional Experience
              </h3>

              <div className={styles.item}>
                <h4>Frontend Developer | Black Marvy Tech</h4>

                <span>2024 – Present</span>

                <p>
                  Develop responsive websites, React applications, landing
                  pages, portfolio websites and reusable UI components using
                  HTML, CSS, JavaScript, React, Bootstrap, Node.js and Express.
                  Focus on writing clean, maintainable code and creating modern,
                  user-friendly web experiences.
                </p>
              </div>

              <div className={styles.item}>
                <h4>Medical Laboratory Intern</h4>

                <span>Luli Laboratory Diagnostic Centre</span>

                <p>
                  Assisted laboratory scientists with sample collection,
                  specimen processing, laboratory documentation, patient record
                  management, quality control procedures and accurate laboratory
                  reporting while maintaining professional standards.
                </p>
              </div>
            </div>

            {/* Leadership */}
            <div className={styles.section}>
              <h3 className={styles.title}>
                <FaCertificate />
                Leadership Experience
              </h3>

              <div className={styles.item}>
                <h4>NIMELSSA PEC Chairman</h4>

                <span>Student Leadership</span>

                <p>
                  Represented students, coordinated meetings, supported
                  decision-making processes and developed leadership,
                  communication and teamwork skills through active service.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Skills */}
            <div className={styles.section}>
              <h3 className={styles.title}>
                <FaCode />
                Technical Skills
              </h3>

              <div className={styles.skills}>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Bootstrap</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>REST APIs</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Responsive Design</span>
                <span>Figma</span>
                <span>VS Code</span>
              </div>
            </div>

            {/* Certifications */}
            <div className={styles.section}>
              <h3 className={styles.title}>
                <FaCertificate />
                Certifications
              </h3>

              <div className={styles.item}>
                <h4>Frontend Web Development</h4>

                <span>Professional Training</span>

                <p>
                  Practical training covering HTML5, CSS3, JavaScript, React,
                  responsive web design, Git, GitHub, Node.js, Express and
                  modern frontend development through real-world projects.
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className={styles.section}>
              <h3 className={styles.title}>
                <FaCode />
                Technologies
              </h3>

              <div className={styles.skills}>
                <span>React Router</span>
                <span>Framer Motion</span>
                <span>Axios</span>
                <span>JSON</span>
                <span>REST API</span>
                <span>CSS Modules</span>
                <span>Vite</span>
                <span>npm</span>
              </div>
            </div>

            {/* Download */}
            <div className={styles.downloadBox}>
              <a
                href="/resume.pdf"
                download
                className={styles.downloadBtn}
              >
                <FaDownload />
                Download Resume (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Resume;