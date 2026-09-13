import { useEffect, useState } from "react";

export default function JogoCard({ jogoId }) {
  const [detalhesJogo, setDetalhesJogo] = useState(null);

  useEffect(() => {
    async function buscarDetalhes() {
      const response = await fetch(
        `https://www.freetogame.com/api/game?id=${jogoId}`,
      );
      const data = await response.json();
      setDetalhesJogo(data);
    }
    buscarDetalhes();
  }, [jogoId]);
  return (
    <div>
      {detalhesJogo ? (
        <div>
          <h2>{detalhesJogo.title}</h2>
          <p>Gênero: {detalhesJogo.genre}</p>
          <img
            src={detalhesJogo.thumbnail}
            alt={detalhesJogo.title}
          />
        </div>
      ) : (
        "Carregando"
      )}
    </div>
  );
}
