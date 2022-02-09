import React from "react";
import Formulario from "./formulario";
import {
  BoxSection,
  BoxSimuladorSection,
  TituloSimulador,
} from "../styled-components/SecaoSimulacao/styles";

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
