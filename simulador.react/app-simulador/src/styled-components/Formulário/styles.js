import styled from "styled-components";

export const StyledFormulario = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4%;
  box-sizing: border-box;

  @media (min-width: 1070px) {
    width: 50%;
  }
`;

export const StyledInput = styled.input`
  margin: 8px 0;
  padding: 8px;
  font-size: 1.2rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const FormularioHeader = styled.header`
  display: flex;
  flex-direction: row;
  algin-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const FormularioTitulo = styled.h1`
  text-align: left;
  font-size: 1.1rem;
`;

export const StyledLabel = styled.p`
  font-size: ${(props) => (props.valido ? "1rem;" : "0.7rem;")}
  text-align: left;
  margin: ${(props) => (props.valido ? "8px 0;" : "2px 0;")}
  color: ${(props) => (props.valido ? "black;" : "red;")}
`;