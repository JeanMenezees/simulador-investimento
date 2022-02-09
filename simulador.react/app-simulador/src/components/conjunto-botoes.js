import React from "react";
import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import ContextoDeDados from "../contexts/contextoDados";

const BoxBotoes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px auto;
  width: 100%;
`;

const BotaoDeConjunto = styled.button`
    width: 50%;
    padding: 16px;
    background-color: ${(props) =>
      props.selecionado ? "orange;" : "transparent;"}
    color: ${(props) => (props.selecionado ? "white;" : "black;")}
    text-transform: uppercase;
    border-bottom-left-radius: ${(props) => (props.esquerdo ? "8px;" : "0;")}
    border-top-left-radius: ${(props) => (props.esquerdo ? "8px;" : "0;")}
    border-bottom-right-radius: ${(props) => (props.direito ? "8px;" : "0;")}
    border-top-right-radius: ${(props) => (props.direito ? "8px;" : "0;")}
`;

// Posso passar o tipo de layout que quero para o componente
export default function ConjuntoDeBotoes(props) {
  const contexto = useContext(ContextoDeDados);

  return (
    <>
      {props.tres ? (
        <BoxBotoes>
          <BotaoDeConjunto
            id="botao__click--teste"
            esquerdo
            onClick={(e) => {
              e.preventDefault();
              contexto.setIndexacao(props.valores[0].toLowerCase());
            }}
            selecionado={contexto.indexacaoSelecionada === props.valores[0].toLowerCase()}
          >
            {props.valores[0]}
          </BotaoDeConjunto>
          <BotaoDeConjunto
            meio
            onClick={(e) => {
              e.preventDefault();
              contexto.setIndexacao(props.valores[1].toLowerCase());
            }}
            selecionado={contexto.indexacaoSelecionada === props.valores[1].toLowerCase()}
          >
            {props.valores[1]}
          </BotaoDeConjunto>
          <BotaoDeConjunto
            direito
            onClick={(e) => {
              e.preventDefault();
              contexto.setIndexacao("ipca");
            }}
            selecionado={contexto.indexacaoSelecionada === "ipca"}
          >
            {props.valores[2]}
          </BotaoDeConjunto>
        </BoxBotoes>
      ) : (
        <BoxBotoes>
          <BotaoDeConjunto
            id="botao__click--teste2"
            esquerdo
            onClick={(e) => {
              e.preventDefault();
              contexto.setInvestimento(props.valores[0].toLowerCase());
            }}
            selecionado={contexto.investimentoSelecionado === props.valores[0].toLowerCase()}
          >
            {props.valores[0]}
          </BotaoDeConjunto>
          <BotaoDeConjunto
            direito
            onClick={(e) => {
              e.preventDefault();
              contexto.setInvestimento(props.valores[1].toLowerCase());
            }}
            selecionado={contexto.investimentoSelecionado === props.valores[1].toLowerCase()}
          >
            {props.valores[1]}
          </BotaoDeConjunto>
        </BoxBotoes>
      )}
    </>
  );
}
