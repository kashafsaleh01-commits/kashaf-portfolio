import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">

          {/* LEFT SIDE: ABOUT CONTENT */}
          <div className="about-content">

            {/* ABOUT LABEL */}
            <span className="about-eyebrow">
              <span className="accent-dot"></span>
              ABOUT
            </span>

            <h2 className="section-title">
              Who I am
            </h2>

            <p className="about-lead">
              I'm <strong>Kashaf Narmeen</strong>, a BS Computer Science student
              passionate about technology and software development.
            </p>

            <p className="about-paragraph">
              I enjoy building practical projects, learning new technologies,
              and exploring Full Stack Development and Artificial Intelligence.
            </p>

            <div className="about-highlights">

              <div className="highlight-item">
                <span className="highlight-number">01</span>

                <div>
                  <h4>Full Stack Development</h4>
                  <p>
                    Building practical and user-friendly web applications.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-number">02</span>

                <div>
                  <h4>Artificial Intelligence</h4>
                  <p>
                    Exploring AI and modern intelligent technologies.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-number">03</span>

                <div>
                  <h4>Programming</h4>
                  <p>
                    Working with C++, Java, Python and hands-on projects.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="about-visual">

            <div className="about-image-frame">
              <img
                src="/images/kashaf.jpg"
                alt="Kashaf Narmeen"
                className="about-image"
              />
            </div>

            <div className="about-image-label">
              <span>BS Computer Science</span>
              <span>•</span>
              <span>Developer in Progress</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;