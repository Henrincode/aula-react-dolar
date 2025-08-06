import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import "./App.css";
import Titulo from "./components/Titulo";
import Rodape from "./components/Rodape";
import Menu from "./components/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Titulo />
        <Menu />
      </div>
      <Rodape />
    </>
  );
}

export default App;
