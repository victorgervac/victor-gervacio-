import { Icon } from "semantic-ui-react";
import { aboutMe, aboutFacts, hobbies } from "../data";
import ContactComponent from "./ContactComponent";
import { ReactComponent as WholeGuy } from "../assets/images/whole_guy.svg";
import { useInView } from "../Hooks/useInView";
import "../styles/AboutComponent.css";

function createMarkup(markup) {
  return { __html: markup };
}

const AboutComponent = () => {
  const [aboutRef, inView] = useInView({ threshold: 0.2 });

  return (
    <div className={`about-section ${inView ? "animate" : ""}`} ref={aboutRef}>
      <h1 className="component-header-connect">About</h1>

      <div className="about-layout">
        <div className="about-visual">
          <div className="svg-man">
            <WholeGuy />
          </div>
          <div className="hobby-chips">
            {hobbies.map(({ icon, label }) => (
              <span key={label} className="hobby-chip">
                <Icon name={icon} /> {label}
              </span>
            ))}
          </div>
        </div>

        <div className="about-content">
          <div className="about" dangerouslySetInnerHTML={createMarkup(aboutMe)} />

          <div className="about-facts">
            {aboutFacts.map(({ icon, label, value }) => (
              <div key={label} className="about-fact">
                <Icon name={icon} className="about-fact-icon" />
                <div>
                  <span className="about-fact-label">{label}</span>
                  <span className="about-fact-value">{value}</span>
                </div>
              </div>
            ))}
          </div>

          <ContactComponent inView={inView} />
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
