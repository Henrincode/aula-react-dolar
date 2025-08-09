import styles from "./CalcDollar.module.scss";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function CalcDollar() {
  // Faz o calculo
  const mensagem = function () {
    const seletorReais = document.querySelector("#reais");
    const seletorCotacao = document.querySelector("#cotacao");
    const seletorMensagem = document.querySelector('#mensagem')
    const reais = Number(seletorReais.value);
    const cotacao = Number(seletorCotacao.value);
    const resultado = reais / cotacao;
    const resposta = (resultado).toFixed(2).replace(".", ",");
    
    // Valida os campos
    if (validarCampo(seletorReais, seletorMensagem)) {
      return;
    }
    
    if (validarCampo(seletorCotacao, seletorMensagem)) {
      return;
    }

    // Imprime mensagem
    seletorMensagem.innerText = `O valor convertido para dólares é $${resposta}`;
  };

  // Valida campos
  const validarCampo = (seletor, mensagem) => {
    const value = seletor.value
    if (isNaN(value) || value == 0 || value == Infinity) {
      seletor.classList.add('errado')
      mensagem.classList.add('m-erro')
      mensagem.innerText = 'Todos os campos devem estar preenchidos com números!'
      return true;
    }
    seletor.classList.remove('errado')
    mensagem.classList.remove('m-erro')
    return false;
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
      <div id="mensagem" className="m-certo"></div>
    </form>
  );
}
