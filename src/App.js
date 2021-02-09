import React, { useState, useEffect } from "react";
import {Button, Grid, Card, Icon, Segment} from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import HeaderText from "./styledComponents/HeaderText";
import { COLORS } from "./styles/styles";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import MojsExample from "./Components /MojsExample";
import PortfolioMain from "./PortfolioMain";
import NoMatch from "./Components /NoMatch";



function App() {
  // const [repos, setRepos]= useState([]);

  // useEffect(()=>{

  // },[]);

  // async function getRepos() {
  //   try {
  //     const res = await axios.get(
  //       `https://api.github.com/users/victorgervac/repos`
  //     );
  //     setRepos(res.data);
  //     console.log("called getRepos",res.data);
  //   } catch (err) {
  //     alert("error occuered getting repos");
  //   }
  // }
  return (
    <AppContainer>
        <Switch>
          <Route exact path="/" component={MojsExample} />
          <Route exact path="/portfolio"  component={PortfolioMain}/>
          <Route component={NoMatch} />
        </Switch>
    </AppContainer>
  );
}


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
  color: blue;
  }`;

export default App;
