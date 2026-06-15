import React from "react";
import { Icon } from "semantic-ui-react";
import '../styles/ContactCompStyles.css'

const ContactComponent = ({ inView }) => {
  return (
    <div id="contact-id" className="conect-fit">
      <h1 className="component-header-connect">Connect</h1>
      <div className="link-wrap">
      <a
        href="https://www.linkedin.com/in/victorgervacio/"
        id="linkedin-social"
        className={`social-link contact-fade${inView ? " in-view" : ""}`}
        style={{ transitionDelay: "0.1s" }}
        target="blank"
      >
        <Icon size='big' name="linkedin"></Icon>
        Victorgervacio
      </a>
      <a
        href="https://github.com/victorgervac"
        className={`social-link contact-fade${inView ? " in-view" : ""}`}
        style={{ transitionDelay: "0.25s" }}
        target="blank"
      >
        <Icon size='big' name="github"></Icon>
        victorgervac
      </a>
      </div>
    </div>
  )
}
export default ContactComponent;
