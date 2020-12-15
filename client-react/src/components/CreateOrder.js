import React, { useState } from 'react';
import axios from "axios";
import '../task.min.css';
import '../index.css'
import "../App.js";





    function CreateOrder() {
        const [foods,setfoods] = useState('')
        const [details,setdetails] = useState('')
        const [price,setprice] = useState('')
        const [quantity,setquantity] = useState('')
    
        
    
    const addToCart = () => {};
    axios.post( "http://localhost:3001/menus",{foods:foods, quantity:quantity})
    
    
    
        return(
           <div>
                <h1>Create Order</h1>
                <p>Food Truck Items to Order</p>
                <label>Entree Item</label>
                 <input type="text" onChange={(event) => {setfoods(event.target.value)} }/>
                 <label>How Many</label>
                 <input type="number"/>         
                 <button onClick={addToCart}>Add to Cart</button>
            </div>
        );
        };

        
         
    
    
    
    
    export default CreateOrder;