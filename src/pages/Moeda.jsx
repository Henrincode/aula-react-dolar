import Titulo from "../components/Titulo";
import Rodape from "../components/Rodape";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import CalcDollar from "../components/CalcDollar";

export default function Moeda() {
  return (
    <>
      <div className="container">
        <Titulo titulo="Calculadora de Dólar" />
        <Menu />
        {/* <Banner /> */}
        <CalcDollar />
      </div>
      <Rodape />
    </>
  );
}
