import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
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
      <ShoppingCart cart={cart} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu({ addToCart }) {
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

function Pizza({ pizzaObject, addToCart }) {
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

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>Your order can be picked up between {openHour} PM and 11:00 PM</p>
      )}
    </footer>
  );
}

function Order() {
  return (
    <div className="order">
      <p>We're open until 11:00 PM. Come visit us or order online. </p>
    </div>
  );
}

function ShoppingCart({ cart }) {
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
          <button className="btn">Place Order</button>
        </div>
      )}
    </div>
  );
}

function CartItem({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <p>Qty: {pizzaObject.qty}</p>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
