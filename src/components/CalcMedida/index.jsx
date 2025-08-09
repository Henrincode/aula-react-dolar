import styles from "./CalcMedida.module.scss";
import { Link } from "react-router-dom";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import "../../functions/validarCampo";

export default function CalcDollar() {
  // Centímetros para metros
  const centimetros = function () {
    const centimetros = document.querySelector("#centimetros");
    const resultado = (centimetros.value / 100).toFixed(2);

    if (!validarCampo(resultado)) {
      return;
    }

    alert(`O valor convertido para metros é ${resultado}m`);
  };

  // Metros para centímetros
  const metros = function () {
    const metros = document.querySelector("#metros");
    const resultado = (metros.value * 100).toFixed(2);

    if (!validarCampo(resultado)) {
      return;
    }

    alert(`O valor convertido para centímetros é ${resultado}cm`);
  };

  // Valida campos
  const validarCampo = (seletor, mensagem) => {
    const value = seletor.value;
    if (isNaN(value) || value == 0 || value == Infinity) {
      seletor.classList.add("errado");
      mensagem.classList.add("m-erro");
      mensagem.innerText =
        "Todos os campos devem estar preenchidos com números!";
      return true;
    }
    seletor.classList.remove("errado");
    mensagem.classList.remove("m-erro");
    return false;
  };

  return (
    <form className="w-25 m-auto pt-5 pb-5">
      <div className="form-group mb-3">
        <label htmlFor="centimetros">Centímetros para metros</label>
        <input type="text" className="form-control" id="centimetros" />
      </div>
      <button
        type="button"
        onClick={centimetros}
        className="btn btn-primary w-100"
      >
        <FaMoneyBillTransfer size={20} color="white" /> Calcular
      </button>
      <div id="menssagem1" className="m-certo"></div>

      <br />
      <br />
      <br />

      <div className="form-grup mb-3">
        <label htmlFor="metros">Metros para centímetros</label>
        <input type="text" className="form-control" id="metros" />
      </div>
      <button type="button" onClick={metros} className="btn btn-primary w-100">
        <FaMoneyBillTransfer size={20} color="white" /> Calcular
      </button>
      <div id="menssagem2" className="m-certo"></div>
    </form>
  );
}
