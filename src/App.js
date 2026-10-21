import React from "react";
import { Switch, Route } from "react-router-dom";
import NoMatch from "./Components /NoMatch";
import WelcomePage from "./Components /WelcomePage";


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
