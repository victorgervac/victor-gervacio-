import React from "react";
import { ReactComponent as VictorMan1 } from "../assets/images/deskGuyLaptop.svg";
import AboutComponent from "./AboutComponent";
import Github from "./Github";
import NavBar from "./NavBar";
import PastWork from "./PastWork";
import { describeLine } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown,faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt,faLinkedin,faStackOverflow } from '@fortawesome/free-brands-svg-icons';





import "../styles/WelcomePage.css";
import "../styles/NavBarStyles.css";

const FRONT_END = "I'm a <strong>Full-Stack Software Developer</strong> ";

const createMarkup = (markup) => ({ __html: markup });

const WelcomePage = () => {
  return (
    <div className="container">
      {/* Landing Section */}
      <section className="landing-content connect-card">
        <div className="text-section">
          <h1 className="hello-line">
            Hi, I'm <span className="highlighted-name">Victor</span>
          </h1>

          <h2
            className="dev-line"
            dangerouslySetInnerHTML={createMarkup(FRONT_END)}
          />

          <p
            className="describe-line"
            dangerouslySetInnerHTML={createMarkup(describeLine)}
          />
        </div>

        <div className="animated-person">
          <VictorMan1 className="landing-image" />
        </div>
        <div className="icon-container">
          <a href="#past-work"  aria-label="Scroll to portfolio">
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
          <a href="https://github.com/victorgervac" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>

          <a href="https://www.linkedin.com/in/victorgervacio/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
         
          <a href="https://stackoverflow.com/users/19621594/itsvic" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
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
