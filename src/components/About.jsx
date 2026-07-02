import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaDatabase, FaServer } from "react-icons/fa";
import "../styles/sections.css";

function About() {
  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend",
      text: "Building responsive and interactive user interfaces with React.js, HTML, CSS and JavaScript.",
    },
    {
      icon: <FaServer />,
      title: "Backend",
      text: "Developing REST APIs using Node.js, Express.js and Spring Boot.",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      text: "Experienced with MySQL, MongoDB and backend optimization.",
    },
    {
      icon: <FaCode />,
      title: "Problem Solving",
      text: "Focused on writing clean, scalable and efficient code.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">
            <h2>ABOUT ME</h2>
          </span>

          <h2 className="section-title">
            Passionate About Building Modern Web Applications
          </h2>

          <p className="about-text">
            I'm <strong>Pavan Kumar M S</strong>, a Bachelor of Computer
            Applications student and an aspiring Full-Stack Developer. I enjoy
            building responsive, scalable and user-centric web applications
            using modern technologies such as React.js, Node.js, Spring Boot,
            MySQL and MongoDB.
          </p>
        </motion.div>

        <div className="about-grid">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="about-card glass"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="about-icon">{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
