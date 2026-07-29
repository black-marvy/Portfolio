import { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

import styles from "./GitHubProject.module.css";

function GitHubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/black-marvy/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setRepos(sorted);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.github}>
      <div className="container">
        <div className={styles.heading}>
          <span>GITHUB</span>

          <h2>Latest Repositories</h2>

          <p>My recent projects directly from GitHub.</p>
        </div>

        <div className={styles.grid}>
          {repos.map((repo) => (
            <article key={repo.id} className={styles.card}>
              <h3>{repo.name}</h3>

              <p>{repo.description || "No description available."}</p>

              <div className={styles.stats}>
                <span>
                  <FaStar />
                  {repo.stargazers_count}
                </span>

                <span>
                  <FaCodeBranch />
                  {repo.forks_count}
                </span>
              </div>

              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <FaGithub />
                View Repository
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GitHubProjects;
