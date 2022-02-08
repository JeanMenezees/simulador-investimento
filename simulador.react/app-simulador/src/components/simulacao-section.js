import axios from "axios";
import React from "react";
import styled from "styled-components";
import Formulario from "./formulario";

const BoxSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxSimuladorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1070px){
    flex-direction: row;
  }
`;

const TituloSimulador = styled.h1`
  font-size: 1.5rem;
  color: black;
  text-align: left;
  width: 100%;
`;

export default function SimuladorSection() {
  return (
    <BoxSection>
      <TituloSimulador>Simulador</TituloSimulador>
      <BoxSimuladorSection>
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
          valoresBotoes={["PRE", "POS", "FIXO"]}
          titulo="Tipo de indexação"
        />
      </BoxSimuladorSection>
    </BoxSection>
  );
}
