import React, { useContext } from "react";
import { AppContext } from "./ShoppingCart";

function TotalAmount() {
  const { totalSum } = useContext(AppContext);

  return (
    <div>
      <span className="underline">TOTAL AMOUNT TO PAY</span>
      <h3>${totalSum}</h3>
    </div>
  );
}

export default TotalAmount;
