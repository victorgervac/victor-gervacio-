import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import {Button, Grid, Card, Icon, Segment} from "semantic-ui-react";
import { COLORS } from "../styles/styles";

const Github=()=>{
  const [repos, setRepos]= useState([]);

    useEffect(()=>{
    },[]);

    async function getRepos() {
        try {
        const res = await axios.get(
            `https://api.github.com/users/victorgervac/repos`
        );
        setRepos(res.data);
        // console.log("called getRepos",res.data);
        } catch (err) {
        alert("error occuered getting repos");
        }
    }

  return (
    <div> 
      <div>
     <a style={styles.portfolio} href="https://github.com/victorgervac" target="_blank" rel="noreferrer"><Icon name="github"></Icon>Github:</a>
            <span style={styles.paragraph}>
            My github contains the repositories that represent content that I have created and still developing. You can load the repositories by clicking the button below or following the green link 
            to see my activty and explore more.
        </span>
        < ButtonRepo><Button onClick={getRepos}>Get Repos</Button></ ButtonRepo>
      </div>
    </div>
  )
}
export default Github;
const styles = {
  center:{
      alignItems: "center",
    },
     card:{
      height: "120px",
      marginBottom: "10px",
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
      portfolio:{
        fontWeight: "bold",
        fontSize:"1.5em",
        color:"#2FEFD0",
      },
      paragraph:{
        display: "flex",
        fontSize:"1.5em",
        marginBottom: "28px",
        marginTop: "5px",
        color:"black",
      }
    }
  
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