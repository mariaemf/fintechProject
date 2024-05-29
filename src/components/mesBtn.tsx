import React from "react";

function nomeMeses(n: number) {
  //pegando data de hoje
  const date = new Date();
  //pegando o mes
  console.log(date.getMonth() + n);
  //pegando o nome do mes
  //INTL => objeto de internacionalizacao
  const nomeMes = new Intl.DateTimeFormat("pt-BR", {
    month: "long", //para nao abreviar e dar o nome inteiro
  }).format(date);
}

function MesBtn({ n }: { n: number }) {
  nomeMeses(n);

  return <div>MesBtn {n}</div>;
}

export default MesBtn;

//nesse botao queremos que ele receba uma
//propriedade que e o N
//quando passado n -0 (mes atual)
//n -1 e o mes anteriro
