import React from "react";
import { useContext } from "react/cjs/react.development";
import ContextoDeDados from "../contexts/contextoDados";
import {BoxBotoes, BotaoDeConjunto} from "../styled-components/ConjuntoBotoes/styles";

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
