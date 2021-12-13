import React from "react";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{cart}, dispatch] = useStateValue();  

  return (
    <div className="subtotal">
                <p>Subtotal ({cart.length} items):<strong>0</strong> </p>
                <small className="subtotal--gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
      <button>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
