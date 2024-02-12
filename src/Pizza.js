import React from "react";

export function Pizza({ pizzaObject, addToCart }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
        {!pizzaObject.soldOut && (
          <button className="btn-order" onClick={() => addToCart(pizzaObject)}>
            Add to cart
          </button>
        )}
      </div>
    </li>
  );
}
