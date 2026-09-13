import { useEffect, useState } from "react";
import JogoCard from "./JogoCard";

export default function Ranking() {
  const [jogos, setJogos] = useState(null);

  useEffect(() => {
    async function buscarRanking() {
      const response = await fetch(
        "https://www.freetogame.com/api/games?sort-by=popularity"
      );
      const dados = await response.json();
      setJogos(dados.slice(0, 5));
    }
    buscarRanking();
  }, []);

  return (
    <div className="alinharTitulo">
      <h1>Top 5 Jogos Mais Populares</h1>
      {jogos ? (
        <div className="alinharJogos">
          {jogos.map((jogo, index) => (
            <div key={jogo.id} className="cardRanking">
              <JogoCard jogoId={jogo.id} />
              <div className="posicaoRanking">
                #{index + 1}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando ranking...</p>
      )}
    </div>
  );
}