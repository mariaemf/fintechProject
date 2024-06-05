import { IVenda } from "../Context/DataContex";

//recebe propriedade do tipo venda
function VendaItem({ venda }: { venda: IVenda }) {
  return (
    <div className="venda box">
      {/* todos ids possuem o mesmo tamanho e 
    quando colocamos monospace ficam todos alinhados */}
      <a href="" style={{ fontFamily: "monospace" }}>
        {venda.id}
      </a>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString(
          "pt-BR", //informando o tipo da moeda
          {
            style: "currency", //Passamos que e igual a moeda
            currency: "BRL", // e a mesma e igual brl
          }
        )}
      </div>
    </div>
  );
}

export default VendaItem;
