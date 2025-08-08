import Titulo from "../components/Titulo";
import Rodape from "../components/Rodape";
import Menu from "../components/Menu";
import Baner from "../components/Baner";
import CalcMedida from "../components/CalcMedida";
// import ParaC from "../pages/ParaC";

export default function Medida() {
  return (
    <>
      <div className="container">
        <Titulo titulo="Calculadora de medidas" />
        <Menu />
        {/* <Baner /> */}
        <CalcMedida />
      </div>
      <Rodape />
    </>
  );
}
