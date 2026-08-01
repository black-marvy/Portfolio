import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

import styles from "./Certificate.module.css";

const certificates = [
  {
    title: "Frontend Web Development",
    issuer: "Self Learning",
    date: "2024",
    description:
      "Completed practical training in HTML, CSS, JavaScript, React, responsive design and modern frontend development.",

    link: "#",
  },

  {
    title: "Medical Laboratory Science",
    issuer: "Ambrose Alli University",
    date: "2018 - 2024",
    description:
      "Bachelor's degree in Medical Laboratory Science with practical laboratory training and analytical skills.",

    link: "#",
  },

  {
    title: "React & Modern JavaScript",
    issuer: "Personal Projects",
    date: "2025",
    description:
      "Built multiple real-world React applications using Hooks, React Router, APIs, Framer Motion, Vite and reusable components.",

    link: "#",
  },
];

function Certificate() {
  return (
    <section className={styles.certificate} id="certificate">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>CERTIFICATES</span>

          <h2>Education & Certifications</h2>

          <p>
            My academic background and continuous learning journey have equipped
            me with both technical expertise and analytical problem-solving
            skills.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {certificates.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
            >
              <div className={styles.icon}>
                <FaAward />
              </div>

              <span className={styles.date}>{item.date}</span>

              <h3>{item.title}</h3>

              <h4>{item.issuer}</h4>

              <p>{item.description}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={styles.button}
              >
                <FaExternalLinkAlt />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
