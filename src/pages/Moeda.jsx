import Titulo from "../components/Titulo";
import Rodape from "../components/Rodape";
import Menu from "../components/Menu";
import Baner from "../components/Baner";
import CalcDollar from "../components/CalcDollar";

export default function Moeda() {
  return (
    <>
      <div className="container">
        <Titulo titulo="Calculadora de Dólar" />
        <Menu />
        {/* <Baner /> */}
        <CalcDollar />
      </div>
      <Rodape />
    </>
  );
}
