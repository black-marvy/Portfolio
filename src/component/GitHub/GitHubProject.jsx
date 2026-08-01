import { motion } from "framer-motion";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
} from "react-icons/fa";

import styles from "./GitHubProject.module.css";

const repositories = [
  {
    name: "School Website",
    description:
      "A modern Christian school website featuring reusable React components, animations, responsive layouts and a premium user experience.",
    language: "React",
    stars: 8,
    forks: 3,
    github: "https://github.com/black-marvy/schoolweb",
  },

  {
    name: "Todo App",
    description:
      "A responsive task management application built with React Hooks, reusable components and API integration for efficient productivity.",
    language: "React",
    stars: 5,
    forks: 2,
    github: "https://github.com/black-marvy/todolist-strapi--react",
  },

  {
    name: "Black Marvy Portfolio",
    description:
      "A premium developer portfolio built with React, Framer Motion and modern glassmorphism showcasing projects, skills, experience and professional services.",
    language: "React",
    stars: 12,
    forks: 4,
    github: "https://github.com/black-marvy",
  },
];

function GitHub() {
  return (
    <section className={styles.github} id="github">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>GITHUB</span>
          <h2>Featured GitHub Repositories</h2>

          <p>
            Explore some of my best React, JavaScript and Node.js projects,
            demonstrating clean architecture, reusable components and modern web
            development practices.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {repositories.map((repo, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className={styles.top}>
                <FaGithub className={styles.githubIcon} />

                <a href={repo.github} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>

              <h3>{repo.name}</h3>

              <p>{repo.description}</p>

              <span className={styles.language}>{repo.language}</span>

              <div className={styles.bottom}>
                <span>
                  <FaStar />
                  {repo.stars}
                </span>

                <span>
                  <FaCodeBranch />
                  {repo.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.buttonBox}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/black-marvy"
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default GitHub;
