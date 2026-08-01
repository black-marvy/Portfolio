import { motion } from "framer-motion";
import styles from "../../Styles/Article.module.css";

function ReactComponents() {
  return (
    <section className={styles.article}>
      <div className="container">

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className={styles.category}>React</span>

          <h1>Understanding React Components</h1>

          <p className={styles.date}>
            July 2026 • 5 min read
          </p>

          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200"
            alt="React"
          />

          <p>
            React is a JavaScript library used for building user interfaces.
            Everything in React is built using components.
          </p>

          <h2>What is a Component?</h2>

          <p>
            A component is a reusable piece of UI. Instead of writing the same
            HTML repeatedly, you create one component and reuse it throughout
            your application.
          </p>

          <h2>Benefits</h2>

          <ul>
            <li>Reusable code</li>
            <li>Easy maintenance</li>
            <li>Cleaner project structure</li>
            <li>Faster development</li>
          </ul>

          <h2>Conclusion</h2>

          <p>
            Mastering components is the first major step toward becoming a React
            developer.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default ReactComponents;