import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import "./App.css";
import Titulo from "./components/Titulo";
import Rodape from "./components/Rodape";
import Menu from "./components/Menu";
import Baner from "./components/Baner";
import CalcDollar from "./components/CalcDollar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Titulo />
        <Menu />
        <Baner />
        <CalcDollar />
      </div>
      <Rodape />
    </>
  );
}

export default App;
