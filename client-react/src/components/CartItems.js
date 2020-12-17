import axios from "axios";
import '../task.min.css';
import '../index.css'
import "../App.js";
import React, { Component, useState } from 'react';
import CreateOrder from '../components/CreateOrder';


const CartItems = () => {
    return(
        <div className="CartItems">
         <h1>Image</h1>

         <img src="pink-food-truck_23-2147529454.jpg" class="stretch"></img>
       
        </div>
    );
}

export default CartItems;