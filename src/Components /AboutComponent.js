import { aboutMe } from "../data";
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
        <ContactComponent inView={inView} />
      </div>
    </div>
  );
};

export default AboutComponent;
