import styles from "./CalcMedida.module.scss";
import { Link } from "react-router-dom";
import { TbRulerMeasure } from "react-icons/tb";

export default function CalcMedida() {
  
  // Centímetros para metros
  const centimetros = function () {
    const seletorCentimetros = document.querySelector("#centimetros");
    const seletorMensagem = document.querySelector("#mensagem1");
    const centimetros = Number(seletorCentimetros.value)
    const resultado = centimetros / 100
    const resposta = (resultado).toFixed(2);

    if (validarCampo(seletorCentimetros, seletorMensagem)) {
      return;
    }

    seletorMensagem.innerText = `O valor convertido para metros é ${resposta}m`
  };

  // Metros para centímetros
  const metros = function () {
    const seletorMetros = document.querySelector("#metros");
    const seletorMensagem = document.querySelector("#mensagem2");
    const metros =  Number(seletorMetros.value);
    const resultado = metros * 100;
    const resposta = (resultado).toFixed(2);

    if (validarCampo(seletorMetros, seletorMensagem)) {
      return;
    }

    seletorMensagem.innerText = `O valor convertido para centímetros é ${resultado}cm`
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
        <TbRulerMeasure size={20} color="white" /> Calcular
      </button>
      <div id="mensagem1" className="m-certo"></div>

      <br />
      <br />
      <br />

      <div className="form-grup mb-3">
        <label htmlFor="metros">Metros para centímetros</label>
        <input type="text" className="form-control" id="metros" />
      </div>
      <button type="button" onClick={metros} className="btn btn-primary w-100">
        <TbRulerMeasure size={20} color="white" /> Calcular
      </button>
      <div id="mensagem2" className="m-certo"></div>
    </form>
  );
}
