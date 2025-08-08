  import style from "./Menu.module.scss";
  import { Link } from "react-router-dom";

  export default function Menu() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler m-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto text-center">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Calculadora de dólar
                </Link>
                <Link to="/medida" className="nav-link">
                  Calculadora de medidas
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
