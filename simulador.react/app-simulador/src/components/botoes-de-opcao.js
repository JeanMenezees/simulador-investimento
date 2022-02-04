import React, { useContext } from "react";
import styled from "styled-components";
import BotaoOpcao from "./botao-de-opcao";

const StyledBotoesDeOpcao = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function BotoesDeOpcao(props) {
  return (
    <StyledBotoesDeOpcao>
      {props.botoes.map((botao) => {
        return (
          <BotaoOpcao
            key={botao.id}
            nome={botao.nome}
            bordaRedondaNa={botao.bordaRedondaNa}
          />
        );
      })}
    </StyledBotoesDeOpcao>
  );
}

export default BotoesDeOpcao;
