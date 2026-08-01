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
      "Building modern, responsive and high-performance websites using React, JavaScript, HTML5 and CSS3.",
  },

  {
    icon: <FaPalette />,
    title: "UI / UX Implementation",
    description:
      "Transforming Figma and design concepts into beautiful, pixel-perfect and responsive user interfaces.",
  },

  {
    icon: <FaMobileAlt />,
    title: "Responsive Web Design",
    description:
      "Creating websites that look and perform perfectly across desktops, tablets and mobile devices.",
  },

  {
    icon: <FaServer />,
    title: "API Integration",
    description:
      "Connecting frontend applications with REST APIs, Express backends and third-party services.",
  },

  {
    icon: <FaRocket />,
    title: "Website Optimization",
    description:
      "Improving loading speed, accessibility, SEO and overall website performance for better user experience.",
  },

  {
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "Developing scalable, reusable and maintainable code following modern React best practices.",
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

          <h2>What I Can Do For You</h2>

          <p>
            I specialize in creating modern, responsive and user-focused web
            applications using the latest frontend technologies. From beautiful
            user interfaces to scalable React applications, I deliver solutions
            that are fast, clean and reliable.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <motion.div
                className={styles.icon}
                whileHover={{
                  rotate: -10,
                  scale: 1.15,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {service.icon}
              </motion.div>

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
