import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import styles from "./Experience.module.css";

const experiences = [
  {
    icon: <FaCode />,
    title: "Frontend Developer",
    company: "Black Marvy Tech",
    period: "2024 - Present",
    description:
      "Building responsive websites and modern web applications using React, JavaScript, HTML, CSS, Bootstrap, Node.js and Express.",
  },

  {
    icon: <FaGraduationCap />,
    title: "Medical Laboratory Science",
    company: "Ambrose Alli University",
    period: "2018 - 2024",
    description:
      "Completed Medical Laboratory Science while developing strong analytical, research and problem-solving skills.",
  },

  {
    icon: <FaBriefcase />,
    title: "Freelance Developer",
    company: "Remote Projects",
    period: "2025 - Present",
    description:
      "Helping individuals and businesses build modern websites, landing pages and web applications with clean UI and responsive design.",
  },
];

function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className="container">
        <div className={styles.heading}>
          <span>MY JOURNEY</span>

          <h2>Experience & Education</h2>

          <p>
            My journey combines technology, continuous learning and practical
            experience in solving real-world problems.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              <div className={styles.icon}>{item.icon}</div>

              <div className={styles.content}>
                <span>{item.period}</span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
