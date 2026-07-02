import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <h2>
          Pavan<span>.</span>
        </h2>

        <p>Full-Stack Developer • React • Node.js • Spring Boot</p>

        <div className="footer-social">
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
        </div>

        <small>
          Made with <FaHeart /> by Pavan Kumar M S © 2026
        </small>
      </div>
    </footer>
  );
}

export default Footer;
