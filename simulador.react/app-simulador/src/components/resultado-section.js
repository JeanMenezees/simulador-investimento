import React from "react";
import { useContext, useEffect, useState } from "react/cjs/react.development";
import ContextoDeDados from "../contexts/contextoDados";
import styled from "styled-components";

const BoxResultadoSection = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  width: 90%;
  height: 90%;
`;

const TituloSection = styled.h1`
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
`;

const BoxCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxGrafico = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 8px gray;
  width: 100%;
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

const Grafico = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 90%;
  align-items: flex-end;
  justify-content: center;
  height: 50%;
`;

const ColunaLaranjaGrafico = styled.div`
  width: calc(100% / 16);
  margin: 0 2px;
  height: ${(props) => props.porcentagem}%;
  background-color: orange;
  padding-bottom: 2px;
  border-bottom: solid black ${props => props.porcentagem2}%;
`;

const ColunaPretaGrafico = styled.div`
  width: calc(100% / 16);
  margin: 0 2px;
  height: ${(props) => props.porcentagem}%;
  background-color: black;
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
          <CardConteudo destacado>R$ {props.simulacao[0].valorTotalInvestido}</CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Valor total investido</CardTitulo>
          <CardConteudo>R$ {props.simulacao[0].valorFinalLiquido}</CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Ganho líquido</CardTitulo>
          <CardConteudo destacado>R$ {props.simulacao[0].ganhoLiquido}</CardConteudo>
        </Card>
      </BoxCards>
      {/* Box do gráfico */}
      <BoxGrafico>
        <Grafico>
          {Object.keys(props.simulacao[0].graficoValores.comAporte).map((key) => {
            return (
              <ColunaLaranjaGrafico
                key={props.simulacao[0].graficoValores.comAporte[key]}
                porcentagem={((props.simulacao[0].graficoValores.comAporte[key] / props.simulacao[0].graficoValores.comAporte[0]) * 100)/10}
              ></ColunaLaranjaGrafico>
            );
          })}
        </Grafico>
        <Grafico>
        {Object.keys(props.simulacao[0].graficoValores.semAporte).map((key) => {
            return (
              <ColunaPretaGrafico
                key={props.simulacao[0].graficoValores.semAporte[key]}
                porcentagem={((props.simulacao[0].graficoValores.semAporte[key] / props.simulacao[0].graficoValores.semAporte[0]) * 100)/10}
              ></ColunaPretaGrafico>
            );
          })}
        </Grafico>
      </BoxGrafico>
    </BoxResultadoSection>
  );
}
