import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import experience from "../data/experience";
import "../styles/sections.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-tag">
          <h2>EXPERIENCE</h2>
        </span>

        <h2 className="section-title">Internship Experience</h2>

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>

              <div className="timeline-card glass">
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <span className="timeline-date">{item.duration}</span>
                <span className="timeline-location">📍 {item.location}</span>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
