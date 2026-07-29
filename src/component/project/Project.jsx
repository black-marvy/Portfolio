import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiJavascript } from "react-icons/si";
import styles from "./Project.module.css";

const projects = [
  {
    title: "Prime Education Academy",
    category: "School Website",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    description:
      "A modern school website built with React featuring reusable components, responsive layouts and elegant UI.",

    github: "#",
    live: "#",

    tech: [
      <FaReact />,
      <SiJavascript />,
      <SiExpress />,
    ],
  },

  {
    title: "Book Library API",
    category: "Backend Project",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900",
    description:
      "REST API built with Node.js and Express supporting CRUD operations and JSON storage.",

    github: "#",
    live: "#",

    tech: [
      <FaNodeJs />,
      <SiExpress />,
    ],
  },

  {
    title: "Todo App",
    category: "React Project",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900",
    description:
      "Task management application consuming APIs with reusable React components.",

    github: "#",
    live: "#",

    tech: [
      <FaReact />,
      <SiJavascript />,
    ],
  },
];

function Project() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>PORTFOLIO</span>

          <h2>Featured Projects</h2>

          <p>
            Some of my recent projects demonstrating frontend and backend
            development skills.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
            >
              <div className={styles.imageBox}>
                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className={styles.category}>
                  {project.category}
                </span>
              </div>

              <div className={styles.content}>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className={styles.tech}>
                  {project.tech.map((icon, i) => (
                    <span key={i}>
                      {icon}
                    </span>
                  ))}
                </div>

                <div className={styles.buttons}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;