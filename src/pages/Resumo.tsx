import React from "react";
import { useData } from "../Context/DataContex";

function Resumo() {
  const { data } = useData();

  console.log(data);

  return <div>Resumo</div>;
}

export default Resumo;
