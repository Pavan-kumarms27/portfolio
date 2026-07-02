import { motion } from "framer-motion";
import skills from "../data/skills";
import "../styles/sections.css";
function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-tag">
          <h2>MY SKILLS</h2>
        </span>

        <h2 className="section-title">Technologies I Work With</h2>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              className="skill-card glass"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{group.category}</h3>

              <div className="skill-list">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
