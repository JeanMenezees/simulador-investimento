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
  padding: 8px;
`;

const BoxSecoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 1070px) {
    flex-direction: row;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    width: 90%;
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
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1070px) {
    flex-direction: row;
  }
`;

const Botao = styled.div`
  bottom: ${(props) => (props.limparCampos ? "64px;" : "8px;")}
  text-align: center;
  width: 100%;
  padding: 16px;
  background-color: ${(props) =>
    props.limparCampos ? "transparent;" : "gray;"};
  color: ${(props) => (props.limparCampos ? "gray;" : "white;")};
  border-radius: 4px;
  margin: 8px 0;
  font-weight: bold;
  border: ${(props) => (props.limparCampos ? "solid 2px gray;" : "0")};

  @media (min-width: 1070px){
    margin: 0 8px;
  }
`;

const BoxSimulacaoEBotoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
        comAporte: {},
        semAporte: {},
      },
    },
  ]);

  return (
    <Box>
      <ContextoDeDados.Provider
        value={{
          setIndexacao: setTipoIndexacao,
          indexacaoSelecionada: tipoIndexacao,
          setInvestimento: setTipoInvestimento,
          investimentoSelecionado: tipoInvestimento,
        }}
      >
        <TituloPrincipal>Simulador de investimentos</TituloPrincipal>
        <BoxSecoes>
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
                    .then(setResultadoAtivo(true));
                }}
              >
                Simular
              </Botao>
            </BoxBotoes>
          </BoxSimulacaoEBotoes>
          {resultadoAtivo ? <ResultadoSection simulacao={simulacoes} /> : ""}
        </BoxSecoes>
      </ContextoDeDados.Provider>
    </Box>
  );
}

export default App;
