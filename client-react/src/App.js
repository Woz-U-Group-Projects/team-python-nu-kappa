import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';  

import Home from './components/Home';
import FoodTruckInfo from './components/FoodTruckInfo';
import FoodTruckMenu from './components/FoodTruckMenu';
import Error from './components/Error';
import Navigation from './components/Navigation';
import "./task.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/FoodTruckInfo" component={FoodTruckInfo}/>
          <Route path="/FoodTruckMenu" component={FoodTruckMenu}/>
          <Route component={Error}/>
        </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;