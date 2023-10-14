import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <i class="bi bi-cart"></i>
      <span> {cantidadEnCarrito()}</span>
    </div>
  );
};

export default CartWidget;
