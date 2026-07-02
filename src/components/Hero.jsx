import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/images/profile.webp";
import "../styles/hero.css";

function Hero() {
  const [resumeModal, setResumeModal] = useState(false);

  return (
    <>
      <section id="hero" className="hero">
        <div className="container hero-container">
          {/* LEFT */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">🚀 Available for Internships</span>

            <p className="hero-small-title">
              Crafting Modern Digital Experiences
            </p>

            <h1 className="hero-title">
              Pavan
              <br />
              <span>Kumar M S</span>
            </h1>

            <h2 className="hero-role">Full-Stack Developer</h2>

            <p className="hero-description">
              I'm an aspiring Full-Stack Developer passionate about building
              scalable, responsive, and user-focused web applications using
              React.js, Node.js, Spring Boot, MongoDB, and MySQL.
              <br />I enjoy transforming ideas into clean, reliable software
              while continuously learning modern technologies and best
              practices.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="secondary-btn">
                Contact Me
                <FaArrowRight />
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/Pavan-kumarms27"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/pavan-kumar-m-s-18002529b"
                target="_blank"
                rel="noreferrer"
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

          {/* RIGHT */}

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-glow"></div>

            <motion.div
              className="profile-ring"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src={profile} alt="Pavan Kumar M S" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
