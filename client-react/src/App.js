import React, {Component} from "react";
<<<<<<< HEAD
import {BrowserRouter, Route, Switch} from 'react-router-dom';
=======
import {BrowserRouter, Route, Switch} from 'react-router-dom';  
>>>>>>> BackEndBranch

import Home from './components/Home';
import FoodTruckInfo from './components/FoodTruckInfo';
import FoodTruckMenu from './components/FoodTruckMenu';
<<<<<<< HEAD
import CreateOrder from './components/CreateOrder';
import CartItems from './components/CartItems';

=======
>>>>>>> BackEndBranch
import Error from './components/Error';
import Navigation from './components/Navigation';
import "./task.min.css";

<<<<<<< HEAD

=======
>>>>>>> BackEndBranch
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
<<<<<<< HEAD
      
=======
>>>>>>> BackEndBranch
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/FoodTruckInfo" component={FoodTruckInfo}/>
          <Route path="/FoodTruckMenu" component={FoodTruckMenu}/>
<<<<<<< HEAD
          <Route path="/CreateOrder" component={CreateOrder}/>
          <Route path="/CartItems" component={CartItems}/>
          
          
          <Route component={Error}/>
        </Switch>
        
=======
          <Route component={Error}/>
        </Switch>
>>>>>>> BackEndBranch
        </div>
        </BrowserRouter>
    );
  }
}

<<<<<<< HEAD

  


export default App;
=======
export default App;
>>>>>>> BackEndBranch
