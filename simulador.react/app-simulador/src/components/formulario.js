import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ConjuntoDeBotoes from "./conjunto-botoes";

const StyledFormulario = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4%;
  box-sizing: border-box;
  
  @media (min-width: 1070px){
    width: 50%;
  }
`;

const StyledInput = styled.input`
  margin: 16px 0;
  padding: 8px;
  font-size: 1.2rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const FormularioHeader = styled.header`
  display: flex;
  flex-direction: row;
  algin-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const FormularioTitulo = styled.h1`
  text-align: left;
  font-size: 1.1rem;
`;

const StyledLabel = styled.p`
  font-size: 1.1rem;
  text-align: left;
  margin: 0;
`;

export default function Formulario(props) {
  // Usando o state para sabermos qual e o valor do ipca/cdi
  const [valor, setValor] = useState("");

  // Sempre quando renderizado, uma requisicao e feita para a api
  // Com base na props.tipo sabemos se queremos ipca ou cdi
  useEffect(() => {
    axios
      .get("http://localhost:3000/indicadores")
      .then((resposta) => {
        setValor((valorAntigo) => {
          if (props.tipo == "0") {
            return resposta.data[0].valor;
          }
          if (props.tipo == "1") {
            return resposta.data[1].valor;
          } else {
            return valorAntigo;
          }
        });
      })
      .catch((erro) => {
        console.log("Ih, deu ruim", erro);
      });
  }, []);

  return (
    <StyledFormulario>
      <FormularioHeader>
        <FormularioTitulo>{props.titulo}</FormularioTitulo>
        {/* Aqui vem o icone para as  infos */}
      </FormularioHeader>
      <ConjuntoDeBotoes
        tres={props.tresBotoes ? true : false}
        valores={props.valoresBotoes}
      />
      <StyledLabel>{props.labels[0]}</StyledLabel>
      <StyledInput type="text" />
      <StyledLabel>{props.labels[1]}</StyledLabel>
      <StyledInput type="text" />
      {/* Previne o usuario de trocar o valor */}
      <StyledLabel>{props.labels[2]}</StyledLabel>
      <StyledInput
        type="text"
        value={valor}
        onChange={() => {
          setValor(valor);
        }}
      />
    </StyledFormulario>
  );
}
