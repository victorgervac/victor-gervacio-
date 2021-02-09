import React, { useState, useEffect } from "react";
import {Button, Grid, Card, Icon, Segment} from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import HeaderText from "./styledComponents/HeaderText";
import { COLORS } from "./styles/styles";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import MojsExample from "./Components /MojsExample";

const PortfolioMain = () => {

    const [repos, setRepos]= useState([]);

    useEffect(()=>{

    },[]);

    async function getRepos() {
        try {
        const res = await axios.get(
            `https://api.github.com/users/victorgervac/repos`
        );
        setRepos(res.data);
        console.log("called getRepos",res.data);
        } catch (err) {
        alert("error occuered getting repos");
        }
    }

    return (
        <AppContainer>
       <Container>
        <Switch>
          <Route exact path="/" component={MojsExample} />
        </Switch>
      </Container>
       <Segment as={Transparent}>
          <HeaderText fSize="default">Victor Gervacio</HeaderText>
          <HeaderText fSize="small">Contact</HeaderText>
          <HeaderText fSize="small"><HoverText><Icon name="linkedin"><a href="https://www.linkedin.com/in/victorgervacio/">victorgervacio</a></Icon></HoverText></HeaderText>
         <HeaderText fSize="small"><Icon name="mail">victorgervacio33@gmail.com</Icon></HeaderText>
          <HeaderText fSize="small"> <Icon name="phone">(435)7091779</Icon></HeaderText>
       </Segment>
       <Segment as={Transparent}>
          <HeaderText fSize="small">Skills</HeaderText>
          <HeaderText fSize="small">HTML • CSS • JavaScript • React • Ruby on Rails • Git • GitHub • MySQL</HeaderText>
       </Segment>
       <Segment as={Transparent}>
       <HeaderText fSize="small">About</HeaderText>
      <HeaderText fSize="large">I graduated from Park City High School.  I was raised in Acapulco, Mexico before moving to Utah since then I have lived here. I love nature, 
                                  taking long hikes, helping others. Dancing is one of my many passions and I was a scholar at the Wasatch Dance Studio.  
                                  I have attended many leadership conference and was a part of L.I.A (Latinos In Action) during high school.
                                  Seeking the challenge of solving real world problems through coding in a team environment. Interested in all areas of development including application front and back end work as well as testing and performance.</HeaderText>
       </Segment>
       <Segment as={Transparent}>
        <HeaderText fSize="small">Experience</HeaderText>
        <HeaderText fSize="small"><Icon name="github"><a href="https://github.com/victorgervac" target="_blank">Github</a></Icon></HeaderText>
        < ButtonRepo><Button onClick={getRepos}>Get Repos</Button></ ButtonRepo>
        <HeaderText fSize="small">Dev Point Labs</HeaderText>
        <HeaderText fSize="large">Completed an 11 week bootcamp to become a full-stack-web developer, while there I learned HTML, CSS,Ruby, Ruby on Rails, Javascript, SQL. Demonstrated my abilities on a fully functional web application for my capstone project. 
        which can be access through <a href="https://amazingdevtracker.herokuapp.com" target="_blank">DevTracker</a>
        </HeaderText>
        <Grid>
          <Grid.Row>
              {repos.map((r) => (
                <Grid.Column key={r.id} width={5}>
                  {/* Not the most resuable */}
                  <Card style={styles.card}>
                    <Card.Content>
                      <Card.Header style={{overflow:"hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
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
      </Segment>
    </AppContainer>
    )
}

const styles = {
    center:{
      alignItems: "center",
    },
     card:{
      height: "120px",
      marginBottom: "10px",
     },
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
     background: linear-gradient(
       to bottom right,
       ${COLORS.PRIMARY},
       ${COLORS.SECONDARY}
     );
     @media (max-width: 768px) {
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
  
    const HoverText = styled.a`
      color: #FFFFFF;
      :hover {
          color: #4283C4;
          cursor: pointer;
      }
  `
  const ButtonRepo = styled.h3`
   text-align: center;
  `
export default PortfolioMain;