import React, { useContext } from "react";
import { AppContext } from "./ShoppingCart";

function ItemsCount() {
  const { totalItems } = useContext(AppContext);

  return (
    <div>
      <span className="underline">TOTAL ITEMS IN CART</span>
      <h3>{totalItems}</h3>
    </div>
  );
}

export default ItemsCount;
