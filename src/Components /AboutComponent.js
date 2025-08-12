import { useEffect, useRef, useState } from "react";
import { aboutMe } from "../data";
import ContactComponent from "./ContactComponent";
import { ReactComponent as WholeGuy } from "../assets/images/whole_guy.svg";
import "../styles/AboutComponent.css";

function createMarkup(markup) {
  return { __html: markup };
}

const AboutComponent = () => {
  const aboutRef = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const top = aboutRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) { 
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`connectCard ${animate ? "animate" : ""}`}
      ref={aboutRef}
    >
      <div className="svg-man">
        <WholeGuy />
      </div>
      <div className="content">
        <h1 className="component-header-connect">About</h1>
        <div className="about" dangerouslySetInnerHTML={createMarkup(aboutMe)} />
        <ContactComponent />
      </div>
    </div>
  );
};

export default AboutComponent;
