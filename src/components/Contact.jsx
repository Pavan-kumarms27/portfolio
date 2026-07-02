import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/sections.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: false, // Added tracking for honeypot
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 250);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Secondary layer: Fail silently or reject on frontend if bot filled it out
    if (formData.botcheck) {
      console.warn("Bot submission detected.");
      return;
    }

    setLoading(true);
    setError(false);

    const object = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(object),
      });

      const result = await response.json();

      if (result.success) {
        fireConfetti();
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          botcheck: false,
        });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-tag">
          <h2>CONTACT</h2>
        </span>

        <h2 className="section-title">Let's Build Something Amazing</h2>

        <div className="contact-wrapper">
          {/* LEFT: Contact details */}
          <motion.div
            className="contact-info glass"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Get In Touch</h3>

            <p>
              I'm always interested in internship opportunities, developer
              roles, freelance projects, and exciting collaborations.
            </p>

            <div className="contact-item">
              <FaEnvelope />
              <span>pavan.ms005@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span style={{ textWrap: "nowrap" }}>Bangalore, Karnataka</span>
            </div>

            <div className="contact-social">
              <a
                href="https://github.com/Pavan-kumarms27"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/pavan-kumar-m-s-18002529b"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:pavan.ms005@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Send Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Form / Success Card */}
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="form"
                className="contact-form glass"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Honeypot Anti-Spam Input Block */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="sr-only-honeypot"
                  tabIndex="-1"
                  autocomplete="off"
                  checked={formData.botcheck}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  rows="7"
                  name="message"
                  className="msgbox"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                {error && (
                  <motion.p
                    className="contact-error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{
                    scale: loading ? 1 : 1.02,
                  }}
                  whileTap={{
                    scale: loading ? 1 : 0.98,
                  }}
                >
                  {loading ? (
                    <>
                      <span className="loader"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="contact-success glass"
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <motion.div
                  className="success-icon"
                  initial={{
                    scale: 0,
                    rotate: -180,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                  }}
                >
                  ✓
                </motion.div>

                <h2>Message Sent!</h2>

                <p>
                  Thanks for reaching out! I'll get back to you as soon as
                  possible.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setSuccess(false);
                    setError(false);
                  }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Contact;
