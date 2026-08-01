
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaServer,
  FaRocket,
  FaCode,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import styles from "../Styles/Services.module.css";

const services = [
  {
    icon: <FaLaptopCode />,
    number: "01",
    title: "Frontend Development",
    description:
      "Modern, responsive websites and web applications built with React, JavaScript, HTML5 and CSS3.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: <FaPalette />,
    number: "02",
    title: "UI / UX Implementation",
    description:
      "Turning design concepts and Figma layouts into clean, accurate and responsive interfaces.",
    technologies: ["Figma", "React", "CSS", "Responsive UI"],
  },
  {
    icon: <FaMobileAlt />,
    number: "03",
    title: "Responsive Web Design",
    description:
      "Web experiences designed to work smoothly across desktops, tablets and mobile devices.",
    technologies: ["Responsive Design", "CSS", "Bootstrap", "Flexbox"],
  },
  {
    icon: <FaServer />,
    number: "04",
    title: "API Integration",
    description:
      "Connecting frontend applications with REST APIs, Express backends and external services.",
    technologies: ["REST API", "Axios", "Express", "Node.js"],
  },
  {
    icon: <FaRocket />,
    number: "05",
    title: "Website Optimization",
    description:
      "Improving website performance, responsiveness, accessibility and overall user experience.",
    technologies: ["Performance", "SEO", "Accessibility", "Optimization"],
  },
  {
    icon: <FaCode />,
    number: "06",
    title: "Clean & Reusable Code",
    description:
      "Building organized, reusable and maintainable components following modern development practices.",
    technologies: ["React", "Components", "Git", "Best Practices"],
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    text: "We understand your idea, goals, audience and project requirements.",
  },
  {
    number: "02",
    title: "Planning",
    text: "I break the project into clear sections, features and development steps.",
  },
  {
    number: "03",
    title: "Development",
    text: "I build the interface with clean code, responsive layouts and modern technologies.",
  },
  {
    number: "04",
    title: "Delivery",
    text: "The project is tested, polished and prepared for deployment or handover.",
  },
];

function Services() {
  return (
    <main className={styles.servicesPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.badge}>MY SERVICES</span>

            <h1>
              Digital Solutions
              <br />
              <span>Built With Purpose.</span>
            </h1>

            <p>
              I design and develop modern digital experiences that combine
              clean interfaces, responsive layouts and reliable functionality.
            </p>

            <div className={styles.heroButtons}>
              <a href="/contact" className={styles.primaryButton}>
                Start a Project
                <FaArrowRight />
              </a>

              <a href="/projects" className={styles.secondaryButton}>
                View My Work
              </a>
            </div>
          </motion.div>
        </div>

        <div className={styles.heroGlow}></div>
      </section>

      {/* SERVICES */}
      <section className={styles.servicesSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>WHAT I OFFER</span>

            <h2>Services Designed For Modern Web Experiences</h2>

            <p>
              From simple landing pages to complete React applications, I
              focus on building websites that look professional and work
              smoothly across devices.
            </p>
          </motion.div>

          <div className={styles.grid}>
            {services.map((service, index) => (
              <motion.article
                className={styles.card}
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.number}>{service.number}</span>

                  <div className={styles.icon}>{service.icon}</div>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className={styles.technologies}>
                  {service.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a href="/contact" className={styles.cardLink}>
                  Discuss a project
                  <FaArrowRight />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyGrid}>
            <motion.div
              className={styles.whyContent}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className={styles.sectionLabel}>WHY BLACK MARVY</span>

              <h2>
                More Than Just
                <span> Writing Code.</span>
              </h2>

              <p>
                A good website should not only look attractive. It should be
                easy to use, responsive, maintainable and built around the
                needs of the people using it.
              </p>

              <p>
                I approach every project with attention to structure,
                usability, responsiveness and clean implementation.
              </p>

              <a href="/contact" className={styles.primaryButton}>
                Let's Work Together
                <FaArrowRight />
              </a>
            </motion.div>

            <motion.div
              className={styles.advantages}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.advantage}>
                <FaCheck />
                <div>
                  <h3>Responsive First</h3>
                  <p>Designed to work across different screen sizes.</p>
                </div>
              </div>

              <div className={styles.advantage}>
                <FaCheck />
                <div>
                  <h3>Clean Architecture</h3>
                  <p>Organized and reusable components that are easier to maintain.</p>
                </div>
              </div>

              <div className={styles.advantage}>
                <FaCheck />
                <div>
                  <h3>User Focused</h3>
                  <p>Interfaces built with usability and clarity in mind.</p>
                </div>
              </div>

              <div className={styles.advantage}>
                <FaCheck />
                <div>
                  <h3>Modern Technologies</h3>
                  <p>Using current tools and development practices.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>MY PROCESS</span>

            <h2>From Idea To Launch</h2>

            <p>
              A simple and transparent approach to turning ideas into useful
              digital products.
            </p>
          </motion.div>

          <div className={styles.processGrid}>
            {process.map((item, index) => (
              <motion.div
                className={styles.processCard}
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span>HAVE A PROJECT?</span>

            <h2>Let's Build Something Great.</h2>

            <p>
              Have an idea, website or application you want to bring to life?
              Let's talk about it.
            </p>

            <a href="/contact" className={styles.ctaButton}>
              Get In Touch
              <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Services;

