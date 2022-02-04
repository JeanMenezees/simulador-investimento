import React from "react";
import CampoDeTexto from "./campo-de-texto";
import styled from "styled-components";
import CampoDeTextoEstatico from "./campo-de-texto-estatico";

const StyledFormulario = styled.form`
  display: flex;
  flex-direction: column;
  algin-items: center;
  margin: 16px 0;
  padding: 8px;
`;

function Formulario(props) {
  return (
    <StyledFormulario>
      <CampoDeTexto nome={props.nomes[0]} noErro={"O campo deve conter somente números"}/>
      <CampoDeTexto nome={props.nomes[1]} noErro={"O campo deve conter somente números"}/>
      {/* Recebe o valor da api */}
      <CampoDeTextoEstatico nome={props.nomes[2]} dadosAPI={props.dadosAPI}/>
      {/* Link para ir para os tipos de indexacao */}
    </StyledFormulario>
  );
}

export default Formulario;
