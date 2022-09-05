import React, { useState, useEffect } from "react";
import { Icon ,Card, Image, List } from 'semantic-ui-react'
import "../styles/PastWork.css"
import { projects } from "../data";
import styled, { keyframes } from "styled-components";
import HeaderText from "../styledComponents/HeaderText";
import { COLORS } from "../styles/styles";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function createMarkup(markup){
  return {__html: markup}
}
const PastWork = () => { 
  return (
    <div>
      <div id="past-work" className="component-header past-work">Past Work</div>
      <div className="techSta-component">   
        <div id="tech-stack" className="tech-stack">Tech Stack</div>
        <div className="stack">
          <div className="stack-item javascript">
            <a href="https://js.org/" target="_blank" rel="noreferrer">
            </a>
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
      <div>
        {projects.map((c)=>(
              <div key={c.id}>
          <div className="card-wrap shadow">
            <div className="tittle">
            <a href={c.link} target="_blank" rel="noreferrer">
                {c.title}
                </a>
            </div>
            <div className="card-meta">
              <div className="image-wrap">
              <a href={c.link} target="_blank" rel="noreferrer">
                <img src={c.imageUrl} alt="name project"></img>
                </a>
              </div>
              <div className="work-description"> 
                <div className="paragraph-descrition link">{c.subTitle}</div>

                <div className="paragraph-descrition" dangerouslySetInnerHTML={createMarkup(c.description)}></div>
                <div>
                  <div className="static">
                    Front-Stack: 
                  </div>
                    <div className="frontend-stack-pastwork" dangerouslySetInnerHTML={createMarkup(c.frontTechSatck)}></div>
                </div>
                <div>
                  <div className="static">
                    Backend-Stack: 
                  </div>
                    <div className="frontend-stack-pastwork" dangerouslySetInnerHTML={createMarkup(c.backTechStack)}></div>
                    </div>
              </div>
              </div>
            </div>
            <hr></hr>
          </div>
        ))}
      </div>

    </div>
    )}
  
export default PastWork;