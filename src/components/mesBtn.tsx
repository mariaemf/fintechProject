import React from "react";

function MesBtn({ n }: { n: number }) {
  return <div>MesBtn {n}</div>;
}

export default MesBtn;

//nesse botao queremos que ele receba uma
//propriedade que e o N
//quando passado n -0 (mes atual)
//n -1 e o mes anteriro
