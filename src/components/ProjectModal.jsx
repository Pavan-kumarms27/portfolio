import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectModal({ project, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal glass"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={onClose}>
              <FaTimes />
            </button>

            <div className="modal-image">
              <img src={project.image} alt={project.title} />
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <h3>Tech Stack</h3>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <h3>Features</h3>

            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="modal-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub />
                GitHub
              </a>

              <a href={project.live} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
