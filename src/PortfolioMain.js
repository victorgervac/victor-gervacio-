import React, { useState, useEffect } from "react";
import {Button, Grid, Card, Icon, Segment} from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import HeaderText from "./styledComponents/HeaderText";
import { COLORS } from "./styles/styles";
import ModalAbout from "./Components /ModalAbout";
import { Switch, Route } from "react-router-dom";



const PortfolioMain = () => { 
  const [show, setShow] = useState(false);
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
      // styles={{  backgroundSize: "cover",
          // width: "100%",
          // height: "100%"}}
        <AppContainer>
       {/* <Segment as={Transparent}>
           <HeaderText fSize="default">Victor Gervacio</HeaderText> 
          <HeaderText fSize="small">Connect</HeaderText>
         <a style={styles.links} href="https://www.linkedin.com/in/victorgervacio/" target="blank"><Icon name="linkedin"></Icon>Victorgervacio</a>
         <span style={styles.links}><Icon name="phone"></Icon>(435)709-1779</span>
         <a style={styles.links} href="mailto: victorgervacio33@gmail.com" ><Icon name="mail"></Icon>victorgervacio33@gmail.com</a>
        </Segment> */}
       <Segment as={Transparent}>
          <HeaderText fSize="small">Skills</HeaderText>
          <span style={styles.links}>JavaScript • React • Ruby on Rails </span>
       </Segment>
       <Segment as={Transparent}>
        <HeaderText id="past-work" fSize="small">Past Work</HeaderText>
        <span>
            <a href="https://clone-9de46.web.app/" target="_blank" style={styles.portfolio} rel="noreferrer"> <Icon name="amazon"></Icon>Amazon-Clone:</a></span>
            <span style={styles.paragraph}>
            I have created a clone to the Amazon store to test out my javascripts developer skills,
            <br></br>while writing JSX in the react framework. 
            <br></br>Follow the link to open the up the app, and login with a google account.
           <br></br> while being protected by google's firebase cloud database.
            <br></br><br></br>•Backend: Firebase Realtime cloud-hosted database.
            <br></br><br></br>•Front-end: 
            <br></br >Firebase tools,React Dom, React Number Format,React Router Dom, Styled Components.

            </span>
        <span>
            <a href="https://amazingdevtracker.herokuapp.com" target="_blank" style={styles.portfolio} rel="noreferrer"><Icon name="globe"></Icon>DevTracker: </a>
            <span style={styles.paragraph}>
            This app was created  in an agile environment with two team mates and myself. I consider this to be the ultimate TODO list to help your job search. This app was created  with the following techonologies.
            <br></br><br></br>• Front-end - jsx node, yarn dependencies, libraries like drag and drop, router and device in a component set up.
            <br></br><br></br>• Back-end - Ruby on rails, Gems were used to facilitate the development with PostgresQL relational database.
            </span>
        </span>
        {/* <a style={styles.portfolio} href="https://github.com/victorgervac" target="_blank" rel="noreferrer"><Icon name="github"></Icon>Github:</a>
            <span style={styles.paragraph}>
            My github contains the repositories that represent content that I have created and still developing. You can load the repositories by clicking the button below or following the green link 
            to see my activty and explore more.
        </span>
        < ButtonRepo><Button onClick={getRepos}>Get Repos</Button></ ButtonRepo> */}
      </Segment>
      {/* <Segment as={Transparent}>
          <HeaderText fSize="small">About</HeaderText>
          <ButtonRepo><Button  onClick={()=> setShow(true)}>Show About</Button></ButtonRepo>
          <ModalAbout onClose={() => setShow(false)} show={show}/>
       </Segment> */}
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
        color:"white",
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
export default PortfolioMain;
 /* <Grid>
          <Grid.Row>
              {repos.map((r) => (
                <Grid.Column key={r.id} width={5}>
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
        </Grid> */