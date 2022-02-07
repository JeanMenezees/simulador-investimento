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

const BoxBotoes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const Botao = styled.div`
  bottom: ${(props) => (props.limparCampos ? "64px;" : "8px;")}
  text-align: center;
  padding: 16px;
  background-color: ${(props) =>
    props.limparCampos ? "transparent;" : "gray;"};
  color: ${(props) => (props.limparCampos ? "gray;" : "white;")};
  border-radius: 4px;
  margin: 8px 0;
  font-weight: bold;
  border: ${(props) => (props.limparCampos ? "solid 2px gray;" : "0")};
`;

const BoxSimulacaoEBotoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [tipoInvestimento, setTipoInvestimento] = useState();
  const [tipoIndexacao, setTipoIndexacao] = useState();
  const [resultadoAtivo, setResultadoAtivo] = useState(false);
  const [simulacoes, setSimulacoes] = useState([
    {
      valorFinalBruto: "",
      aliquotaIR: "",
      valorPagoIR: "",
      valorTotalInvestido: "",
      valorFinalLiquido: "",
      ganhoLiquido: "",
      graficoValores: {
        comAporte: {
        },
        semAporte: {
        },
      },
    },
  ]);

  return (
    <Box>
      <TituloPrincipal>Simulador de investimentos</TituloPrincipal>
      <ContextoDeDados.Provider
        value={{
          setIndexacao: setTipoIndexacao,
          indexacaoSelecionada: tipoIndexacao,
          setInvestimento: setTipoInvestimento,
          investimentoSelecionado: tipoInvestimento,
        }}
      >
        <BoxSimulacaoEBotoes>
          <SimuladorSection />
          <BoxBotoes>
            <Botao limparCampos>Limpar campos</Botao>
            <Botao
              onClick={() => {
                axios
                  .get("http://localhost:3000/simulacoes")
                  .then((resposta) => {
                    setSimulacoes(
                      resposta.data.filter(
                        (simulacao) =>
                          simulacao.tipoRendimento === tipoInvestimento &&
                          simulacao.tipoIndexacao === tipoIndexacao
                      )
                    );
                  })
                  .catch((erro) => {
                    console.log("Ih, deu ruim", erro);
                  })
                  .then(setResultadoAtivo(true))
              }}
            >
              Simular
            </Botao>
          </BoxBotoes>
        </BoxSimulacaoEBotoes>
        {resultadoAtivo ? <ResultadoSection simulacao={simulacoes} /> : ""}
      </ContextoDeDados.Provider>
    </Box>
  );
}

export default App;
