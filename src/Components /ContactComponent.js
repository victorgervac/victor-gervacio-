import React from "react";
import { Icon } from "semantic-ui-react";
import { contactLinks } from "../data";
import "../styles/ContactCompStyles.css";

const ContactComponent = ({ inView }) => {
  return (
    <div id="contact-id" className="connect-card">
      <h2 className="connect-title">Let's connect</h2>
      <p className="connect-subtitle">
        Open to new opportunities and collaborations — reach out on any of these.
      </p>
      <div className="link-wrap">
        {contactLinks.map(({ icon, label, handle, href }, i) => (
          <a
            key={label}
            href={href}
            className={`social-link contact-fade${inView ? " in-view" : ""}`}
            style={{ transitionDelay: `${0.1 + 0.15 * i}s` }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label}: ${handle}`}
          >
            <Icon name={icon} className="social-link-icon" />
            <span className="social-link-text">
              <span className="social-link-label">{label}</span>
              <span className="social-link-handle">@{handle}</span>
            </span>
            <Icon name="arrow right" className="social-link-arrow" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactComponent;
