import React, {useState} from "react"
import  { ReactComponent as VictorMan1 } from '../assets/images/victor-man1.svg'
import AboutComponent from "./AboutComponent"
import ContactComponent from "./ContactComponent"
import Github from "./Github"
import '../styles/WelcomePage.css'
import '../styles/NavBarStyles.css'
import {Button, Grid, Card, Icon, Segment} from "semantic-ui-react";
import NavBar from "./NavBar"
import PastWork from "../PortfolioMain"
//import {Link} from "react-router-dom"
// import FadeIn from "./FadeIn"
// import { devices } from "../styles/mediaQuery"
// import styled  from "styled-components";



const WelcomePage = () =>{
 
  return (
     <div className="container">
        <div>
          <NavBar/>
        </div>
        <div className="landing-content">
          <div className="main-content">
            <div className="hello-line">
              Hello, I'm
              <h1 className="name-line">Victor</h1>
              I'm a Front-End Developer
            </div>
          </div>
          <div className="component">
            <div id="svg-id" className="svg-component">
              <VictorMan1/>
            </div>
          </div>
        </div>
        <div id="contact-id" className="contact-component">
          <ContactComponent/>
        </div>
        <div id="past-work" className="past-work-component">
          <PastWork/>
        </div>
        <div id="github" className="github-component">
          <Github/>
        </div>
        <div id="about-id" className="about-component">
         <AboutComponent/>
        </div>
      </div>
  )
}
/*
const styles={
  container:{
    display:"flex",
    padding: "2rem",
    height:"100vh",
    
  }, 
   navBar:{
    display:"flex",
    padding:"1rem",
    justifyContent:"space-around",
   },
header:{
    position: "absolute",
    top: "60%",
    left: "30%",
    transform: "translate(-50%, -50%)"
  },
  headerhH1:{
    color:"white",
    fontSize: "70px",
    textTransform: "uppercase",
    margin: "0",
    mixBlendMode: "overlay",
    display: "inline-block",
   lineHeight: "1em"
  },
  headerLetter:{
    display: "inline-block",
    lineHeight: "1em"
  },
  sidebarText:{
    color:"white",
    fontSize: "70px",
    textTransform: "uppercase",
    margin: "0",s
    
    position: "absolute",
    top: "5%",
    right: "5%",
    color: "transparent",
    WebkitTextStroke: "2px rgb(165, 165, 165)"
  },
  portfolio:{
  display: "flex row",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  textDecoration: "underline",
  fontSize: "60px",
  hover:"opacity: 0.3",
  margin:"10rem"
}
};
const fadeIn = keyframes`
    from {top: 0px;}
    to {top: 200px;}
  `;
  */

 
export default WelcomePage;