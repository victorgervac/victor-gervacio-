import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {Button, Grid, Card, Icon, Segment} from "semantic-ui-react";
import { COLORS } from "../styles/styles";
import "../styles/Github.css"
import GithubCard from "./GithubCard";
import { githubDescription } from "../data";

function createMarkup(markup){
  return {__html: markup}
}

const Github=()=>{
    return (
    <div className=""> 
        <a className="component-header github" href="https://github.com/victorgervac" target="_blank" rel="noreferrer"><Icon name="github"></Icon>Github</a>
      <div className="grid-container">
        <div className="github-paragraph" dangerouslySetInnerHTML={createMarkup(githubDescription)}>
        </div>
        <GithubCard/> 
      </div>
    </div>
  )
}
export default Github;
  
  const rotate360 = keyframes`
   from{
     transform: rotate(0deg);
   }
   to {
     transform: rotate(360deg);
   }
  `;
  const Star = styled.div`
    display: inline-block;
    color: yellow;
    text-shadow: 1px 1px 1px black;
    animation: ${rotate360} 2s infinite linear;
  `;
  
    const AppContainer = styled.div`
     background:linear-gradient(
       to left top,
       ${COLORS.PRIMARY},
       ${COLORS.SECONDARY}
     );
     @media (max-height: 160px) {
       background: linear-gradient(to bottom right, red, green);
     }

  `