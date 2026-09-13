import { useEffect, useState } from "react";
import JogoCard from "./JogoCard";

export default function JogoLista() {
  const [jogos, setJogos] = useState([]);
  const [buscaGenero, setBuscaGenero] = useState("");

  useEffect(() => {
    async function buscarJogos() {
      const response = await fetch("https://www.freetogame.com/api/games");
      const dados = await response.json();
      setJogos(dados.slice(0, 100));
    }
    buscarJogos();
  }, []);

  const generoLista = [...new Set(jogos.map((jogo) => jogo.genre))];
  const jogoFiltrado = jogos.filter((jogo) =>
    buscaGenero == "" ? true : jogo.genre == buscaGenero,
  );

  return (
    <div className="alinharTitulo">
      <h1>Catálogo de Jogos</h1>
      <div className="conteudoBusca">
        <select
          value={buscaGenero}
          onChange={(evento) => setBuscaGenero(evento.target.value)}
          className="campoBusca"
        >
          <option value="">Todos os Gêneros</option>
          {generoLista.map((genero) => (
            <option key={genero} value={genero}>
              {genero}
            </option>
          ))}
        </select>
      </div>
      <div className="alinharJogos">
        {jogoFiltrado.map((jogo) => (
          <div key={jogo.id}>
            <JogoCard jogoId={jogo.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
