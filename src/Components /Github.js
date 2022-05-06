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
    <div className="github-component wrap"> 
      <div>
        <a className="component-header github" href="https://github.com/victorgervac" target="_blank" rel="noreferrer"><Icon name="github"></Icon>Github</a>
        <div className="paragraph-descrition github-paragraph" dangerouslySetInnerHTML={createMarkup(githubDescription)}>
        </div>
        {/* <GithubCard/> */}
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

   `;
  const Transparent = styled.div`

    background: transparent !important; //in css files this is frowned upon and should be spariningly, it is more common to use when using components/css libraries
  `;
  
  const ButtonLink = styled.a`
    float: right;
    padding: 10px 30px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.foreGround} !important;
    color: ${(props) => props.theme.foreGround} !important;
    background-color: ${(props) => props.theme.backGround} !important;
    &:hover {
      border: 1px solid ${(props) => props.theme.backGround} !important;
      background-color: ${(props) => props.theme.foreGround} !important;
      color: ${(props) => props.theme.backGround} !important;
    }`;
  
  const ButtonRepo = styled.h3`
   text-align: center;
  `