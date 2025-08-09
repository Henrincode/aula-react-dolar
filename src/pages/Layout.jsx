import { Outlet, Link } from "react-router-dom";
import Titulo from '../components/Titulo'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Rodape from '../components/Rodape'

export default function Layout() {
  return (
    <>
      <div className="container">
        <Titulo titulo="Calculadoras" />
        <Menu />
        <Banner />
        <Outlet />
      </div>
      <Rodape />
    </>
  );
}
