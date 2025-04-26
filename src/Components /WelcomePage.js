import React from "react";
import { ReactComponent as VictorMan1 } from "../assets/images/deskGuyLaptop.svg";
import AboutComponent from "./AboutComponent";
import Github from "./Github";
import NavBar from "./NavBar";
import PastWork from "./PastWork";
import { describeLine } from "../data";

import "../styles/WelcomePage.css";
import "../styles/NavBarStyles.css";

const FRONT_END = "A <strong>Software Developer</strong>";

const createMarkup = (markup) => ({ __html: markup });

const WelcomePage = () => {
  return (
    <div className="container">
      {/* Landing Section */}
      <section className="landing-content box">
        {/* Text Content */}
        <div className="component-name">
          <h1 className="hello-line">
            Hello, I'm <span className="name-div">Victor</span>
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

        {/* SVG Illustration */}
        <div className="component-svg" id="svg-id">
          <VictorMan1 />
        </div>

        {/* Scroll Indicator */}
        <div className="wrapper-scroll">
          <a href="#past-work" className="arrow_container" aria-label="Scroll to portfolio section">
            <div className="chevron" />
            <div className="chevron" />
            <div className="chevron" />
            <span className="text">Portfolio</span>
          </a>
        </div>
      </section>


      {/* NavBar */}
      <div className="navigation-component">
        <NavBar />
      </div>

      {/* Other Sections */}
      <section id="past-work" className="past-work-component box">
        <PastWork />
      </section>

      <section id="github" className="github-component box">
        <Github />
      </section>

      <section id="about-id" className="about-component box">
        <AboutComponent />
      </section>
    </div>
  );
};

export default WelcomePage;
