import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/config";

const Checkout = () => {
  const [pedidoId, setPedidoID] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoID(doc.id);
      vaciarCarrito();
    });
  };
  if (pedidoId) {
    return (
      <div>
        <h1>Muchas gracias por tu compra</h1>
        <h3>Tu numero de pedido es: {pedidoId}</h3>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Finalizar Compra</h1>
      <form className="formulario " onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        ></input>
        <br></br>
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        ></input>
        <br></br>
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        ></input>
        <br></br>

        <button className="btn btn-primary m-3" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
