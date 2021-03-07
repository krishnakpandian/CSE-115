import * as React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Views/Home';
import AboutHome from '../Views/AboutHome';

/*
Routing for the Main Application
*/
const Routes: React.FC = () => {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Home/> } />
            <Route exact path="/about" render={() => <AboutHome/>} />
          </Switch>
        </Router>
      </div>
    );
  };
  
  export default Routes;