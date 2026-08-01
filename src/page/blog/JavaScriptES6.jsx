import { motion } from "framer-motion";
import styles from "../../Styles/Article.module.css";

function JavaScriptES6() {
  return (
    <section className={styles.article}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className={styles.category}>JavaScript</span>

          <h1>JavaScript ES6 Features Every Developer Should Know</h1>

          <p className={styles.date}>July 2026 • 6 min read</p>

          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200"
            alt="JavaScript"
          />

          <p>
            ES6 (ECMAScript 2015) introduced powerful features that make
            JavaScript cleaner, shorter and easier to maintain. Most modern
            JavaScript applications rely on these features.
          </p>

          <h2>Arrow Functions</h2>

          <p>
            Arrow functions provide a shorter syntax for writing functions while
            making code easier to read.
          </p>

          <h2>Destructuring</h2>

          <p>
            Destructuring allows you to extract values from arrays and objects
            into variables with very little code.
          </p>

          <h2>Template Literals</h2>

          <p>
            Template literals make it easy to combine strings and variables
            using backticks instead of long string concatenation.
          </p>

          <h2>Modules</h2>

          <p>
            ES6 modules let developers split applications into reusable files
            using <strong>import</strong> and <strong>export</strong>.
          </p>

          <h2>Conclusion</h2>

          <p>
            Learning ES6 is essential because React, Node.js and modern frontend
            frameworks depend heavily on these features.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default JavaScriptES6;
