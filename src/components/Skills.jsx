import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaMicrochip,
} from "react-icons/fa";

import { FiCpu, FiTool } from "react-icons/fi";

import "../styles/Skills.css";

function Skills() {
  const categories = [
    {
      title: "Programming",
      subtitle: "Languages and fundamentals I am learning",
      accent: "blue",
      skills: [
        { name: "C++", icon: <FaCode /> },
        { name: "Java OOP", icon: <FaJava /> },
        { name: "Python Basics", icon: <FaPython /> },
      ],
    },

    {
      title: "Web Development",
      subtitle: "Building and exploring web interfaces",
      accent: "purple",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
      ],
    },

    {
      title: "Tools",
      subtitle: "Tools I use for learning and projects",
      accent: "pink",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Dev-C++", icon: <FaCode /> },
      ],
    },

    {
      title: "Embedded Systems",
      subtitle: "Hardware and microcontroller projects",
      accent: "teal",
      skills: [
        { name: "Arduino", icon: <FaMicrochip /> },
        { name: "Sensors", icon: <FiCpu /> },
        { name: "Relay Modules", icon: <FiTool /> },
        { name: "LCD & Keypad", icon: <FiTool /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">

        <div className="skills-header reveal">

          <span className="section-eyebrow">
            <span className="accent-dot"></span>
            My Skills
          </span>

          <h2 className="section-title">
            What I Work With
          </h2>

          <p className="section-subtitle">
            A growing toolkit built through coursework, personal projects,
            and hands-on learning.
          </p>

        </div>

        <div className="skills-grid">

          {categories.map((cat, i) => (

            <div
              key={cat.title}
              className={`skill-card reveal skill-accent-${cat.accent}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >

              <div className="skill-card-header">

                <div className={`skill-card-badge ${cat.accent}`}>
                  {cat.title}
                </div>

                <p className="skill-card-subtitle">
                  {cat.subtitle}
                </p>

              </div>

              <div className="skill-list">

                {cat.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="skill-item"
                  >

                    <span className="skill-icon">
                      {skill.icon}
                    </span>

                    <span className="skill-name">
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

              <div className="skill-card-glow"></div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;