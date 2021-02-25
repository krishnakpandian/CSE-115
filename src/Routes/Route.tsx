import * as React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Views/Home';
import AboutHome from '../Views/AboutHome';
import StatisticsHome from "../Views/StatisticsHome";

const Routes: React.FC = () => {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Home/> } />
            <Route exact path="/about" render={() => <AboutHome/>} />
            <Route exact path="/statistics" render={() => <StatisticsHome/>} />
          </Switch>
        </Router>
      </div>
    );
  };
  
  export default Routes;