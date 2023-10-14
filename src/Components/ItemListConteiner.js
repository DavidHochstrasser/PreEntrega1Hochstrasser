import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/config";

const ItemListConteiner = () => {
  const [productos, setProductos] = useState([]);

  const category = useParams().category;
  console.log(category);

  useEffect(() => {
    const productosRef = collection(db, "Productos");

    const q = category
      ? query(productosRef, where("category", "==", category))
      : productosRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);

  return (
    <div>
      <div className="conteiner">
        <ItemList productos={productos} />
      </div>
    </div>
  );
};

export default ItemListConteiner;
