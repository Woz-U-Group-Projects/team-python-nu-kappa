import React from 'react';
import axios from "axios";
import '../task.min.css';



class FoodTruckMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    FoodTruckMenu: [] };
  
  }
  
  componentDidMount() {
    fetch("http://localhost:3001/menus")
    .then(res => res.json)
    .then(foods => this.setState({foods}));
  };
  
    getData = () => {
    
      // Express uses port 3001 (react uses 3000)
      let url = "http://localhost:3001/menus";
      axios.get(url).then(response => this.setState({ menus: response.data }));
    };
  
    addMenu = () => {
      let url = "http://localhost:3001/menus";
      axios.post(url, { name: this.menuName.current.value }).then(response => {
        // refresh the data
        this.getData();
        // empty the input
        this.menuName.current.value = "";
      });
    };
  
  
    render() {
      return (
        <div>
          <h3>List of menus (React)</h3>
          <input ref={this.menu} />
          <button type="button" className="btn btn-primary" onClick={this.addMenu}>add</button>
          <ul>
            {this.state.menus.map(p => (
              <li key={p.menuid}>
                {p.name} : { p.complete ? "complete" : "not complete" } <button type="button" className="btn btn-success">Complete</button><button type="button" className="btn btn-danger">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  const menu = () => {
  return(
    <div>
      
        <h1>Food Truck Menu</h1>
        <body>
         <h1>Entrees</h1>  
         <ul>
           <li>Vegan Pizza: Gluten free, organic tomatoes, spinach, roasted cauliflower, olives and red onions. $12.00 <img src="VeganPizza.jpg"></img> </li>
           <li>Broiled Salmon with a Chilli-Mango Sauce: Pungent red chiles and sweet mango flavor this robust sauce, which accents simply broiled salmon wonderfully. $10.00< img src="salmon.jpg"></img></li>
           <li>Taco Salad: It’s a Taco with no shell! $13.00 <img src="tacosalad.jpg"></img></li>          
           <li>Naked Chix Bowl: Mango basil chicken with Hawaiian mix on top of jasmine rice with cilantro mayo. $9.00 <img src="chickenbowl.jpg"></img></li>          
         </ul>
         <h1>Sides</h1>
         <ul>
         <li>Brown Rice Basil: Lemon juice, pink Himalayan salt, pepper, roasted garlic, tomatoes, thyme and boiled in coconut water. $3.00 <img src="basilbrownrice.png"></img></li>
         <li>Wild Rice Pilaf: This healthy rice pilaf combines wild rice with brown rice for a nutty, delicious side dish. $2.00 <img src="wildricepilaf.jpg"></img></li>
         <li>Orange-Glazed Carrots: It’s Vitamin Rich Carrots! $4.00 <img src="carrots.jpg"></img></li>
        <li>Caulifire: A sautéed cauliflower buffalo ‘chicken’ with ranch. $2.00 <img src="caulifire.jpg"></img></li>
         </ul>
         <h1>Drinks</h1>
         <ul>
         <li>Cucumber Lemonade: Lemonade made from blended cucumbers, fresh lemon juice and honey. $2.00 <img src="lemonade.jpg"></img></li>
        <li>Peach Tea Spritzer: Peaches, lemon juice, chamomile tea, honey and mint leaves. $4.00</li>
        <li>Ginger Tea: It’s Tea with Ginger in it! $3.00</li>
        <li>S’mores Cold Brew: A cold brew coffee for anyone that loves s’mores. $4.00</li>
         </ul>
         <h1>Desserts</h1>
         <ul>
         <li>Bananna Split: Vegan ice cream, cashew milk, coconut milk, organic almonds and cherries. $7.00</li>
         <li>Lemon Raspberry Frozen Yogurt: A healthy, sweet, refreshing treat for your tummy. $4.00</li>
         <li>Red Velvet Fudge: It’s made with Beets! $7.00</li>
         <li>Peaches and Cream Protein Muffins: A light and delicious muffin made with Greek yogurt and diced peaches. $2.00</li>
         </ul>
        </body>
    </div>
  );
  }

  


export default menu;