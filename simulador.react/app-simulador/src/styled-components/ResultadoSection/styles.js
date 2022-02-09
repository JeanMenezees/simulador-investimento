import styled from 'styled-components';

export const BoxResultadoSection = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 1070px) {
    width: 50%;
    margin: 0 128px;
  }

  @media (min-width: 700px) {
    width: 50%;
  }
`;

export const TituloSection = styled.h1`
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
`;

export const BoxCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1070px) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 40px;
    margin: 16px auto;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 8px gray;
  height: 70%;
  width: 100%;
  min-width: 50px;
  margin: 16px 0;
  padding: 8px 16px;
  background-color: white;
`;

export const CardTitulo = styled.h3`
  font-weight: bold;
  text-align: center;
`;

export const CardConteudo = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${(props) => (props.destacado ? "orange;" : "black;")}
  font-weight: ${(props) => (props.destacado ? "bold;" : "")}
`;

export const BoxGrafico = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Grafico = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

export const BoxLegenda = styled.div`
  display: flex;
  flex-direcion: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 30%;
`;

export const Legenda = styled.div`
  display: flex;
  flex-direcion: row;
  align-items: center;
  margin-right: 8px;
`;

export const CorLegenda = styled.div`
  background-color: ${props => props.cor};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const ColunaPretaGrafico = styled.div`
  width: 6.25%;
  margin: 0 2px;
  height: calc(${(props) => props.porcentagem} * 200px / 100);
  background-color: black;
  border-top: solid orange
    calc(${(props) => props.porcentagemAporte} * 200px / 100);

  @media (min-width: 1070px) {
    height: calc(${(props) => props.porcentagem} * 500px / 100);
    border-top: solid orange
      calc(${(props) => props.porcentagemAporte} * 500px / 100);
  }
`;