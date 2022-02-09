import React from "react";
import {
  BoxCards,
  BoxGrafico,
  BoxLegenda,
  BoxResultadoSection,
  TituloSection,
  CardConteudo,
  CardTitulo,
  Card,
  CorLegenda,
  ColunaPretaGrafico,
  Legenda,
  Grafico,
} from "../styled-components/ResultadoSection/styles";

export default function ResultadoSection(props) {
  return (
    //Box que engloba toda a secaoF
    <BoxResultadoSection id="resultado--teste">
      <TituloSection>Resultado</TituloSection>
      {/* Box da lista de cards */}
      <BoxCards>
        <Card>
          <CardTitulo>Valor final bruto</CardTitulo>
          <CardConteudo id="resultado__valor--teste1">
            R$ {props.simulacao[0].valorFinalBruto}
          </CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Alíquota do IR</CardTitulo>
          <CardConteudo id="resultado__valor--teste2">
            {props.simulacao[0].aliquotaIR}%
          </CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Valor pago em IR</CardTitulo>
          <CardConteudo id="resultado__valor--teste3">
            R$ {props.simulacao[0].valorPagoIR}
          </CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Valor final líquido</CardTitulo>
          <CardConteudo destacado id="resultado__valor--teste4">
            R$ {props.simulacao[0].valorTotalInvestido}
          </CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Valor total investido</CardTitulo>
          <CardConteudo id="resultado__valor--teste5">
            R$ {props.simulacao[0].valorFinalLiquido}
          </CardConteudo>
        </Card>
        <Card>
          <CardTitulo>Ganho líquido</CardTitulo>
          <CardConteudo destacado id="resultado__valor--teste6">
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
          <CorLegenda cor="orange" />
          <p>Com Aporte</p>
        </Legenda>
        <Legenda>
          <CorLegenda cor="black" />
          <p>Sem Aporte</p>
        </Legenda>
      </BoxLegenda>
    </BoxResultadoSection>
  );
}
