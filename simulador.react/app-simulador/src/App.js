import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import Rendimento from "./routes/rendimento";
import ResultadoSimulacao from "./routes/resultado-simulacao";
import TiposIndexacao from "./routes/tipos-indexacao";
import ContextoDeTipos from "./contexts/tiposContexto";
import axios from 'axios';

function App() {
  const [investimento, setInvestimento] = useState("");
  const [indexacao, setIndexacao] = useState("");
  const [ipca, setIpca] = useState("");
  const [cdi, setCdi] = useState(""); 

  //Toda vez que for renderizado, da um fecth na api e pega o cdi e o ipca, e manda via state para as rotas (rendimento, indexacao)
  useEffect(() => {
    axios.get("http://localhost:3000/indicadores")
    .then((resposta) => {
      const dados = resposta;

      setIpca(dados.data[1].valor)
      setCdi(dados.data[0].valor)
    })
    .catch(error => {
      console.log('Vish, deu ruim!')
      console.log(error)
    })
  }, [])

  function mudarInvestimentoHandler(novoInvestimento) {
    setInvestimento(novoInvestimento);
  }

  function mudarIndexacaoHandler(novaIndexacao) {
    setIndexacao(novaIndexacao);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ContextoDeTipos.Provider
              value={{
                tipoAtual: investimento,
                mudar: mudarInvestimentoHandler,
                api: ipca
              }}
            >
              <Rendimento />
            </ContextoDeTipos.Provider>
          }
        />
        <Route
          path="/tipos-indexacao"
          element={
            <ContextoDeTipos.Provider
              value={{
                tipoAtual: indexacao,
                mudar: mudarIndexacaoHandler,
                api: cdi
              }}
            >
              <TiposIndexacao />
            </ContextoDeTipos.Provider>
          }
        />
        <Route
          path="/resultado"
          element={
            <ResultadoSimulacao
              tipos={{
                tipoInvestimento: investimento,
                tipoIndexacao: indexacao,
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
