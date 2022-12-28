import carmen from "./carmen.svg";
import ShoppingCart from "./ShoppingCart";
import React from "react";
import "./sass/App.css";

function App() {
  return (
    <div>
      <header className="flex">
        <img src={carmen} alt="Carmen Lopez" />
        <h3>.React Hooks.</h3>
      </header>
      <main>
        <ShoppingCart />
      </main>
      <footer className="flex">
        <a
          href="https://github.com/cgbl-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          .github.
        </a>
        <a href="https://t.me/cg_bl" target="_blank" rel="noopener noreferrer">
          .let's connect on telegram.
        </a>
      </footer>
    </div>
  );
}

export default App;
