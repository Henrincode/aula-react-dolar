import Titulo from "../components/Titulo";
import Rodape from "../components/Rodape";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import CalcMedida from "../components/CalcMedida";

export default function Medida() {
  return (
    <>
      <div className="container">
        <Titulo titulo="Calculadora de medidas" />
        <Menu />
        {/* <Banner /> */}
        <CalcMedida />
      </div>
      <Rodape />
    </>
  );
}
