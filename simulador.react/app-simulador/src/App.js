import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
import styled from "styled-components";
import SimuladorSection from "./components/simulacao-section";
import ContextoDeDados from "./contexts/contextoDados";

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
  return (
    <Box>
      <TituloPrincipal>Simulador de investimentos</TituloPrincipal>
      <SimuladorSection />
    </Box>
  );
}

export default App;
