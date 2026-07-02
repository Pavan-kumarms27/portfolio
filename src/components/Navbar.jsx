import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import "../styles/navbar.css";

const links = [
  { name: "Home", id: "hero", cursor: "Home" },
  { name: "About", id: "about", cursor: "About" },
  { name: "Skills", id: "skills", cursor: "Skills" },
  { name: "Experience", id: "experience", cursor: "Journey" },
  { name: "Education", id: "education", cursor: "Education" },
  { name: "Projects", id: "projects", cursor: "View Work" },
  { name: "Contact", id: "contact", cursor: "Let's Talk" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((item) => document.getElementById(item.id));

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <div className="container nav-wrapper">
        <h2 className="logo" onClick={() => scrollTo("hero")}>
          Pavan<span>.</span>
        </h2>

        {/* Mobile Toggle Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={active === link.id ? "active-link" : ""}
              data-cursor={link.cursor}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
