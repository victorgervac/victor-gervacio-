import React, { useState, useEffect } from "react";
import { Icon } from 'semantic-ui-react'
import "./styles/PastWork.css"
import Amazoneclone from "./assets/images/Amazoneclone.png"
import DevTracker from "./assets/images/DevTracker.png"
import styled, { keyframes } from "styled-components";
import axios from "axios";
import HeaderText from "./styledComponents/HeaderText";
import { COLORS } from "./styles/styles";
import ModalAbout from "./Components /ModalAbout";
import { Switch, Route } from "react-router-dom";



const PastWork = () => { 
  // const [repos, setRepos]= useState([]);

  //   useEffect(()=>{
  //   },[]);

  //   async function getRepos() {
  //       try {
  //       const res = await axios.get(
  //           `https://api.github.com/users/victorgervac/repos`
  //       );
  //       setRepos(res.data);
  //       // console.log("called getRepos",res.data);
  //       } catch (err) {
  //       alert("error occuered getting repos");
  //       }
  //   }

    return (
    <div>
      <div className="techSta-component">
        <div id="tech-stack" className="component-header">Tech Stack</div>
        <div className="stack-description">JavaScript • React • Ruby on Rails </div>
      </div>
      <div id="past-work" className="component-header">Past Work</div>
          <div className="projects">
            <div id="amzClone-component" className="single-project">
              <a className="project-tittle" href="https://clone-9de46.web.app/" target="_blank" rel="noreferrer"> <Icon name="amazon"></Icon>Amazon-Clone:</a>
              <div id="amzn-img-description" className="image-description">
                <img src={Amazoneclone} className="projects-image" alt="Amzone Clone"></img>
                <div className="paragraph-descrition">
                    I have created a clone to the Amazon store to test out my javascripts developer skills,
                  <br></br>while writing JSX in the react framework. 
                  <br></br>Follow the link to open the up the app, and login with a google account.
                  <br></br> while being protected by google's firebase cloud database.
                  <br></br><br></br>•Backend: Firebase Realtime cloud-hosted database.
                  <br></br><br></br>•Front-end: 
                  <br></br >Firebase tools,React Dom, React Number Format,React Router Dom, Styled Components.
                </div>
              </div>
            </div>
            <div  className="single-project">
              <a className="project-tittle" href="https://amazingdevtracker.herokuapp.com" target="_blank" rel="noreferrer"><Icon name="globe"></Icon>DevTracker: </a>
              <div id="dev-img-description" className="image-description">
              <img src={DevTracker} className="projects-image" alt="Dev Tracker"></img>
              <div className="paragraph-descrition" >
                  This app was created  in an agile environment with two team mates and myself. I consider this to be the ultimate TODO list to help your job search. This app was created  with the following techonologies.
                  <br></br><br></br>• Front-end - jsx node, yarn dependencies, libraries like drag and drop, router and device in a component set up.
                  <br></br><br></br>• Back-end - Ruby on rails, Gems were used to facilitate the development with PostgresQL relational database.
              </div>
              </div>
            </div>
          </div>
        <div>
      </div>
    </div>
    )
}

//const styles = {
  // center:{
  //     alignItems: "center",
  //   },
  //    links:{
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     color: "white",
  //     fontSize:"1.5em",
  //     marginBottom: "13px",
  //     marginTop: "20px"
  //     },
  //   }
    const AppContainer = styled.div`
     background:linear-gradient(
       to left top,
       ${COLORS.PRIMARY},
       ${COLORS.SECONDARY}
     );
     @media (max-height: 160px) {
       background: linear-gradient(to bottom right, red, green);
     }

   `;
  const Transparent = styled.div`

    background: transparent !important; //in css files this is frowned upon and should be spariningly, it is more common to use when using components/css libraries
  `;
  
export default PastWork;