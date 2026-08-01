import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import styles from "../Styles/Contact.module.css";

function Contact() {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Send message to your email
      await emailjs.send("service_0h4chl5", "template_l534sfn", form, {
        publicKey: "pNuIRYIUBYY4aB9dh",
      });

      // Send automatic reply to the client
      await emailjs.send("service_0h4chl5", "template_m0axxrh", form, {
        publicKey: "pNuIRYIUBYY4aB9dh",
      });

      alert("✅ Message sent successfully!");

      setForm({
        Name: "",
        Email: "",
        Subject: "",
        Message: "",
      });
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>CONTACT</span>

          <h2>Let's Work Together</h2>

          <p>
            I'm available for freelance work, internships, junior developer
            roles and collaborations. Feel free to contact me.
          </p>
        </motion.div>

        <div className={styles.wrapper}>
          {/* CONTACT INFORMATION */}

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.card}>
              <FaEnvelope className={styles.icon} />

              <div>
                <h3>Email</h3>
                
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=emmanuelmarvel91@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  emmanuelmarvel91@gmail.com
                </a>
                
              </div>
            </div>

            <div className={styles.card}>
              <FaPhoneAlt className={styles.icon} />

              <div>
                <h3>Phone</h3>

                <a href="tel:+2348144363077" className={styles.link}>
                  +234 814 436 3077
                </a>
              </div>
            </div>

            <div className={styles.card}>
              <FaMapMarkerAlt className={styles.icon} />

              <div>
                <h3>Location</h3>

                <p>Benin City, Edo State, Nigeria</p>
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

          {/* CONTACT FORM */}

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                value={form.Name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                value={form.Email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="Subject"
                placeholder="Subject"
                value={form.Subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <textarea
                rows="6"
                name="Message"
                placeholder="Write your message..."
                value={form.Message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.button} disabled={loading}>
              <FaPaperPlane />

              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
