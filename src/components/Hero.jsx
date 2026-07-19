import { FiDownload, FiArrowRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Hero.css";

import heroImage from "../assets/image.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container container">
        <div className="hero-grid">

          {/* Text Content */}
          <div className="hero-text fade-up">

            {/* Availability Badge */}
            <a href="#contact" className="hero-badge">
              <span className="hero-badge-dot"></span>
              Open to internships & opportunities
            </a>

            {/* Main Title */}
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Kashaf</span>
              <br />
              <span className="hero-name accent">Narmeen Saleh</span>
            </h1>

            {/* Animated Roles */}
            <div className="hero-typed">
              <span className="typed-label">I am a</span>

              <span className="typed-roles">
                <span>Computer Science Student</span>
                <span>Aspiring Full Stack Developer</span>
                <span>Exploring Artificial Intelligence</span>
              </span>
            </div>

            {/* Introduction */}
            <p className="hero-intro">
              I'm a Computer Science student who enjoys turning ideas into real
              projects. I work with web technologies, explore AI, and learn by
              building things that solve practical problems.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">

              {/* Resume */}
              <a
                href="/assets/Kashaf-Resume.pdf"
                download="Kashaf-Narmeen-Saleh-Resume.pdf"
                className="btn btn-primary"
              >
                <FiDownload />
                Download Resume
              </a>

              {/* Projects */}
              <a href="#projects" className="btn btn-secondary">
                View Projects
                <FiArrowRight />
              </a>

              {/* Contact */}
              <a href="#contact" className="btn btn-ghost">
                <FiMail />
                Hire Me
              </a>

            </div>

            {/* Social Links */}
            <div className="hero-socials">

              <a
                href="https://github.com/kashafsaleh01-commits"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kashaf-narmeen-0684b7419/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:kashafsaleh01@gmail.com"
                aria-label="Email"
              >
                <FiMail />
              </a>

            </div>

          </div>

          {/* Right Side Visual */}
          <div
            className="hero-visual fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="hero-frame">

              {/* Profile Image */}
              <img
                src={heroImage}
                alt="Kashaf Narmeen Saleh"
                className="hero-profile-image"
              />

              {/* Animated Orbits */}
              <div className="hero-frame-orbit orbit-1"></div>
              <div className="hero-frame-orbit orbit-2"></div>
              <div className="hero-frame-orbit orbit-3"></div>

              {/* Floating Skills */}
              <div className="hero-float-chip chip-1">
                <span className="chip-dot blue"></span>
                React.js
              </div>

              <div className="hero-float-chip chip-2">
                <span className="chip-dot purple"></span>
                C++ & Java
              </div>

              <div className="hero-float-chip chip-3">
                <span className="chip-dot pink"></span>
                AI & Python
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line"></div>
        </div>

      </div>
    </section>
  );
}

export default Hero;