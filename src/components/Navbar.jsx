import { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "../styles/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "certificates",
        "contact",
      ];

      for (const id of sections) {
        const el = document.getElementById(id);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveLink(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (id) => {
    setActiveLink(id);
    setMobileOpen(false);

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* Logo */}
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            handleClick("home");
          }}
        >
          <span className="logo-mark">KNS</span>
        </a>

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${
                  activeLink === link.id ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.id);
                }}
              >
                {link.label}
                <span className="nav-link-dot"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;