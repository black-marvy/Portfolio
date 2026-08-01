import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaReact,
  FaNodeJs,
  FaArrowRight,
} from "react-icons/fa";

import { SiJavascript } from "react-icons/si";

import styles from "../Styles/Blog.module.css";

const articles = [
  {
    id: 1,
    icon: <FaReact />,
    title: "Understanding React Components",
    date: "July 2026",
    category: "React",

    description:
      "Learn how reusable React components make applications easier to build, maintain and scale.",

    slug: "/blog/react-components",
  },

  {
    id: 2,
    icon: <SiJavascript />,
    title: "JavaScript ES6 Features",
    date: "July 2026",
    category: "JavaScript",

    description:
      "Discover the modern JavaScript features every frontend developer should understand.",

    slug: "/blog/javascript-es6",
  },

  {
    id: 3,
    icon: <FaNodeJs />,
    title: "Getting Started with Express.js",
    date: "July 2026",
    category: "Node.js",

    description:
      "Learn the fundamentals of Express including routing, middleware and building REST APIs.",

    slug: "/blog/express-guide",
  },
];

function Blog() {
  return (
    <section className={styles.blog}>
      <div className="container">

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>BLOG</span>

          <h2>Technical Articles</h2>

          <p>
            I enjoy documenting my learning journey while building modern web
            applications with React, JavaScript and Node.js.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className={styles.icon}>
                {article.icon}
              </div>

              <span className={styles.category}>
                {article.category}
              </span>

              <h3>{article.title}</h3>

              <p>{article.description}</p>

              <div className={styles.footer}>
                <small>{article.date}</small>

                <Link
                  to={article.slug}
                  className={styles.readBtn}
                >
                  Read More
                  <FaArrowRight />
                </Link>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blog;