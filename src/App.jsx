import "./StyleJogo.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import JogoLista from "./JogoLista";
import Ranking from "./Ranking";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="jogos" element={<JogoLista />} />
        <Route path="ranking" element={<Ranking />} />
      </Route>
    </Routes>
  );
}
