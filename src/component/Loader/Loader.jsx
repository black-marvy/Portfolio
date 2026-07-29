import { motion } from "framer-motion";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className={styles.logo}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <span>Black</span> Marvy Tech
      </motion.h1>

      <div className={styles.bar}>
        <motion.div
          className={styles.progress}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}

export default Loader;
