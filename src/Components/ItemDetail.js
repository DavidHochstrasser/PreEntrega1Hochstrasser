import React from "react";

const ItemDetail = ({ item }) => {
  console.log(item);
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
        <img className="card-img-top card-img-top" src={item.image} />
        <h3>{item.name}</h3>
        <h3>Precio U$D {item.price}</h3>
        <p>{item.description}</p>
        <a href={`/carrito`} className="btn btn-primary m-2">
          Agregar al Carrito
        </a>
        <a href={`/`} className="btn btn-primary m-2">
          Volver al Catalogo
        </a>
      </div>
    </div>
  );
};

export default ItemDetail;
