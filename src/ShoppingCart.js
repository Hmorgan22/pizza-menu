import React from "react";
import { CartItem } from "./CartItem";

export function ShoppingCart({ cart, setCart }) {
  return (
    <div>
      {cart.length > 0 && (
        <div className="menu">
          <h2>Order</h2>
          <ul className="pizzas">
            {cart.map((pizza) => (
              <CartItem pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
          <button className="btn" onClick={() => setCart([])}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
