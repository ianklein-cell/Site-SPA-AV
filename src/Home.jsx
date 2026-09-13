import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="conteudoHome">
      <h1>Bem-vindo!</h1>
      <h2>O que você irá encontrar: </h2>
      <div className="linksHome">
        <Link to="/jogos" className="linkCard">
          <p>Lista de jogos por gênero</p>
        </Link>
        <Link to="/ranking" className="linkCard">
          <p>Ranking dos 5 jogos mais populares do momento</p>
        </Link>
      </div>
    </div>
  );
}
