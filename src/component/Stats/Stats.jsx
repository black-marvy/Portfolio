import { motion } from "framer-motion";
import {
  FaFolderOpen,
  FaLaptopCode,
  FaCodeBranch,
  FaAward,
} from "react-icons/fa";

import styles from "./Stat.module.css";

const stats = [
  {
    icon: <FaFolderOpen />,
    number: "15+",
    title: "Projects Completed",
    text: "Modern React and Node.js projects built while learning and improving.",
  },

  {
    icon: <FaLaptopCode />,
    number: "2+",
    title: "Years Learning",
    text: "Consistently building practical applications and improving every day.",
  },

  {
    icon: <FaCodeBranch />,
    number: "10+",
    title: "Technologies",
    text: "React, JavaScript, Node.js, Express, Git, HTML, CSS and more.",
  },

  {
    icon: <FaAward />,
    number: "100%",
    title: "Commitment",
    text: "Dedicated to writing clean code and delivering quality solutions.",
  },
];

function Stats() {
  return (
    <section className={`section ${styles.stats}`} id="stats">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>MY JOURNEY</span>

          <h2>Numbers That Reflect My Growth</h2>

          <p>
            Every project has strengthened my problem-solving ability, technical
            skills and passion for building modern web applications.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
            >
              <div className={styles.icon}>{item.icon}</div>

              <h2>{item.number}</h2>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
