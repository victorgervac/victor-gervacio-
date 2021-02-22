import React, {useState} from "react"
import spiningBall from "../LiveBackground/spiningBall.gif"
import {Link} from "react-router-dom"
import "./Welcome.css"



const WelcomePage = () =>{
    const [bgColour, setBgColour] = useState("#fafafa")

    const appStyles={
        height:"100vh",
        background:`${bgColour}`
      }

    return (
        <body class="body">
            <div class="wrapper">
            <div class="loader"></div>
            </div>
            <div class="container">

                {/* animated image  */}
                <div class="wrapper-img">
                    <div class="box"></div>
                    <div>
                        <img src={spiningBall} alt="ball image" />
                    </div>
                </div>

                {/* header */}
                <div style={styles.header}>
                    <h1 style={styles.headerhH1}>Victor</h1>
                    <h1 style={styles.headerhH1}>Gervacio</h1>
                </div>
                
                {/* <!-- hero-container  --> */}
                <div class="hero-container">
                <div style={styles.sidebarText}>WELCOME</div>
                <Link to="/portfolio">
                <div class="click" style={styles.portfolio}>Portfolio</div>
                </Link>
                </div>
            </div>
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
    position: "absolute",
    top: "30%",
    right: "27%",
    transform: "translate(-50%, -50%)",
    fontSize: "40px",
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