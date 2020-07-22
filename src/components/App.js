import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';

import { Header } from "./Header.js"; 
import About from "./About.js";
import Homepage from "./Homepage.js";


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
        <Route path="/items/:itemsId">
          {/* <Item /> */}Item
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
