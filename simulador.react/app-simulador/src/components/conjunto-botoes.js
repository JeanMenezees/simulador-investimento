import React, { useState } from "react";
import styled from "styled-components";

const BoxBotoes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px;'
`;

const BotaoDeConjunto = styled.button`
    padding: 16px;
    background-color: ${(props) =>
      props.selecionado ? "gray;" : "transparent;"}
    color: ${(props) => (props.selecionado ? "white;" : "black;")}
    text-transform: uppercase;
    border-bottom-left-radius: ${(props) => (props.esquerdo ? "8px;" : "0;")}
    border-top-left-radius: ${(props) => (props.esquerdo ? "8px;" : "0;")}
    border-bottom-right-radius: ${(props) => (props.direito ? "8px;" : "0;")}
    border-top-right-radius: ${(props) => (props.direito ? "8px;" : "0;")}
`;

// Posso passar o tipo de layout que quero para o componente
export default function ConjuntoDeBotoes(props) {
  //Usando o state para saber que botao esta selecionado
  const [botaoSelecionado, setBotaoSelecionado] = useState();

  return (
    <>
      {props.tres ? (
        <BoxBotoes>
          <BotaoDeConjunto
            esquerdo
            onClick={(e) => {
              e.preventDefault();
              setBotaoSelecionado(props.valores[0]);
            }}
          >
            {props.valores[0]}
          </BotaoDeConjunto>
          <BotaoDeConjunto
            meio
            onClick={(e) => {
              e.preventDefault();
              setBotaoSelecionado(props.valores[1]);
            }}
          >
            {props.valores[1]}
          </BotaoDeConjunto>
          <BotaoDeConjunto
            direito
            onClick={(e) => {
              e.preventDefault();
              setBotaoSelecionado(props.valores[2]);
            }}
          >
            {props.valores[2]}
          </BotaoDeConjunto>
        </BoxBotoes>
      ) : (
        <BoxBotoes>
          <BotaoDeConjunto
            esquerdo
            onClick={(e) => {
              e.preventDefault();
              setBotaoSelecionado(props.valores[0]);
            }}
          >
            {props.valores[0]}
          </BotaoDeConjunto>
          <BotaoDeConjunto
            direito
            onClick={(e) => {
              e.preventDefault();
              setBotaoSelecionado(props.valores[1]);
            }}
          >
            {props.valores[1]}
          </BotaoDeConjunto>
        </BoxBotoes>
      )}
    </>
  );
}
