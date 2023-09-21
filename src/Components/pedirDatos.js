import catalogo from "../catalogo.json";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(catalogo);
    }, 500);
  });
};

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item = catalogo.find((el) => el.id === id);

    if (item) {
      resolve(item);
    } else {
      reject({
        error: "No se encontró el producto",
      });
    }
  });
};
