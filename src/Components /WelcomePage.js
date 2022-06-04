import React, {useState} from "react"
import  { ReactComponent as VictorMan1 } from '../assets/images/deskGuyLaptop.svg'
import AboutComponent from "./AboutComponent"
import Github from "./Github"
import '../styles/WelcomePage.css'
import '../styles/NavBarStyles.css'
import NavBar from "./NavBar"
import PastWork from "./PastWork"
import { describeLine } from "../data"
//import {Link} from "react-router-dom"
// import FadeIn from "./FadeIn"
// import { devices } from "../styles/mediaQuery"
// import styled  from "styled-components";

const FRONT_END = "A <strong>Front-End Developer</strong>"

function createMarkup(markup){
 return {__html: markup}
}

const WelcomePage = () =>{
 const [userName, setUserName] = useState('');
//  const MyName(props){
//    console.log("hello")
//  }
  return (
     <div className="container">
        <div className="landing-content box">
          <div className="component-name">
            <div className="hello-line">
               Hello, I'm 
              <div className="name-div">
                Victor
              </div>
            </div>
            <div className="dev-line" dangerouslySetInnerHTML={createMarkup(FRONT_END)}>
            </div>
            <div className="describe-line" dangerouslySetInnerHTML={createMarkup(describeLine)}>
            </div>
          </div>
          <div className="component-svg ">
            <div id="svg-id" className="svg-component">
              <VictorMan1/>
            </div>
          </div>
          <div className="wrapper-scroll">

          <div className="arrow_container">
            <a href="#past-work">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <span className="text">portfolio</span>
            </a>
          </div>
          </div>

        </div>
        <div className="naviagtion-component">
          <NavBar/>
        </div>
        <div id="past-work" className="past-work-component box">
          <PastWork/>
        </div>
        <div id="github" className="github-component box">
          <Github/>
        </div>
        {/* <div id="contact-id" className="contact-component box">
          <ContactComponent/>
        </div> */}
        <div id="about-id" className="about-component box">
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