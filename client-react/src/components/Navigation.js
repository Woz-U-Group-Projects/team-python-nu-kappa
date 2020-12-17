import React from 'react';

import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return(
<<<<<<< HEAD
        <nav className="navbar navbar-dark bg-dark">
            <NavLink className = "navbar-text" to ="/">Home</NavLink>
            <NavLink className = "navbar-text" to ="/FoodTruckInfo">Woz'U Info</NavLink>
            <NavLink className = "navbar-text" to="/FoodTruckMenu">Woz'U Eats Menu</NavLink>
            <NavLink className = "navbar-text" to="/CreateOrder">Woz U Order Creation</NavLink>
            <NavLink className = "navbar-text" to="/CartItems">Woz U Cart Items</NavLink>
            
=======
        <nav class="navbar navbar-dark bg-dark">
            <NavLink class = "navbar-text" to ="/">Home</NavLink>
            <NavLink class = "navbar-text" to ="/FoodTruckInfo">Woz'U Eats</NavLink>
            <NavLink class = "navbar-text" to="/FoodTruckMenu">Woz'U Eats Menu</NavLink>
>>>>>>> BackEndBranch
        </nav>
    );
}

export default Navigation;