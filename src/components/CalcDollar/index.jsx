import styles from "./CalcDollar.module.scss";

export default function CalcDollar() {
  return (
    <form className="w-25 m-auto pt-5 pb-5">
      <div className="form-group mb-3">
        <label htmlFor="reais">Valor em Reais</label>
        <input type="text" className="form-control" id="reais" />
      </div>
      <div className="form-grup mb-3">
        <label htmlFor="cotacao">Cotação do Dólar</label>
        <input type="text" className="form-control" id="cotacao" />
      </div>
      <button className="btn btn-primary w-100">Calcular</button>
    </form>
  );
}
