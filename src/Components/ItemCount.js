const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  return (
    <div>
      <div className="item-count">
        <button className="btn btn-primary m-2" onClick={handleRestar}>
          -
        </button>
        <p>{cantidad}</p>
        <button className="btn btn-primary m-2" onClick={handleSumar}>
          +
        </button>
        <br></br>
        <button
          href={`/carrito`}
          className="btn btn-primary m-2"
          onClick={handleAgregar}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
