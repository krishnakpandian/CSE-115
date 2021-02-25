import * as React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Views/Home';
import Statistics from '../Views/Statistics'
import AboutHome from '../Views/AboutHome';

const Routes: React.FC = () => {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Home/> } />
            <Route exact path="/about" render={() => <AboutHome/>} />
            <Route exact path="/statistics" render={() => <Statistics/>} />
          </Switch>
        </Router>
      </div>
    );
  };
  
  export default Routes;