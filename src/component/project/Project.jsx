import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";

import { SiJavascript, SiBootstrap, SiExpress } from "react-icons/si";

import styles from "./Project.module.css";
import schoolapp from "../../assets/image/schoolapp.png";

const projects = [
  {
    title: "Black Marvy Portfolio",
    featured: true,
    category: "Personal Portfolio",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    description:
      "A premium personal portfolio built with React, Framer Motion and modern glassmorphism UI showcasing projects, skills, experience and GitHub repositories.",
    github: "https://github.com/black-marvy",
    live: "#",
    tech: [
      <FaReact key="1" />,
      <SiJavascript key="2" />,
      <SiBootstrap key="3" />,
    ],
  },

  {
    title: "Prime Education Academy",
    featured: false,
    category: "Frontend • React",
    image: schoolapp,
    description:
      "A modern Christian school website featuring responsive layouts, reusable components, routing, animations and elegant user interface.",
    github: "https://github.com/black-marvy/schoolweb",
    live: "#",
    tech: [
      <FaReact key="1" />,
      <SiJavascript key="2" />,
      <SiBootstrap key="3" />,
    ],
  },

  {
    title: "Customer Dashboard",
    featured: false,
    category: "React Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    description:
      "Responsive analytics dashboard with reusable cards, statistics and modern business UI.",
    github: "#",
    live: "#",
    tech: [<FaReact key="1" />, <SiJavascript key="2" />],
  },

  {
    title: "Task Management App",
    featured: false,
    category: "React Application",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200",
    description:
      "Modern task management application built with React using reusable components, hooks and responsive layouts.",
    github: "https://github.com/black-marvy/todolist-strapi--react",
    live: "#",
    tech: [<FaReact key="1" />, <SiJavascript key="2" />],
  },

  {
    title: "REST API Backend",
    featured: false,
    category: "Backend • Node.js",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200",
    description:
      "REST API built with Node.js and Express implementing CRUD operations, middleware and routing.",
    github: "#",
    live: "#",
    tech: [<FaNodeJs key="1" />, <SiExpress key="2" />],
  },

  {
    title: "Landing Page Collection",
    featured: false,
    category: "UI Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    description:
      "A collection of responsive landing pages created with HTML, CSS, JavaScript and Bootstrap.",
    github: "#",
    live: "#",
    tech: [<SiBootstrap key="1" />, <SiJavascript key="2" />],
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
            A collection of modern frontend and backend projects showcasing my
            experience in React, JavaScript, Node.js and responsive web
            development.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className={styles.imageBox}>
                <img src={project.image} alt={project.title} />

                <div className={styles.overlay}>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.overlayBtn}
                  >
                    <FaExternalLinkAlt />
                    View Project
                  </a>
                </div>

                <span className={styles.category}>{project.category}</span>

                {project.featured && (
                  <span className={styles.featured}>★ Featured</span>
                )}
              </div>

              <div className={styles.content}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className={styles.tech}>
                  {project.tech.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>

                <div className={styles.buttons}>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                    GitHub
                  </a>

                  <a href={project.live} target="_blank" rel="noreferrer">
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
