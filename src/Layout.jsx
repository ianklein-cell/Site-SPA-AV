import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="conteudoLayout">
      <header>
        <Link to="/">Home</Link>
        <Link to="/jogos">Lista de Jogos</Link>
        <Link to="/ranking">Estatísticas</Link>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="footerFixo">
        <p>Para contato: +55 22 999999999</p>
        <p>Endereço: R. Figueiredo de Magalhães</p>
      </footer>
    </div>
  );
}
