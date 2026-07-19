import { FiAward, FiExternalLink } from "react-icons/fi";
import "../styles/Certifications.css";

function Certifications() {
  const certificates = [
    {
      title: "Business Communication",
      issuer: "HP",
      date: "Completed",
      image: "/images/business-communication.png",
      file: "/certificates/business-communication.pdf",
    },

    {
      title: "Introduction to Generative AI",
      issuer: "Simplilearn",
      date: "Completed",
      image: "/images/generative-ai.png",
      file: null,
    },

    {
      title: "Technology Job Simulation",
      issuer: "Forage × Deloitte",
      date: "Completed",
      image: "/images/deloitte-job-simulation.png",
      file: "/certificates/deloitte-job-simulation.pdf",
    },
  ];

  return (
    <section id="certificates" className="certifications section">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="certs-header reveal">
          <span className="section-eyebrow">
            <span className="accent-dot"></span>
            Certifications
          </span>

          <h2 className="section-title">
            Continuous Learning
          </h2>

          <p className="section-subtitle">
            Certifications and professional learning experiences that reflect
            my growth in technology, artificial intelligence, and communication.
          </p>
        </div>

        {/* CERTIFICATES GRID */}
        <div className="certs-grid">

          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className="cert-card reveal"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >

              {/* CERTIFICATE PREVIEW */}
              <div className="cert-visual">

                <div className="cert-image">

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-preview"
                  />

                  <div className="cert-image-overlay"></div>

                </div>

                {/* AWARD SEAL */}
                <div className="cert-seal">
                  <FiAward />
                </div>

              </div>

              {/* CERTIFICATE DETAILS */}
              <div className="cert-body">

                <span className="cert-issuer">
                  {certificate.issuer}
                </span>

                <h3 className="cert-title">
                  {certificate.title}
                </h3>

                <div className="cert-footer">

                  <span className="cert-date">
                    {certificate.date}
                  </span>

                  {certificate.file ? (
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noreferrer"
                      className="cert-link"
                    >
                      View
                      <FiExternalLink />
                    </a>
                  ) : (
                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noreferrer"
                      className="cert-link"
                    >
                      View
                      <FiExternalLink />
                    </a>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;