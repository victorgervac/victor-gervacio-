import React, {useState} from "react"
import spiningBall from "../LiveBackground/spiningBall.gif"
import {Link} from "react-router-dom"
import "./Welcome.css"
import FadeIn from "./FadeIn"



const WelcomePage = () =>{
    const [bgColour, setBgColour] = useState("#fafafa")

    const appStyles={
        height:"100vh",
        background:`${bgColour}`
      }

    return (
        <body class="body">
        <FadeIn wrapperElement="h1" direction="down">
            <div class="wrapper">
            <div class="loader"></div>
            </div>
            <div class="container">

                {/* animated image  */}
                <div class="wrapper-img">
                <FadeIn wrapperElement="h1" direction="down">
                    <div class="box"></div>
                    <div>
                        <img src={spiningBall} alt="ball image" />
                    </div>
                </FadeIn>
                </div>

                {/* header */}
                <div style={styles.header}>
                <FadeIn direction="right">
                    <h1 style={styles.headerhH1}>Victor</h1>
                    <h1 style={styles.headerhH1}>Gervacio</h1>
                </FadeIn>
                </div>
                
                {/* <!-- hero-container  --> */}
                <div class="hero-container">
                <div style={styles.sidebarText}>WELCOME</div>
                <FadeIn direction="right">
                <Link to="/portfolio">
                <div class="click" style={styles.portfolio}>Portfolio</div>
                </Link>
                </FadeIn>
                </div>
            </div>
        </FadeIn>
        </body>
    )
}
const styles={
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
    // display: "inline-block",
    // lineHeight: "1em"
  },
  headerLetter:{
    display: "inline-block",
    lineHeight: "1em"
  },
  sidebarText:{
    color:"white",
    fontSize: "70px",
    textTransform: "uppercase",
    margin: "0",
    
    position: "absolute",
    top: "5%",
    right: "5%",
    color: "transparent",
    WebkitTextStroke: "2px rgb(165, 165, 165)"
  },
  portfolio:{
  position: "absolute",
  bottom: "10%",
  left: "30%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  textDecoration: "underline",
  fontSize: "60px",
    color:"white",
  hover:"opacity: 0.3"
}
}

 
export default WelcomePage;