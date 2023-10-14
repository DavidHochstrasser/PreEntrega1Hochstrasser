import React from "react";
import "./App.css";
import ItemListConteiner from "./Components/ItemListConteiner";
import ItemDetailConteiner from "./Components/ItemDetailConteiner";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./Components/Contacto";
import { CartProvider } from "./context/CartContext";
import Carrito from "./Components/Carrito";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListConteiner />} />
            <Route path="/item/:id" element={<ItemDetailConteiner />} />
            <Route path="/productos" element={<ItemListConteiner />} />
            <Route
              path="/productos/:category"
              element={<ItemListConteiner />}
            />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
