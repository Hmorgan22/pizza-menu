import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { ShoppingCart } from "./ShoppingCart";

export const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
    qty: 0,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
    qty: 0,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
    qty: 0,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
    qty: 0,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
    qty: 0,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
    qty: 0,
  },
];

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(pizza) {
    const updatedCart = [...cart];
    const existingPizzaIndex = updatedCart.findIndex(
      (item) => item.name === pizza.name
    );

    if (existingPizzaIndex !== -1) {
      updatedCart[existingPizzaIndex].qty += 1;
    } else {
      updatedCart.push({ ...pizza, qty: 1 });
    }

    setCart(updatedCart);
  }

  return (
    <div className="container">
      <Header />
      <Menu addToCart={addToCart} />
      <ShoppingCart cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
