import React, { useEffect, useState } from "react";
import BotoesDeOpcao from "../components/botoes-de-opcao";
import Formulario from "../components/formulario";
import { StyledPageBox, StyledTitulo } from "../components/style-global";
import { Link } from "react-router-dom";
import styled from "styled-components";
import appConfig from '../app-config.json';

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: ${appConfig.colors.primary["100"]}
  padding: 24px 16px;
  position: fixed;
  bottom: 8px;
  left: 8px;
  right: 8px;
  color: white;
  border-radius: 4px;
`;

function Rendimento() {
  return (
    <StyledPageBox>
      {/* Titulo do rendimento */}
      <StyledTitulo>Rendimento</StyledTitulo>
      {/* Componente dos botoes (bruto ou liquido) */}
      <BotoesDeOpcao
        botoes={[
          {
            id: 1,
            nome: "Bruto",
            bordaRedondaNa: "esquerda",
          },
          {
            id: 2,
            nome: "Liquido",
            bordaRedondaNa: "direita",
          },
        ]}
      />
      {/* Formulario do rendimento  (aporte inicial, prazo, IPCA)*/}
      <Formulario
        nomes={["Aporte inicial", "Prazo (em meses)", "IPCA (no ano)"]}
      />
      {/* Link para a prox pagina (Tipo de indexacao)*/}
      <StyledLink
        to="/tipos-indexacao"
      >
        Tipos de indexação
      </StyledLink>
    </StyledPageBox>
  );
}

export default Rendimento;
