import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaServer,
  FaRocket,
  FaCode,
} from "react-icons/fa";

import styles from "./Service.module.css";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "Responsive and modern React applications with reusable components and clean architecture.",
  },

  {
    icon: <FaPalette />,
    title: "UI Implementation",
    description:
      "Transforming designs into clean, responsive and accessible user interfaces.",
  },

  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Websites that work beautifully across desktop, tablet and mobile devices.",
  },

  {
    icon: <FaServer />,
    title: "REST API Integration",
    description:
      "Connecting frontend applications to backend services using modern APIs.",
  },

  {
    icon: <FaRocket />,
    title: "Performance",
    description:
      "Optimising websites for speed, responsiveness and smooth user experience.",
  },

  {
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable and well-structured React applications.",
  },
];

function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>WHAT I DO</span>

          <h2>Services</h2>

          <p>
            I build modern web applications with a focus on performance, clean
            design and user experience.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <div className={styles.icon}>{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
