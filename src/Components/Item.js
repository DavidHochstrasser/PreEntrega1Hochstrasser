import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top card-img-top"
          style={{ height: "auto" }}
          src={producto.image}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <p className="card-text">Precio U$D {producto.price}</p>
          <p className="card-text">Modelo {producto.year}</p>
          <Link to={`/item/${producto.id}`} className="btn btn-primary">
            Ver Más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
