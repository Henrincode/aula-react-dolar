import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import "./App.css";
import Moeda from "./pages/Moeda";
import Medida from "./pages/Medida";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Moeda />} />
          <Route path="/medida" element={<Medida />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
