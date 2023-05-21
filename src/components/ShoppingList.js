import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] =useState("All")
      function handleSelectedCategory(event){
        setCategory(event.target.value)
      }
  return (
    <div className="ShoppingList">
      <div onChange={(e)=>handleSelectedCategory(e)} className="Filter">
        <select  name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => {
          if (selectedCategory ==="All"){
          return <Item key={item.id} name={item.name} category={item.category} />
          }
          else if(item.category ===selectedCategory){
            return <Item key={item.id} name={item.name} category={item.category} />
            
            }
            return console.log("filter applied")
            
          }
)}
      </ul>
    </div>
  );
}

export default ShoppingList;