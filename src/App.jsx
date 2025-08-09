import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Moeda from "./pages/Moeda";
import Medida from "./pages/Medida";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
            <Route path="/Moeda" element={<Moeda />} />
            <Route path="/medida" element={<Medida />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// export default App;
