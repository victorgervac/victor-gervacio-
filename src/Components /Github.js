import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import {Button, Grid, Card, Icon, Segment} from "semantic-ui-react";
import { COLORS } from "../styles/styles";
import "../styles/Github.css"

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
    const repoArrege =(repos)=>{
      <Grid>
      <Grid.Row>
          {repos.map((r) => (
            <Grid.Column key={r.id} width={5}>
              {/* Not the most resuable */}
              <Card style={styles.card}>
                <Card.Content>
                  <Card.Header style={{overflow:"hidden", textOverflow: "ellipsis"}}>
                  {r.full_name}
                  </Card.Header>
                  <Card.Meta>{r.description}</Card.Meta>
                  {r.stargazers_count > 0 && (
                    <Star>
                    <Icon name="star" />
                  </Star>
                    )}
                </Card.Content>
                <Card.Content extra>
                  <ButtonLink href={r.html_url} target="_blank">
                    View
                  </ButtonLink>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
    </Grid>
    }

  return (
    <div> 
      <div>
        <a className="component-header github" href="https://github.com/victorgervac" target="_blank" rel="noreferrer"><Icon name="github"></Icon>Github</a>
        <div className="paragraph-descrition github-paragraph">
            My github contains the repositories that represent content that 
            I have created and still developing. You can load the repositories 
            by clicking the button below or following the green link 
            to see my activty and explore more.
        </div>
      </div>
      <div className="button-wrap"> 
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