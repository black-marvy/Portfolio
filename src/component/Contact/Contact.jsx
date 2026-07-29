import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        {/* Heading */}

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>CONTACT</span>

          <h2>Let's Build Something Amazing</h2>

          <p>
            Have a project, internship opportunity or collaboration in mind? I'd
            love to hear from you.
          </p>
        </motion.div>

        <div className={styles.wrapper}>
          {/* Left Side */}

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.card}>
              <FaEnvelope className={styles.icon} />

              <div>
                <h3>Email</h3>
                <p>emmanuelmarvel91@gmail.com</p>
              </div>
            </div>

            <div className={styles.card}>
              <FaPhoneAlt className={styles.icon} />

              <div>
                <h3>Phone</h3>
                <p>+234 XXX XXX XXXX</p>
              </div>
            </div>

            <div className={styles.card}>
              <FaMapMarkerAlt className={styles.icon} />

              <div>
                <h3>Location</h3>
                <p>Nigeria</p>
              </div>
            </div>

            <div className={styles.socials}>
              <a
                href="https://github.com/black-marvy"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/emmanuel-marvel-6b49353b5/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.form
            className={styles.form}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <input type="text" placeholder="Subject" />

            <textarea rows="6" placeholder="Write your message..."></textarea>

            <button type="submit">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
