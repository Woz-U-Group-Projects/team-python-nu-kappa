import axios from "axios";
import '../task.min.css';
import '../index.css'
import "../App.js";
import React, { Component, useState } from 'react';
import CartItems from '../components/CartItems';



function CreateOrder() {
   const [cart, setcart] = useState("")
   const [foods,setfoods] = useState([
 
      {
         name:'Vegan Pizza',
         price:'$12.00',
         image:'https://images.unsplash.com/photo-1602104980741-b87a33837f9f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8dmVnYW4lMjBwaXp6YXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
 
       },
       {
       name:'Naked Chix Bowl',
       price:'$9.00',
       image:'https://images.unsplash.com/photo-1581184953963-d15972933db1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGFuZCUyMHJpY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
 
       },
       {
        name:'Taco Salad',
        price:'$13.00',
        image:'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTd8fHRhY28lMjBzYWxhZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
   
       },
       {
        name:'Broiled Salmon with a Chilli-Mango Sauce',
        price:'$10.00',
        image:'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fHNhbG1vbiUyMGRpc2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
     
       },
       {
        name:'Brown Rice Basil',
        price:'$10.00',
        image:'https://images.unsplash.com/photo-1600106150552-dbbf6aebf4fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGJyb3duJTIwcmljZSUyMGRpc2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
       
       },
       {
        name:'Wild Rice Pilaf',
        price:'$10.00',
        image:'https://images.unsplash.com/photo-1562158074-d16650a22f83?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTJ8fGJyb3duJTIwcmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
         
       },
       {
        name:'Orange-Glazed Carrots',
        price:'$10.00',
        image:'https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnJvdHMlMjBkaXNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'        
        },
   
        {
        name:'Caulifire',
        price:'$10.00',
        image:'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoaWNrZW4lMjB3aW5nc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
             
       },
 
 
   ]);
 

  
      const addToCart = () => {
       axios.post( "http://localhost:3001/menus")
         setcart([...cart,foods])
      };
      
    
      
   
   
 
    return(
   
       <div className="Order">
       <h2>What would you like to order?</h2>
       <div className="Order Items"></div>
       {foods.map((foods, idx) => ( 
       <div className="Order Items" key={idx}>
       <h3>{foods.name}</h3>
       <h3>{foods.price}</h3>
       <img src={foods.image} alt={foods.name}  /> 
       <input type="Hidden" onChange={(event) => {foods(event.target.value)} } />       
       <button onClick={() => addToCart(setfoods)}>Add to Cart</button>
       <header>
          <button>Reveal Cart Items({cart.length})</button>
       </header>
         
         
           
           
        </div>
       )   
 
       )}
  </div>
 
 );
       }     


      




 

   
  export default CreateOrder;
  

