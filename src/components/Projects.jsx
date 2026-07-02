import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";
import ProjectModal from "./ProjectModal";
import "../styles/sections.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-tag">
          <h2>FEATURED PROJECTS</h2>
        </span>

        <h2 className="section-title">Things I've Built</h2>

        <p className="section-description">
          A collection of projects showcasing full-stack development, responsive
          UI design and scalable backend architecture.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card glass"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>

                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <button
                  className="view-project"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

export default Projects;
