import React from "react";
import { ReactComponent as VictorMan1 } from "../assets/images/deskGuyLaptop.svg";
import AboutComponent from "./AboutComponent";
import Github from "./Github";
import NavBar from "./NavBar";
import PastWork from "./PastWork";
import { describeLine } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

import "../styles/WelcomePage.css";
import "../styles/NavBarStyles.css";

const FRONT_END = "I'm a <strong>Full-Stack Software Developer</strong>";

const createMarkup = (markup) => ({ __html: markup });

const SOCIAL_LINKS = [
  { href: "#past-work",  icon: faBriefcase,     label: "Scroll to portfolio", external: false, flyClass: "fly-icon-1" },
  { href: "https://github.com/victorgervac",    icon: faGithubAlt,    label: "GitHub",           external: true,  flyClass: "fly-icon-2" },
  { href: "https://www.linkedin.com/in/victorgervacio/", icon: faLinkedin, label: "LinkedIn", external: true, flyClass: "fly-icon-3" },
  { href: "https://stackoverflow.com/users/19621594/itsvic", icon: faStackOverflow, label: "Stack Overflow", external: true, flyClass: "fly-icon-4" },
];

const WelcomePage = () => {
  return (
    <div className="container">
      {/* Landing Section */}
      <section className="landing-content">

        {/* Left: text content */}
        <div className="text-section">

          {/* "Hi, I'm" flies in from left; name pulses in just after */}
          <h1 className="hello-line">
            <span className="fly-in fly-greeting">Hi, I'm </span>
            <span className="highlighted-name fly-in fly-name">Victor</span>
          </h1>

          {/* Title drops from above */}
          <h2
            className="dev-line fly-in fly-title"
            dangerouslySetInnerHTML={createMarkup(FRONT_END)}
          />

          {/* Description rises from below */}
          <p
            className="describe-line fly-in fly-description"
            dangerouslySetInnerHTML={createMarkup(describeLine)}
          />
        </div>

        {/* Right: SVG swoops in from the right */}
        <div className="animated-person fly-in fly-person">
          <VictorMan1 className="landing-image" />
        </div>

        {/* Social icons pop up one by one */}
        <div className="icon-container">
          {SOCIAL_LINKS.map(({ href, icon, label, external, flyClass }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={`social-icon fly-in ${flyClass}`}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>

        {/* Bouncing scroll cue fades in last */}
        <a href="#past-work" className="scroll-cue" aria-label="Scroll down">
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </section>

      <div className="navigation-component">
        <NavBar />
      </div>

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
