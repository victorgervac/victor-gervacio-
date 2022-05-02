import React, { useState, useEffect } from "react";
import { Icon ,Card, Image, List } from 'semantic-ui-react'
import "./styles/PastWork.css"
import { projects } from "./data";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import HeaderText from "./styledComponents/HeaderText";
import { COLORS } from "./styles/styles";
import ModalAbout from "./Components /ModalAbout";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function createMarkup(markup){
  return {__html: markup}
}
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
      <div>
        {projects.map((c)=>(
          <div className="card-wrap shadow">
            <div className="tittle">
                {c.title}
            </div>
            <div className="card-meta">
              <div className="image-wrap">
                <img src={c.imageUrl} alt="name project"></img>
              </div>
              <div className="work-description"> 
                <div className="paragraph-descrition" dangerouslySetInnerHTML={createMarkup(c.description)}></div>
                {/* <div><a href={c.link} target="_blank" rel="noreferrer">{c.subTitle}</a></div> */}
                <div className="paragraph-descrition">{c.frontTechSatck}</div>
                <div className="paragraph-descrition">{c.backTechStack}</div>
              </div>
            </div>
            <hr></hr>
          </div>
        ))}
      </div>

    </div>
    )}
  
export default PastWork;