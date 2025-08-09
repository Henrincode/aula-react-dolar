import Titulo from "../components/Titulo";
import Moeda from "./Moeda";

export default function Home() {
  return (
    <>
      <h2 className="display-5 text-center">Calculadora de dólar</h2>
      <Moeda />
    </>
  );
}
