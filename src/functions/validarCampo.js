export default function validarCampo(seletor) {
    if (isNaN(seletor)) {
      // seletor.classList.add("erro");
      alert("ERRO! O campo deve estar preenchido somente com números");
      return false;
    }
    // seletor.classList.remove("erro");
    return true
  };