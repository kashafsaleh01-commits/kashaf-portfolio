import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Automatic Load Shedding Management System",
      description:
        "An Arduino-based embedded system that monitors real-time current consumption and automatically manages electrical loads. The system uses a current sensor to detect load conditions and controls power distribution through relays.",
      image: "/images/project1.png",
      tech: [
        "Arduino Uno",
        "Current Sensor",
        "Relay Module",
        "LCD Display",
        "Keypad",
      ],
      accent: "blue",
    },

    {
      title: "Multiple Cities Load Shedding Management Using ARM",
      description:
        "An ARM microcontroller-based system designed to manage scheduled load shedding across multiple cities. The system uses a built-in Real-Time Clock (RTC) to control power supply according to predefined schedules.",
      image: "/images/project2.png",
      tech: ["ARM Microcontroller", "RTC", "Embedded Systems"],
      accent: "purple",
    },

    {
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio website built with React to showcase my skills, projects, certifications, and experience through a clean and modern user interface.",
      image: "/images/project3.png",
      tech: ["React", "JavaScript", "CSS", "Vite"],
      accent: "pink",
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="projects-header reveal">
          <span className="section-eyebrow">
            <span className="accent-dot"></span>
            Featured Work
          </span>

          <h2 className="section-title">
            Selected Projects
          </h2>

          <p className="section-subtitle">
            A selection of projects I've built while exploring embedded systems,
            hardware programming, and modern web development.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card reveal project-accent-${project.accent}`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >

              {/* PROJECT IMAGE */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-image-overlay"></div>

                <span
                  className={`project-badge ${project.accent}`}
                >
                  Project 0{index + 1}
                </span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="project-body">

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="project-tech-pill"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;