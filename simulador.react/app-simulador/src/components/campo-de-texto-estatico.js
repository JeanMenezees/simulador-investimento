import React, { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import ContextoDeTipos from "../contexts/tiposContexto";

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
  border-bottom: "3px black";
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }
`;

function CampoDeTextoEstatico(props) {
  const contexto = useContext(ContextoDeTipos)
  const [valorApi, setValorApi] = useState("");

  useEffect(() => {
    setValorApi(contexto.api)
  })

  return (
    <BoxCampoDeTexto>
      <StyledLabel
        tamanhoFonte={"1.1rem;"}
        invalido={false}
      >
          {props.nome}
      </StyledLabel>
      <StyledCampoDeTexto
        value={valorApi}
        onChange={() => {
          setValorApi(valorApi);
        }}
      >
      </StyledCampoDeTexto>
    </BoxCampoDeTexto>
  );
}

export default CampoDeTextoEstatico;