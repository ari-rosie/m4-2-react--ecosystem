import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';

import { Header } from "./Header.js"; 
import About from "./About.js";
import Homepage from "./Homepage.js";
import ItemDetails from './ItemDetails.js';


const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage /> 
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
