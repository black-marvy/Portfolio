import styles from "./Background.module.css";

function Background() {
  return (
    <>
      <div className={styles.grid}></div>

      <div className={styles.glowOne}></div>

      <div className={styles.glowTwo}></div>

      <div className={styles.glowThree}></div>
    </>
  );
}

export default Background;
