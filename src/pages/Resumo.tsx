import React from "react";
import { useData } from "../Context/DataContex";

function Resumo() {
  const { data } = useData();

  //se data for igual a null n retorna nd
  if (data === null) return null;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((i) => i.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString(
                "pt-BR", //informando o tipo da moeda
                {
                  style: "currency", //Passamos que e igual a moeda
                  currency: "BRL", // e a mesma e igual brl
                }
              )}
          </span>
        </div>

        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((i) => i.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString(
                "pt-BR", //informando o tipo da moeda
                {
                  style: "currency", //Passamos que e igual a moeda
                  currency: "BRL", // e a mesma e igual brl
                }
              )}
          </span>
        </div>

        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((i) => i.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString(
                "pt-BR", //informando o tipo da moeda
                {
                  style: "currency", //Passamos que e igual a moeda
                  currency: "BRL", // e a mesma e igual brl
                }
              )}
          </span>
        </div>
      </div>
      <div className="box">Gráficos</div>
    </section>
  );
}

export default Resumo;
