import React from 'react';

import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return(
        <nav class="navbar navbar-dark bg-dark">
            <NavLink class = "navbar-text" to ="/">Home</NavLink>
            <NavLink class = "navbar-text" to ="/FoodTruckInfo">Woz'U Eats</NavLink>
            <NavLink class = "navbar-text" to="/FoodTruckMenu">Woz'U Eats Menu</NavLink>
        </nav>
    );
}

export default Navigation;