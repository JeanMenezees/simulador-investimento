import React from "react";
import styled from "styled-components";

const BoxResultadoSection = styled.div`
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

const TituloSection = styled.h1`
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
`;

const BoxCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1070px) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 32px;
    margin: 16px auto;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 8px gray;
  height: 100%;
  width: 100%;
  min-width: 100px;
  margin: 16px 0;
`;

const CardTitulo = styled.h3`
  font-weight: bold;
  text-align: center;
`;

const CardConteudo = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${(props) => (props.destacado ? "orange;" : "black;")}
  font-weight: ${(props) => (props.destacado ? "bold;" : "")}
`;

const BoxGrafico = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Grafico = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

const BoxLegenda = styled.div`
  display: flex;
  flex-direcion: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 30%;
`;

const Legenda = styled.div`
  display: flex;
  flex-direcion: row;
  align-items: center;
  margin-right: 8px;
`;

const CorLegenda = styled.div`
  background-color: ${props => props.cor};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 8px;
`;

const ColunaPretaGrafico = styled.div`
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

export default function ResultadoSection(props) {
  return (
    //Box que engloba toda a secao
    <BoxResultadoSection>
      <TituloSection>Resultado</TituloSection>
      {/* Box da lista de cards */}
      <BoxCards>
        <Card>
          <CardTitulo>Valor final bruto</CardTitulo>
          <CardConteudo>R$ {props.simulacao[0].valorFinalBruto}</CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Alíquota do IR</CardTitulo>
          <CardConteudo>{props.simulacao[0].aliquotaIR}%</CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Valor pago em IR</CardTitulo>
          <CardConteudo>R$ {props.simulacao[0].valorPagoIR}</CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Valor final líquido</CardTitulo>
          <CardConteudo destacado>
            R$ {props.simulacao[0].valorTotalInvestido}
          </CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Valor total investido</CardTitulo>
          <CardConteudo>R$ {props.simulacao[0].valorFinalLiquido}</CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Ganho líquido</CardTitulo>
          <CardConteudo destacado>
            R$ {props.simulacao[0].ganhoLiquido}
          </CardConteudo>
        </Card>
      </BoxCards>
      {/* Box do gráfico */}
      <BoxGrafico>
        <Grafico>
          {Object.keys(props.simulacao[0].graficoValores.semAporte).map(
            (key) => {
              return (
                <ColunaPretaGrafico
                  key={props.simulacao[0].graficoValores.semAporte[key]}
                  porcentagem={
                    ((props.simulacao[0].graficoValores.semAporte[key] /
                      props.simulacao[0].graficoValores.semAporte[0]) *
                      100) /
                    10
                  }
                  porcentagemAporte={
                    ((props.simulacao[0].graficoValores.comAporte[key] /
                      props.simulacao[0].graficoValores.semAporte[0]) *
                      100) /
                    10
                  }
                ></ColunaPretaGrafico>
              );
            }
          )}
        </Grafico>
      </BoxGrafico>
      <BoxLegenda>
        <Legenda>
          <CorLegenda cor="orange"/>
          <p>Com Aporte</p>
        </Legenda>
        <Legenda>
          <CorLegenda cor="black"/>
          <p>Sem Aporte</p>
        </Legenda>
      </BoxLegenda>
    </BoxResultadoSection>
  );
}
