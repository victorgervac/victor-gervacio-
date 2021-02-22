import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderText from "./styledComponents/HeaderText";
import { COLORS } from "./styles/styles";
import { Switch, Route } from "react-router-dom";
import PortfolioMain from "./PortfolioMain";
import NoMatch from "./Components /NoMatch";
import NavButton from "./Components /NavButton"
import WelcomePage from "./Components /WelcomePage";
import { Container } from "semantic-ui-react";
import {Button, Grid, Card, Icon, Segment} from "semantic-ui-react";


function App() {
  return (
   
        <span>
        {/* <NavButton /> */}
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/portfolio"  component={PortfolioMain}/>
          <Route component={NoMatch} />
        </Switch>
        </span>
    
  );
}


//   const AppContainer = styled.div`
//    background: linear-gradient(
//      to bottom right,
//      ${COLORS.PRIMARY},
//      ${COLORS.SECONDARY}
//    );
//    @media (max-width: 1200px) {
//      background: linear-gradient(to bottom right, red, green);
//    }
//  `;
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
