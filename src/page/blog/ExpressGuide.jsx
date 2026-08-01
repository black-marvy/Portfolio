import { motion } from "framer-motion";
import styles from "../../Styles/Article.module.css";

function ExpressGuide() {
  return (
    <section className={styles.article}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className={styles.category}>Node.js</span>

          <h1>Getting Started with Express.js</h1>

          <p className={styles.date}>July 2026 • 7 min read</p>

          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
            alt="Express.js"
          />

          <p>
            Express.js is one of the most popular Node.js frameworks for
            building web applications and REST APIs. It simplifies server-side
            development by providing routing, middleware and HTTP utilities.
          </p>

          <h2>Why Use Express?</h2>

          <p>
            Express reduces the amount of code needed to create web servers.
            Instead of writing everything manually, it provides simple methods
            for handling requests and responses.
          </p>

          <h2>Routing</h2>

          <p>
            Routes determine what happens when a user visits a particular URL.
            For example, you can create routes for the home page, about page,
            contact page or API endpoints.
          </p>

          <h2>Middleware</h2>

          <p>
            Middleware functions run between the request and the response. They
            can log requests, validate data, authenticate users or handle errors
            before sending a response.
          </p>

          <h2>REST APIs</h2>

          <p>
            Express makes it easy to build REST APIs using HTTP methods such as
            GET, POST, PATCH and DELETE to perform CRUD operations.
          </p>

          <h2>Conclusion</h2>

          <p>
            Express.js is an excellent framework for beginners and professionals
            alike. Combined with Node.js, it provides a powerful foundation for
            building scalable backend applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ExpressGuide;
