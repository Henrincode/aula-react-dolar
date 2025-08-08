import styles from "./CalcDollar.module.scss";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function CalcDollar() {
  const mensagem = function () {
    // alert("Bora");
    const reais = document.querySelector("#reais").value;
    const cotacao = document.querySelector("#cotacao").value;
    const resultado = (reais / cotacao).toFixed(2).replace(".", ",");

    if (!validarCampo(resultado)) {
      return;
    }

    alert(`O valor convertido para dólares é $${resultado}`);
  };

  const validarCampo = (resultado) => {
    if (isNaN(resultado) || Infinity || resultado.trim() == '') {
      alert("ERRO! O campo deve estar preenchido somente com números");
      return false;
    }
    return true;
  };

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
      <button
        type="button"
        onClick={mensagem}
        className="btn btn-primary w-100"
      >
        <FaMoneyBillTransfer size={20} color="white" /> Calcular
      </button>
    </form>
  );
}
