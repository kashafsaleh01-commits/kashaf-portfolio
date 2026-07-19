import {
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
} from "react-icons/fi";

import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [focusedField, setFocusedField] = useState("");

  const contactInfo = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "kashafsaleh01@gmail.com",
      href: "mailto:kashafsaleh01@gmail.com",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/kashaf-narmeen-0684b7419/",
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/kashafsaleh01-commits",
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Pakistan",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">

        <div className="contact-header">
          <span className="section-eyebrow">
            <span className="accent-dot"></span>
            Get In Touch
          </span>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="section-subtitle">
            Have a project idea, opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-info-card">

            <div className="contact-info-header">
              <h3>Let's Connect</h3>

              <p>
                I'm always open to learning opportunities, collaborations,
                internships, and interesting projects.
              </p>
            </div>

            <div className="contact-info-list">

              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.label === "Location"
                      ? "_self"
                      : "_blank"
                  }
                  rel="noreferrer"
                  className="contact-info-item"
                >
                  <span className="contact-info-icon">
                    {item.icon}
                  </span>

                  <span>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                </a>
              ))}

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="contact-form-wrap">

            <form
              className="contact-form"
              action="https://formsubmit.co/kashafsaleh01@gmail.com"
              method="POST"
            >

              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_next"
                value="https://kashaf-portfolio-tawny.vercel.app/#contact"
              />


              {/* NAME */}
              <div
                className={`field ${
                  focusedField === "name"
                    ? "focused"
                    : ""
                }`}
              >

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField("")}
                />

              </div>


              {/* EMAIL */}
              <div
                className={`field ${
                  focusedField === "email"
                    ? "focused"
                    : ""
                }`}
              >

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                />

              </div>


              {/* MESSAGE */}
              <div
                className={`field ${
                  focusedField === "message"
                    ? "focused"
                    : ""
                }`}
              >

                <label htmlFor="message">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                ></textarea>

              </div>


              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="submit-btn"
              >
                <FiSend />
                <span>Send Message</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;