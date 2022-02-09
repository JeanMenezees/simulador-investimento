import React, { useEffect, useState } from "react";
import axios from "axios";
import ConjuntoDeBotoes from "./conjunto-botoes";
import { useContext } from "react/cjs/react.development";
import ContextoDeDados from "../contexts/contextoDados";
import {
  StyledInput,
  StyledFormulario,
  StyledLabel,
  FormularioHeader,
  FormularioTitulo,
} from "../styled-components/Formulário/styles";

export default function Formulario(props) {
  // Contexto para enviar as infos para o App
  const contexto = useContext(ContextoDeDados);

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
          if (props.tipo === "0") {
            return resposta.data[0].valor;
          }
          if (props.tipo === "1") {
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
        id={props.tipo === "0" ? "input__1--teste" : "input__1cdi--teste"}
        value={
          props.tipo === "0" ? contexto.aporteDiario : contexto.aporteMensal
        }
        type="text"
        placeholder="R$"
        onChange={(e) => {
          e.preventDefault();
          // isNaN verifica se e numero ou nao
          setValido1(!isNaN(e.target.value));
          if (props.tipo === "0") {
            contexto.setAporteDiario(e.target.value);
          } else {
            contexto.setAporteMensal(e.target.value);
          }
        }}
      />
      {valido1 ? (
        ""
      ) : (
        <StyledLabel id="label__1--teste">
          O campo deve conter somente números
        </StyledLabel>
      )}

      <StyledLabel valido>{props.labels[1]}</StyledLabel>
      <StyledInput
        id={props.tipo === "0" ? "input__2--teste" : "input__2cdi--teste"}
        value={props.tipo === "0" ? contexto.prazo : contexto.rentabilidade}
        type="text"
        placeholder={props.tipo === "0" ? "" : "%"}
        onChange={(e) => {
          e.preventDefault();
          // isNaN verifica se e numero ou nao
          setValido2(!isNaN(e.target.value));
          if (props.tipo === "0") {
            contexto.setPrazo(e.target.value);
          } else {
            contexto.setRentabilidade(e.target.value);
          }
        }}
      />
      {valido2 ? (
        ""
      ) : (
        <StyledLabel id="label__2--teste">
          O campo deve conter somente números
        </StyledLabel>
      )}

      {/* Previne o usuario de trocar o valor */}
      <StyledLabel valido>{props.labels[2]}</StyledLabel>
      <StyledInput
        id={props.labels[2] === "IPCA (ao ano)" ? "ipca" : "cdi"}
        type="text"
        value={valor}
        onChange={() => {
          setValor(valor);
        }}
      />
    </StyledFormulario>
  );
}
