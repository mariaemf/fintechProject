import { useData } from "../Context/DataContex";
import VendaItem from "../components/VendaItem";

function Vendas() {
  const { data } = useData();

  //verificando se data existe,caso nao retorna null
  if (data === null) return null;

  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
}

export default Vendas;
