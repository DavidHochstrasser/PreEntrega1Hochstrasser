import React, { useContext, useState } from "react";
import ItemCount from "../Components/ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };
  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div
      className="container"
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <div
        className="card "
        style={{
          width: "500px",
          padding: "30px",
        }}
      >
        <img
          className="card-img-top card-img-top"
          alt={item.name}
          src={item.image}
        />
        <h3>{item.name}</h3>
        <h3>Precio U$D {item.price}</h3>
        <p>{item.description}</p>

        <ItemCount
          cantidad={cantidad}
          handleRestar={handleRestar}
          handleSumar={handleSumar}
          handleAgregar={() => {
            agregarAlCarrito(item, cantidad);
          }}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
