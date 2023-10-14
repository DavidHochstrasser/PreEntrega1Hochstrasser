import React from "react";
import Item from "../Components/Item";

const ItemList = ({ productos }) => {
  console.log();
  return (
    <div className="conteiner">
      <h2 className="titulares">Autos Disponibles en nuestro Catálogo</h2>
      <div
        className="productos"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,2fr)",
          gap: "2rem",
          paddingBlock: "2rem",
        }}
      >
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
