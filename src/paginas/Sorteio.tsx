// src/paginas/Sorteio.tsx
import { useState } from "react";
import Card from "../componentes/Card";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";

import "./Sorteio.css";

const Sorteio = () => {
  const participantes = useListaParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState(participantes[0]);
  const [amigoScreto, setAmigoSecreto] = useState("");

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <Card>
      <section className="sorteio">
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <select
            required
            name="participanteDavez"
            id="participanteDavez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={(evento) => setParticipanteDaVez(evento.target.value)}
          >
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <p>Clique em sortear para ver quem é seu amigo secreto!</p>
          <button type="submit" className="botao-sortear">
            Sortear
          </button>
        </form>
        {amigoScreto && (
          <p className="resultado" role="alert">
            {amigoScreto}
          </p>
        )}
        <footer className="sorteio">
          <img
            src="/imagens/aviao.png"
            className="aviao"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};

export default Sorteio;
