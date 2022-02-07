import { useContext, useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
import styled from "styled-components";
import SimuladorSection from "./components/simulacao-section";
import ContextoDeDados from "./contexts/contextoDados";
import ResultadoSection from "./components/resultado-section";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  margin: 32px;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const TituloPrincipal = styled.h1`
  font-size: 2rem;
  color: black;
  text-align: center;
`;

function App() {
  const [tipoInvestimento, setTipoInvestimento] = useState();
  const [tipoIndexacao, setTipoIndexacao] = useState();

  return (
    <Box>
      <TituloPrincipal>Simulador de investimentos</TituloPrincipal>
      <ContextoDeDados.Provider
        value={{
          setIndexacao: setTipoIndexacao,
          indexacaoSelecionada: tipoIndexacao,
          setInvestimento: setTipoInvestimento,
          investimentoSelecionado: tipoInvestimento
        }}
      >
        <SimuladorSection />
        <ResultadoSection />
      </ContextoDeDados.Provider>
    </Box>
  );
}

export default App;
