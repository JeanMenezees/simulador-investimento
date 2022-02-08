import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ConjuntoDeBotoes from "./conjunto-botoes";

const StyledFormulario = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4%;
  box-sizing: border-box;

  @media (min-width: 1070px) {
    width: 50%;
  }
`;

const StyledInput = styled.input`
  margin: 8px 0;
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
  font-size: ${(props) => (props.valido ? "1rem;" : "0.7rem;")}
  text-align: left;
  margin: ${(props) => (props.valido ? "8px 0;" : "2px 0;")}
  color: ${(props) => (props.valido ? "black;" : "red;")}
`;

export default function Formulario(props) {
  // Usando o state para sabermos qual e o valor do ipca/cdi
  const [valor, setValor] = useState("");
  
  // States que guardam se os inputs que o usuario digita são só numeros
  const [valido1, setValido1] = useState(true);
  const [valido2, setValido2] = useState(true);

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
      <StyledLabel valido>{props.labels[0]}</StyledLabel>
      <StyledInput
        type="text"
        placeholder="R$"
        onChange={(e) => {
          e.preventDefault();
          // isNaN verifica se e numero ou nao
          setValido1(!isNaN(e.target.value));
        }}
      />
      {valido1 ? (
        ""
      ) : (
        <StyledLabel>O campo deve conter somente números</StyledLabel>
      )}

      <StyledLabel valido>{props.labels[1]}</StyledLabel>
      <StyledInput
        type="text"
        placeholder={props.tipo == "0" ? "" : "%"}
        onChange={(e) => {
          e.preventDefault();
          // isNaN verifica se e numero ou nao
          setValido2(!isNaN(e.target.value));
        }}
      />
      {valido2 ? (
        ""
      ) : (
        <StyledLabel>O campo deve conter somente números</StyledLabel>
      )}

      {/* Previne o usuario de trocar o valor */}
      <StyledLabel valido>{props.labels[2]}</StyledLabel>
      <StyledInput
        id={props.labels[2] == "IPCA (ao ano)" ? "ipca": "cdi"}
        type="text"
        value={valor}
        onChange={() => {
          setValor(valor);
        }}
      />
    </StyledFormulario>
  );
}
