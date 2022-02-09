import styled from "styled-components";

export const BoxSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxSimuladorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1070px){
    flex-direction: row;
  }
`;

export const TituloSimulador = styled.h1`
  font-size: 1.5rem;
  color: black;
  text-align: left;
  width: 100%;
`;