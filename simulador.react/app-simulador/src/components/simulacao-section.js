import React from "react";
import styled from "styled-components";
import Formulario from "./formulario";

const BoxSimuladorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TituloSimulador = styled.h1`
  font-size: 1.5rem;
  color: black;
  text-align: left;
  width: 100%;
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
  background-color: ${(props) => props.limparCampos ? "transparent;" : "gray;"};
  color: ${(props) => props.limparCampos ? "gray;" : "white;"};
  border-radius: 4px;
  margin: 8px 0;
  font-weight: bold;
  border: ${(props) => props.limparCampos ? "solid 2px gray;" : "0"};
`;

export default function SimuladorSection() {
  return (
    <BoxSimuladorSection>
      <TituloSimulador>Simulador</TituloSimulador>
      {/* Aqui vem a secao dos botoes */}

      {/* Formulario para selecionar o tipo de investimento */}
      <Formulario
        tipo="0"
        labels={["Aporte diário", "Prazo (em meses)", "IPCA (ao ano)"]}
        botoesDefault
        valoresBotoes={["Bruto", "Liquido"]}
        titulo="Rendimento"
      />
      {/* Formulario para selecionar o tipo de indexação */}
      <Formulario
        tipo="1"
        labels={["Aporte mensal", "Rentabilidade", "CDI (ao ano)"]}
        tresBotoes
        valoresBotoes={["PRÉ", "PÓS", "FIXO"]}
        titulo="Tipo de indexação"
      />
      <BoxBotoes>
        <Botao limparCampos>Limpar campos</Botao>
        <Botao>Simular</Botao>
      </BoxBotoes>
    </BoxSimuladorSection>
  );
}
