import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
  FaDownload,
} from "react-icons/fa";
import profile from "../assets/image/profile.png";
import styles from "./About.module.css";

function About() {
  return (
    <>
      {/* Hero */}

      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>ABOUT BLACK MARVY TECH</span>

            <h1>
              Passionate About Building
              <span> Modern Web Experiences</span>
            </h1>

            <p>
              I am a Frontend Developer with experience building responsive,
              user-friendly and modern web applications using React, JavaScript,
              Node.js and Express. I enjoy turning ideas into beautiful digital
              experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}

      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.grid}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={profile} alt="Black Marvy" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>My Story</h2>

              <p>
                My journey into technology started with a curiosity about how
                websites work. Over time, I developed a passion for building
                responsive, accessible and visually appealing applications.
              </p>

              <p>
                Alongside my studies in Medical Laboratory Science, I have
                continued to grow as a developer by learning modern frontend
                technologies and building practical projects.
              </p>

              <a href="/resume.pdf" className={styles.button}>
                <FaDownload />
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}

      <section className={`section ${styles.education}`}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span>EDUCATION</span>

            <h2>My Learning Journey</h2>

            <p>
              My academic background and continuous learning have shaped both my
              technical and problem-solving skills.
            </p>
          </div>

          <div className={styles.timeline}>
            <motion.div
              className={styles.timelineCard}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Medical Laboratory Science</h3>

              <span>Ambrose Alli University</span>

              <small>2018 – 2024</small>

              <p>
                Studied Medical Laboratory Science while developing a strong
                interest in software engineering, web development and
                problem-solving.
              </p>
            </motion.div>

            <motion.div
              className={styles.timelineCard}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Frontend Development</h3>

              <span>Self Learning</span>

              <small>2024 – Present</small>

              <p>
                Learning React, JavaScript, Node.js, Express and modern web
                technologies through real-world projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}

      <section className={`section ${styles.experience}`}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span>EXPERIENCE</span>

            <h2>Professional Experience</h2>

            <p>
              Practical experience gained through projects, internships,
              leadership, and continuous learning.
            </p>
          </div>

          <div className={styles.timeline}>
            <motion.div
              className={styles.timelineCard}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Frontend Developer</h3>

              <span>Black Marvy Tech</span>

              <small>2024 – Present</small>

              <p>
                Building responsive and modern websites using React, JavaScript,
                HTML, CSS, Node.js and Express while continuously improving UI,
                performance and user experience.
              </p>
            </motion.div>

            <motion.div
              className={styles.timelineCard}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Medical Laboratory Internship</h3>

              <span>Clinical Laboratory</span>

              <small>Internship</small>

              <p>
                Assisted Medical Laboratory Scientists in specimen processing,
                quality control, laboratory documentation and patient sample
                management.
              </p>
            </motion.div>

            <motion.div
              className={styles.timelineCard}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Student Leadership</h3>

              <span>NIMELSSA PEC Chairman</span>

              <small>Leadership Role</small>

              <p>
                Led meetings, coordinated student activities, represented
                students and strengthened communication, teamwork and leadership
                skills.
              </p>
            </motion.div>

            <motion.div
              className={styles.timelineCard}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Continuous Learning</h3>

              <span>Self Development</span>

              <small>Ongoing</small>

              <p>
                Continuously learning React, Express, APIs, Git, Node.js and
                modern frontend development through practical projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Highlights */}
      <section className={`section ${styles.highlights}`}>
        <div className="container">
          <div className={styles.cards}>
            <motion.div className={styles.card} whileHover={{ y: -10 }}>
              <FaLaptopCode />

              <h3>Frontend Development</h3>

              <p>
                Building responsive websites using React, JavaScript, HTML and
                CSS.
              </p>
            </motion.div>

            <motion.div className={styles.card} whileHover={{ y: -10 }}>
              <FaGraduationCap />

              <h3>Education</h3>

              <p>
                Medical Laboratory Science graduate with a strong passion for
                software development.
              </p>
            </motion.div>

            <motion.div className={styles.card} whileHover={{ y: -10 }}>
              <FaAward />

              <h3>Continuous Learning</h3>

              <p>
                Always improving my skills through projects, courses and
                practical experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Skills */}

      <section className={styles.skills}>
        <div className={styles.sectionHeading}>
          <span>TECHNICAL SKILLS</span>

          <h2>My Technical Stack</h2>

          <p>
            These are the technologies I use to build responsive, modern and
            high-performance web applications.
          </p>
        </div>

        <div className={styles.skillsContainer}>
          <div className={styles.skill}>
            <div className={styles.skillHeader}>
              <h3>HTML5</h3>
              <span>95%</span>
            </div>

            <div className={styles.progress}>
              <div className={`${styles.progressBar} ${styles.html}`}></div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skillHeader}>
              <h3>CSS3</h3>
              <span>90%</span>
            </div>

            <div className={styles.progress}>
              <div className={`${styles.progressBar} ${styles.css}`}></div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skillHeader}>
              <h3>JavaScript</h3>
              <span>85%</span>
            </div>

            <div className={styles.progress}>
              <div
                className={`${styles.progressBar} ${styles.javascript}`}
              ></div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skillHeader}>
              <h3>React</h3>
              <span>90%</span>
            </div>

            <div className={styles.progress}>
              <div className={`${styles.progressBar} ${styles.react}`}></div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skillHeader}>
              <h3>Node.js</h3>
              <span>80%</span>
            </div>

            <div className={styles.progress}>
              <div className={`${styles.progressBar} ${styles.node}`}></div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skillHeader}>
              <h3>Express.js</h3>
              <span>75%</span>
            </div>

            <div className={styles.progress}>
              <div className={`${styles.progressBar} ${styles.express}`}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
