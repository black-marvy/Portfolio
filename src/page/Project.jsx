import { motion } from "framer-motion";

import Projects from "../component/project/Project";
import GitHubProjects from "../component/GitHub/GitHubProject";

import styles from "./Project.module.css";

function ProjectPage() {
  return (
    <>
      {/* Hero */}

      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span>MY PORTFOLIO</span>

            <h1>
              Featured <span>Projects</span>
            </h1>

            <p>
              A collection of responsive websites, React applications and
              frontend projects that demonstrate my skills in building modern,
              scalable and user-friendly web experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}

      <section className={`section ${styles.projects}`}>
        <Projects />
      </section>

      {/* GitHub */}

      <section className={`section ${styles.github}`}>
        <GitHubProjects />
      </section>

      {/* CTA */}

      <section className={`section ${styles.cta}`}>
        <div className="container">
          <motion.div
            className={styles.box}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Have a Project in Mind?</h2>

            <p>
              I'm available for internships, freelance opportunities and junior
              frontend developer roles. Let's build something amazing together.
            </p>

            <a href="/contact" className={styles.button}>
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ProjectPage;
