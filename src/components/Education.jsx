import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import education from "../data/education";
import "../styles/sections.css";
function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <span className="section-tag">
          <h2>EDUCATION</h2>
        </span>

        <h2 className="section-title">Academic Journey</h2>

        <div className="education-wrapper">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="education-card glass"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="education-header">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>

                <div>
                  <h3>{item.degree}</h3>
                  <h4>{item.institution}</h4>
                </div>
              </div>

              <div className="education-meta">
                <span>
                  <FaCalendarAlt />
                  {item.duration}
                </span>

                <span>
                  <FaMapMarkerAlt />
                  {item.location}
                </span>
              </div>

              <div className="education-grade">
                GPA: <strong>{item.grade}</strong>
              </div>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
