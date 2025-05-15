import React from "react";
import { ReactComponent as VictorMan1 } from "../assets/images/deskGuyLaptop.svg";
import AboutComponent from "./AboutComponent";
import Github from "./Github";
import NavBar from "./NavBar";
import PastWork from "./PastWork";
import { describeLine } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


import "../styles/WelcomePage.css";
import "../styles/NavBarStyles.css";

const FRONT_END = "I'm a <strong>Full-Stack Software Developer</strong> ";

const createMarkup = (markup) => ({ __html: markup });

const WelcomePage = () => {
  return (
    <div className="container">
      {/* Landing Section */}
      <section className="landing-content connectCard">
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
      </section>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <a href="#past-work" aria-label="Scroll to portfolio">
          <div className="chevrons">
            <FontAwesomeIcon icon={faChevronDown} />
            <FontAwesomeIcon icon={faChevronDown} />
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <span className="scroll-text">View Portfolio</span>
        </a>
      </div>
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
