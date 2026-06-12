import React from "react";
import { ReactComponent as VictorMan1 } from "../assets/images/deskGuyLaptop.svg";
import AboutComponent from "./AboutComponent";
import Github from "./Github";
import NavBar from "./NavBar";
import PastWork from "./PastWork";
import { describeLine } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

import "../styles/WelcomePage.css";
import "../styles/NavBarStyles.css";

const FRONT_END = "I'm a <strong>Full-Stack Software Developer</strong> ";

const createMarkup = (markup) => ({ __html: markup });

const SOCIAL_LINKS = [
  { href: "#past-work", icon: faBriefcase, label: "Scroll to portfolio", external: false },
  { href: "https://github.com/victorgervac", icon: faGithubAlt, label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/victorgervacio/", icon: faLinkedin, label: "LinkedIn", external: true },
  { href: "https://stackoverflow.com/users/19621594/itsvic", icon: faStackOverflow, label: "Stack Overflow", external: true },
];

const WelcomePage = () => {
  return (
    <div className="container">
      {/* Landing Section */}
      <section className="landing-content">
        <div className="text-section">
          <h1 className="hello-line hero-fade" style={{ animationDelay: "0.05s" }}>
            Hi, I'm <span className="highlighted-name">Victor</span>
          </h1>

          <h2
            className="dev-line hero-fade"
            style={{ animationDelay: "0.25s" }}
            dangerouslySetInnerHTML={createMarkup(FRONT_END)}
          />

          <p
            className="describe-line hero-fade"
            style={{ animationDelay: "0.45s" }}
            dangerouslySetInnerHTML={createMarkup(describeLine)}
          />
        </div>

        <div className="animated-person hero-fade" style={{ animationDelay: "0.35s" }}>
          <VictorMan1 className="landing-image" />
        </div>

        <div className="icon-container hero-fade" style={{ animationDelay: "0.65s" }}>
          {SOCIAL_LINKS.map(({ href, icon, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="social-icon"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </section>

      <div className="navigation-component">
        <NavBar />
      </div>

      {/* Other Sections */}
      <section id="past-work" className="section">
        <PastWork />
      </section>

      <section id="github" className="section">
        <Github />
      </section>

      <section id="about-id" className="section">
        <AboutComponent />
      </section>
    </div>
  );
};

export default WelcomePage;
