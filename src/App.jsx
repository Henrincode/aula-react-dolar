import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Titulo from "./components/Titulo";
import Rodape from "./components/Rodape";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Titulo />
      </div>
        <Rodape />
    </>
  );
}

export default App;
