import "./App.css";
import ItemListContainer from "./components/ItemListContainer/itemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Buen día, todavía no sé muy bien qué hacer" />
    </>
  );
}

export default App;
