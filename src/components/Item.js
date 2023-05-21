import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setcart] =useState(false)
  function cartHandler(){
    setcart(!cart)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartHandler} className={cart?"in-cart":""}>{cart?"Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
