import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiBootstrap, SiExpress, SiVite } from "react-icons/si";

import styles from "./Skill.module.css";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    level: "95%",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    level: "90%",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    level: "85%",
  },
  {
    icon: <FaReact />,
    name: "React",
    level: "85%",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    level: "75%",
  },
  {
    icon: <SiExpress />,
    name: "Express",
    level: "70%",
  },
  {
    icon: <SiBootstrap />,
    name: "Bootstrap",
    level: "90%",
  },
  {
    icon: <SiVite />,
    name: "Vite",
    level: "85%",
  },
  {
    icon: <FaGithub />,
    name: "Git & GitHub",
    level: "80%",
  },
];

function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>MY SKILLS</span>

          <h2>Technologies I Work With</h2>

          <p>
            I build responsive, modern and scalable web applications using
            today's frontend technologies and continuously improve my skills
            through real-world projects.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <div className={styles.top}>
                <div className={styles.icon}>{skill.icon}</div>

                <div>
                  <h3>{skill.name}</h3>
                  <span>{skill.level}</span>
                </div>
              </div>

              <div className={styles.progress}>
                <motion.div
                  className={styles.fill}
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
