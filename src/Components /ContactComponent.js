import React from "react";
import { Icon } from "semantic-ui-react";
import '../styles/ContactCompStyles.css'
import styled  from "styled-components";

const ContactComponent=()=>{
  return (
    <div id="contact-id" className="conect-fit">
      <h1 className="component-header-connect">Connect</h1>
      <div className="link-wrap">
      <a href="https://www.linkedin.com/in/victorgervacio/" id="linkedin-social" className="social-link" target="blank">
        <Icon size='big' name="linkedin"></Icon>
        Victorgervacio
      </a>
      <a href="https://github.com/victorgervac" className="social-link" target="blank" >
        <Icon size='big' name="github"></Icon>
        victorgervac
      </a>
      {/* <a href="mailto:victorgervacio33@gmail.com" className="social-link">
        <Icon size='big' name="mail"></Icon>
        victorgervacio33@gmail.com
      </a> */}
      </div>
    </div>
  )
}
export default ContactComponent;
// const styles = {
//   center:{
//       alignItems: "center",
//     },
//      links:{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       color: "white",
//       fontSize:"1.5em",
//       marginBottom: "13px",
//       marginTop: "20px"
//       },
//       portfolio:{
//         fontWeight: "bold",
//         fontSize:"1.5em",
//         color:"#2FEFD0",
//       },
//     }