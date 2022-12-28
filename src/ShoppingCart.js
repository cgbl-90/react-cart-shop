import React, { useState, createContext, useEffect } from "react";
import TotalAmout from "./TotalAmount";
import ItemsCount from "./ItemsCount";
import data from "./data.js";

export const AppContext = createContext(null);

function ShoppingCart() {
  const [totalSum, setTotalSum] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [cart, setCart] = useState(data);

  useEffect(() => {
    console.log("Is working");
    const a = cart.reduce((a, v) => (a = a + v.price), 0);
    setTotalSum(a);
    setTotalItems(cart.length);
    return;
  }, []);

  function removeItemFromList(el) {
    const newList = cart.filter((item) => item.id !== el.id);
    setCart(newList);
  }

  return (
    <AppContext.Provider value={{ totalSum, totalItems }}>
      <ItemsCount />
      <div>
        <h1>YOUR CART</h1>
        <ul>
          {cart.map((el) => {
            return (
              <li key={el.id}>
                <span>${el.price}</span>
                <h3>{el.name}</h3>
                <button onClick={removeItemFromList(el)}>remove</button>
              </li>
            );
          })}
        </ul>
        <TotalAmout />
        <button onClick={() => setCart([])}>DELETE ALL</button>
      </div>
    </AppContext.Provider>
  );
}

export default ShoppingCart;
