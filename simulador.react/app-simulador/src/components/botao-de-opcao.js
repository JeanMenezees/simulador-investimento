import React from 'react';
import { useContext } from 'react/cjs/react.development';
import styled from 'styled-components';
import appConfig from '../app-config.json';
import ContextoDeTipos from '../contexts/tiposContexto';

const StyledBotao = styled.button`
    background-color: ${(props) => props.ativo ? appConfig.colors.primary["000"] : "transparent;"}
    text-align: center;
    color: ${(props) => props.ativo ? "white;" : "black;"}
    font-size: 1.1rem;
    font-weight: bold;
    width: 30%;
    padding: 16px 8px;
    border-width: 3px;
    border-color: ${appConfig.colors.primary[100]};
    border-top-left-radius: ${(props) => props.bordaRedondaNa === "esquerda" ? "4px;": "0;"}
    border-bottom-left-radius: ${(props) => props.bordaRedondaNa === "esquerda" ? "4px;": "0;"}
    border-top-right-radius: ${(props) => props.bordaRedondaNa === "direita" ? "4px;": "0;"}
    border-bottom-right-radius: ${(props) => props.bordaRedondaNa === "direita" ? "4px;": "0;"}
`

function BotaoOpcao(props) {
    const contexto = useContext(ContextoDeTipos);

    return ( 
        <StyledBotao 
            bordaRedondaNa={props.bordaRedondaNa}
            onClick={() => {
                contexto.mudar(props.nome)
            }}
            ativo={contexto.tipoAtual == props.nome}
        >
            {props.nome}
        </StyledBotao>
    );
}

export default BotaoOpcao;