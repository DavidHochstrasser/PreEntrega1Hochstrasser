import React, { useEffect, useState } from "react";
import { pedirDatos } from "../Components/pedirDatos";
import ItemList from "../Components/ItemList";

const ItemListConteiner = () => {
  const [productos, setProductos] = useState([]);
  console.log(productos);

  useEffect(() => {
    pedirDatos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListConteiner;
