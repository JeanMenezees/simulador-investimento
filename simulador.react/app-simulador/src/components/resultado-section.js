import React from "react";
import { useContext, useEffect } from "react/cjs/react.development";
import ContextoDeDados from "../contexts/contextoDados";

export default function ResultadoSection() {
  const contexto = useContext(ContextoDeDados);

  useEffect(() => {
    console.log(contexto);
  }, [contexto]);

  return <div>oi</div>;
}
