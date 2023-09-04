import NavBar from "./Components/NavBar";

import logo from "./logo.svg";
import "./App.css";
import ItemListConteiner from "./Components/ItemListConteiner";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting="Catálogo de Productos" />
    </div>
  );
}

export default App;
