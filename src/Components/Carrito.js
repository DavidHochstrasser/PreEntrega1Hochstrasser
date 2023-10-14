import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="conteiner">
      <h1 className="titulares">Carrito</h1>
      <div className="">
        {carrito.map((prod) => (
          <div key={prod.id}>
            <h2>{prod.name}</h2>
            <h4> Precio Unitario: U$D {prod.price}</h4>
            <h4> Precio Total: U$D{prod.price * prod.cantidad}</h4>
            <h5>Cantidad: {prod.cantidad}</h5>
            <h6>Categoria: {prod.category}</h6>
          </div>
        ))}
        {carrito.length > 0 ? (
          <div>
            <h2>Precio Total: U$D{precioTotal()}</h2>
            <button className="btn btn-primary m-3" onClick={handleVaciar}>
              Vaciar Carrito
            </button>
            <Link to="/checkout">
              <button className="btn btn-primary">Finalizar compra</button>
            </Link>
          </div>
        ) : (
          <h2>Tu carrito está vacío, vuelve al catalogo para seguir viendo</h2>
        )}
      </div>
    </div>
  );
};

export default Carrito;
