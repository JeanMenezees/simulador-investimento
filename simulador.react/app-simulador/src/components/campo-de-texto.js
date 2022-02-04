import React from "react";
import styled from "styled-components";

const BoxCampoDeTexto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 16px 0;
`;

const StyledLabel = styled.label`
    font-size: ${(props => props.tamanhoFonte)}
    color: ${props => props.invalido ? "red;" : "black;"}
    margin: 8px 0;
    font-size: 1.1rem;
`;

const StyledCampoDeTexto = styled.input`
  padding: 16px;
  background-color: transparent;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }
`;

function CampoDeTexto(props) {
  return (
    <BoxCampoDeTexto>
      <StyledLabel
        tamanhoFonte={"1.1rem;"}
        invalido={false}
      >
          {props.nome}
      </StyledLabel>
      <StyledCampoDeTexto
      >
      </StyledCampoDeTexto>
      {/* Label condicional, apenas se os campos estao invalidos */}
      <StyledLabel
        tamanhoFonte={"1.1rem;"}
        invalido={true}
      >
          {props.noErro}
      </StyledLabel>
    </BoxCampoDeTexto>
  );
}

export default CampoDeTexto;
