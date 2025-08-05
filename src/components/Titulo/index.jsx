import style from "./Titulo.module.scss";

export default function Titulo() {
  return (
    <div className="text-center">
      <h1>Calculadora Dólar</h1>
      <img src="/public/dollar.png" className="img-fluid" width={50} alt="" />
    </div>
  );
}
