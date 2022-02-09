import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  padding: 8px;
`;

export const BoxSecoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 1070px) {
    flex-direction: row;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    width: 90%;
  }
`;

export const TituloPrincipal = styled.h1`
  font-size: 2rem;
  color: black;
  text-align: center;
`;

export const BoxBotoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1070px) {
    flex-direction: row;
  }
`;

export const Botao = styled.div`
  bottom: ${(props) => (props.limparCampos ? "64px;" : "8px;")}
  text-align: center;
  width: 100%;
  padding: 16px;
  background-color: ${(props) => props.limparCampos ? "transparent;" : "orange;"}
  color: ${(props) => (props.limparCampos ? "black;" : "black;")};
  border-radius: 4px;
  margin: 8px 0;
  font-weight: bold;
  cursor: pointer;
  border: ${(props) => (props.limparCampos ? "solid 2px gray;" : "0")};
  ${props => props.valido ? "" : "pointer-events: none;"}

  @media (min-width: 1070px){
    margin: 0 8px;
  }
`;

export const BoxSimulacaoEBotoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;