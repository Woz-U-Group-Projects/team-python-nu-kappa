import React from 'react';

import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <NavLink className = "navbar-text" to ="/">Home</NavLink>
            <NavLink className = "navbar-text" to ="/FoodTruckInfo">Woz'U Eats</NavLink>
            <NavLink className = "navbar-text" to="/FoodTruckMenu">Woz'U Eats Menu</NavLink>
            <NavLink className = "navbar-text" to="/CreateOrder">Woz U Order Creation</NavLink>
            <NavLink className = "navbar-text" to="/CartItems">Woz U Cart Items</NavLink>
            
        </nav>
    );
}

export default Navigation;