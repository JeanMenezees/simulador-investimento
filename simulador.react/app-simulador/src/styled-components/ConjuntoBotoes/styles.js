import styled from "styled-components";

export const BoxBotoes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px auto;
  width: 100%;
`;

export const BotaoDeConjunto = styled.button`
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