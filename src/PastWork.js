import React, { useState, useEffect } from "react";
import { Icon ,Card, Image } from 'semantic-ui-react'
import "./styles/PastWork.css"
import Amazoneclone from "./assets/images/Amazoneclone.png"
import DevTracker from "./assets/images/DevTracker.png"
import { projects } from "./data";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import HeaderText from "./styledComponents/HeaderText";
import { COLORS } from "./styles/styles";
import ModalAbout from "./Components /ModalAbout";
import { Switch, Route } from "react-router-dom";



const PastWork = () => { 
    return (
    <div>
      <div className="techSta-component">   
        <div id="tech-stack" className="component-header">Tech Stack</div>
        <div className="stack">
          <div className="stack-item javascript">
            <Icon name="js">
            </Icon>
              JavaScript
          </div>
          <div className="stack-item react">
            <Icon name="react">
            </Icon>
               React
          </div>
          <div className="stack-item ruby" >
          <Icon name="diamond">
          </Icon>
            Ruby on Rails 
        </div>
        </div>
      </div>
      <div id="past-work" className="component-header">Past Work</div>
      {projects.map( (c) => 
         <Card>
            <Card.Content>
              <Image src={c.imageUrl} />
                <Card.Header>{c.title}</Card.Header>
                <Card.Meta>
                {c.subTitle}
                </Card.Meta>
                <Card.Description>
                {c.description}
                </Card.Description>
                <Card.Content extra>
                {c.link}
                </Card.Content>
            </Card.Content>
      </Card>  
      )}
          {/* <div className="projects">
            <div id="amzClone-component" className="single-project">
              <a className="project-tittle" href="https://clone-9de46.web.app/" target="_blank" rel="noreferrer"> <Icon name="amazon"></Icon>Amazon-Clone:</a>
              <div id="amzn-img-description" className="image-description">
                <div className="image-wrap">
                <img src={single.imageUrl} className="projects-image" alt="Amzone Clone"></img>
                </div>
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
              <div>
                <a className="project-tittle" href="https://amazingdevtracker.herokuapp.com" target="_blank" rel="noreferrer"><Icon name="globe"></Icon>DevTracker: </a>
              </div>
              <div id="dev-img-description" className="image-description reverse">
                <div className="image-wrap">
                  <img src={DevTracker} className="projects-image" alt="Dev Tracker"></img>
                </div>
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
    </div> */}
  </div>  
  )}

{/* const styles = {
   center:{
      alignItems: "center",
    },
     links:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize:"1.5em",
      marginBottom: "13px",
      marginTop: "20px"
      },
    }
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
  `; */}
  
export default PastWork;