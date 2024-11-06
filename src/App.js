import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderText from "./styledComponents/HeaderText";
import { COLORS } from "./styles/styles";
import { Switch, Route } from "react-router-dom";
import PortfolioMain from "./Components /PastWork";
import NoMatch from "./Components /NoMatch";
import WelcomePage from "./Components /WelcomePage";
import { Container } from "semantic-ui-react";
import {Button, Grid, Card, Icon, Segment} from "semantic-ui-react";
import PastWork from "./Components /PastWork";


function App() {
  return (
        <div className="overflow-hidden">
          <main>
            <Switch>
              
              <Route exact path="/" component={WelcomePage} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
    
  );
}
export default App;
