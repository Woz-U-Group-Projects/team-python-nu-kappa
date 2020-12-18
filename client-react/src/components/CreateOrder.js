import axios from "axios";
import '../task.min.css';
import '../index.css'
import "../App.js";
import React, { useEffect, useState } from 'react';


function CreateOrder() {
   const [foods,setfoods] = useState('')
   const [details,setdetails] = useState('')
   const [price,setprice] = useState('')
   const [quantity,setquantity] = useState('')
   let [newmenuitem,setnewmenuitem] = useState (' ')
   const[foodslist,setfoodslist] = useState ([])
  
   setnewmenuitem=(e)=>{
      this.setState({newmenuitem: e.target.value})
   }
   useEffect(() => {
      axios.get( "http://localhost:3001/menus").then((response) =>{
      setfoodslist(response.data);
     
   });
}
   )

   const addToCart = () => {};
    axios.post( "http://localhost:3001/menus",{foods:foods, quantity:quantity})
   

    const updateItem = (id) => {
      this.setnewmenuitem();
      axios.put(`http://localhost:3001/menus/${id}`, {newmenuitem: this.state.newmenuitem})
  
  }
  

  const deleteItem = (id) => {
   axios.delete(`http://localhost:3001/menus/${id}`)
   window.location = '/';
     
        
     }

     return(
      <div>
                                <h1>Input Menu Items</h1>
           
           <label>Entree Item</label>
            <input type="text" onChange={(event) => {setfoods(event.target.value)} }/>
            
            
            <label>How Many</label>              
            <input type="number"onChange={(event) => {setquantity(event.target.value)} }/>
            <button onClick={addToCart}>Add to Cart</button>

           
                                         <h1>Foods</h1>
            {foodslist.map((val, key) => {
               return ( <div> <h3> {val.foods} </h3><h3> {val.quantity}</h3>{" "}  

               <input type="text" placeholder= "Update Item"/> <label>How Many</label>      
               
              <input type="text" name="newmenuitem" onChange={(event) => {setnewmenuitem(event.target.value)} }/>
               
                
               <button onClick={() => updateItem (val._id) }>Update</button>
 
               <button onClick={() => deleteItem(val._id) }>Delete</button>
 
                
               
 
 
               </div> 
          
             
            );
            })}
        </div>
    );
         }


  export default CreateOrder;
  

