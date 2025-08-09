export default function sobre() {
  return (
    <>
      <section>
        <h1>Sobre o Projeto</h1>

        <p>
          Este projeto foi desenvolvido com o objetivo de praticar conceitos
          fundamentais de JavaScript, HTML e CSS por meio da construção de
          ferramentas simples, porém úteis para o dia a dia:{" "}
          <strong>calculadoras de conversão</strong>.
        </p>

        <p>A aplicação é composta por três funcionalidades principais:</p>

        <h2>💱 Conversor de Moeda: Reais para Dólares</h2>
        <p>
          A primeira calculadora permite ao usuário converter valores em{" "}
          <strong>reais (BRL)</strong> para{" "}
          <strong>dólares americanos (USD)</strong> de forma rápida e prática. A
          conversão é feita a partir de um valor manual de cotação, informado
          pelo próprio usuário, o que permite maior flexibilidade e adaptação a
          diferentes contextos, como variações cambiais diárias. A calculadora
          realiza a conversão em tempo real e apresenta o resultado com duas
          casas decimais, formatado com separador decimal brasileiro.
        </p>

        <h2>📏 Conversor de Unidades: Centímetros para Metros</h2>
        <p>
          A segunda ferramenta disponível é uma calculadora que converte medidas
          de <strong>centímetros (cm)</strong> para <strong>metros (m)</strong>.
          Esta funcionalidade é útil em diversas situações do cotidiano, como
          projetos de arquitetura, engenharia, decoração ou mesmo em tarefas
          simples que exijam precisão de medidas. A lógica por trás da conversão
          é direta, porém reforça a importância da manipulação correta de
          números e formatações.
        </p>

        <h2>📐 Conversor de Unidades: Metros para Centímetros</h2>
        <p>
          Complementando o projeto, há uma terceira calculadora que realiza o
          caminho inverso: a conversão de <strong>metros (m)</strong> para{" "}
          <strong>centímetros (cm)</strong>. Assim, o usuário pode alternar
          livremente entre as unidades, dependendo da necessidade do momento.
        </p>

        <hr />

        <h2>✨ Objetivos do Projeto</h2>
        <p>
          Além de ser uma ferramenta prática e funcional, este projeto foi
          desenvolvido com foco em:
        </p>
        <ul>
          <li>
            Exercitar a <strong>manipulação de DOM</strong> com JavaScript puro;
          </li>
          <li>
            Praticar <strong>validação de dados de entrada</strong>;
          </li>
          <li>
            Trabalhar com <strong>formatos numéricos e casas decimais</strong>;
          </li>
          <li>Aprimorar o uso de boas práticas de desenvolvimento web;</li>
          <li>
            Criar uma interface clara, responsiva e acessível para o usuário
            final.
          </li>
        </ul>

        <hr />

        <h2>🛠️ Tecnologias Utilizadas</h2>
        <ul>
          <li>
            <strong>HTML5</strong> para a estrutura da página;
          </li>
          <li>
            <strong>CSS3</strong> para o estilo e responsividade;
          </li>
          <li>
            <strong>JavaScript (Vanilla JS)</strong> para a lógica de conversão,
            interação com o usuário e validações.
          </li>
        </ul>
      </section>
    </>
  );
}
