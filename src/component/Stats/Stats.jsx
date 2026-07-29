import styles from "./Stat.module.css";

const stats = [
  {
    number: "15+",
    title: "Projects Completed",
  },
  {
    number: "2+",
    title: "Years Learning",
  },
  {
    number: "10+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Dedication",
  },
];

function Stats() {
  return (
    <section className={`section ${styles.stats}`} id="stats">
      <div className="container">
        <div className={styles.heading}>
          <span>MY JOURNEY</span>

          <h2>Numbers That Reflect My Growth</h2>

          <p>
            Every project has helped me improve my skills and gain practical
            experience in modern web development.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((item, index) => (
            <div key={index} className={styles.card}>
              <h2>{item.number}</h2>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;