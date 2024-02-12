import React from "react";
import { pizzaData } from ".";
import { Pizza } from "./Pizza";

export function Menu({ addToCart }) {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian cuisine.</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                pizzaObject={pizza}
                key={pizza.name}
                addToCart={addToCart}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}
