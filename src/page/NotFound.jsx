import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

import styles from "../Styles/NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.notFound}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            404
          </motion.h1>

          <h2>Oops! Page Not Found</h2>

          <p>
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back to exploring the Black Marvy portfolio.
          </p>

          <div className={styles.buttons}>
            <Link to="/" className={styles.primary}>
              <FaHome />
              Back Home
            </Link>

            <button
              className={styles.secondary}
              onClick={() => window.history.back()}
            >
              <FaArrowLeft />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NotFound;