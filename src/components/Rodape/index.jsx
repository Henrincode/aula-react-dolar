import style from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <>
      <div>
        <footer className="text-center bg-dark text-white p-3">
          <p>
            Desenvolvido por &nbsp;
            <a
              href="https://linkedin.com/in/henrymarques"
              target="_blank"
              className="text-danger"
            >
              Henrique Marques
            </a>
            &nbsp; no &nbsp;
            <a
              href="https://sp.senac.br/americana"
              target="_blank"
              className="text-danger"
            >
              Senac Americana
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
