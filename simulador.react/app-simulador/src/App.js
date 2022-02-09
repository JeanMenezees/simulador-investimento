import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
import SimuladorSection from "./components/simulacao-section";
import ContextoDeDados from "./contexts/contextoDados";
import ResultadoSection from "./components/resultado-section";
import {
  Box,
  BoxSecoes,
  BoxBotoes,
  BoxSimulacaoEBotoes,
  Botao,
  TituloPrincipal,
} from "./styled-components/App/styles";

function App() {
  // States para pegar os tipos selecionados para o botao simular dar o get e verificar qual simulacao deve ser exibida
  const [tipoInvestimento, setTipoInvestimento] = useState("");
  const [tipoIndexacao, setTipoIndexacao] = useState("");

  // State para exibir a secao do resultado
  const [resultadoAtivo, setResultadoAtivo] = useState(false);

  // Setando a simulacao vazia
  // Esta simulação vai para o resultado
  const [simulacao, setSimulacao] = useState([
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

  //state para informacoes do formulario
  const [aporteDiario, setAporteDiario] = useState("");
  const [prazo, setPrazo] = useState("");
  const [aporteMensal, setAporteMensal] = useState("");
  const [rentabilidade, setRentabilidade] = useState("");

  // Funcao para validar os dados dos formularios
  function formularioValido(
    arrayValidacao = [aporteDiario, prazo, aporteMensal, rentabilidade]
  ) {
    if (
      arrayValidacao.filter((item) => item === "" || isNaN(item)).length === 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  //State que determina se botao de simular vai ficar ativo
  const [infosValidas, setInfosValidas] = useState(false);

  //Toda vez que uma informação do formulario muda, as infos sao validadas

  // TODO
  // Receber se os inputs dos formularios estao validos
  useEffect(() => {
    if (tipoInvestimento !== "" && tipoIndexacao !== "" && formularioValido()) {
      setInfosValidas(true);
    } else {
      setInfosValidas(false);
    }
  }, [
    tipoInvestimento,
    tipoIndexacao,
    aporteDiario,
    aporteMensal,
    prazo,
    rentabilidade,
  ]);

  return (
    <Box>
      {/* Contexto para haver uma comunicacao entre os childrens e o parent com lift state e data flow para saber qual tipo esta selecionado */}
      <ContextoDeDados.Provider
        value={{
          setIndexacao: setTipoIndexacao,
          indexacaoSelecionada: tipoIndexacao,
          setInvestimento: setTipoInvestimento,
          investimentoSelecionado: tipoInvestimento,
          setAporteMensal: setAporteMensal,
          setAporteDiario: setAporteDiario,
          setRentabilidade: setRentabilidade,
          setPrazo: setPrazo,
          aporteMensal: aporteMensal,
          aporteDiario: aporteDiario,
          rentabilidade: rentabilidade,
          prazo: prazo,
        }}
      >
        <TituloPrincipal>Simulador de investimentos</TituloPrincipal>
        <BoxSecoes>
          <BoxSimulacaoEBotoes>
            <SimuladorSection />
            <BoxBotoes>
              {/* Limpa campos */}
              <Botao
                id="limpa__campo--teste"
                limparCampos
                valido
                onClick={() => {
                  setAporteDiario("");
                  setPrazo("");
                  setAporteMensal("");
                  setRentabilidade("");
                }}
              >
                Limpar campos
              </Botao>
              <Botao
                // Get na api e filtro com os tipos selecionados do state
                id="botao__simular--teste"
                valido={infosValidas}
                onClick={() => {
                  axios
                    .get("http://localhost:3000/simulacoes")
                    .then((resposta) => {
                      setSimulacao(
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
                    // Fazendo a secao do resultado aparecer
                    .then(setResultadoAtivo(true));
                }}
              >
                Simular
              </Botao>
            </BoxBotoes>
          </BoxSimulacaoEBotoes>
          {/* Se o state da secao estiver true exibe a secao do resultado, se nao nao exibe nada  */}
          {resultadoAtivo ? <ResultadoSection simulacao={simulacao} /> : ""}
        </BoxSecoes>
      </ContextoDeDados.Provider>
    </Box>
  );
}

export default App;
