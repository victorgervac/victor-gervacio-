import { aboutMe, cybersecurity } from "../data";
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
    <div
      className={`connectCard ${inView ? "animate" : ""}`}
      ref={aboutRef}
    >
      <div className="svg-man">
        <WholeGuy />
      </div>
      <div className="content">
        <h1 className="component-header-connect">About</h1>
        <div className="about" dangerouslySetInnerHTML={createMarkup(aboutMe)} />

        {/* Cybersecurity in-progress card */}
        <div className={`cert-card contact-fade${inView ? " in-view" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <div className="cert-card-header">
            <span className="cert-badge">In Progress</span>
            <strong>{cybersecurity.title}</strong>
            <small>{cybersecurity.status}</small>
          </div>
          <ul className="cert-skills">
            {cybersecurity.skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>

        <ContactComponent inView={inView} />
      </div>
    </div>
  );
};

export default AboutComponent;
