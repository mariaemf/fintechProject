import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import useFetch from "../hooks/useFetch";

//definindo qual sera a interface de value
type IDataContext = {
  loading: boolean;
  error: string | null;
  data: IVenda[] | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

export type IVenda = {
  id: string | number;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha"; //quando sabemos o que retorna e bom anotarmos o valor unico, pois facilita o uso
  pagamento: "boleto" | "pix" | "cartao";
  parcelas: number | null;
  data: Date;
};

//criando um contexto e passando o valor inicial
const DataContext = createContext<IDataContext | null>(null);

//funcao criada para usar o Contexto
export function useData() {
  const context = useContext(DataContext);

  if (!context) throw new Error("passe o contexto no provider");
  return context;
}
function getDate(n: number) {
  //!estilo de data yyyy-mm-dd
  //a data do dia sempre fica em new dare
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0"); //pega o dia e transformando em string
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
  // console.log(dd, mm, yyyy);
  // console.log(`${yyyy}-${mm}-${dd}`);
}

//para pegar o valor de trinta dias atras passamos o n

//criando o provider, onde iremos envolver toda aplicacao
export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [inicio, setInicio] = useState(getDate(30));
  const [final, setFinal] = useState(getDate(0));
  const { data, loading, error } = useFetch<IVenda[]>(
    ` https://data.origamid.dev/vendas/?inicio=${inicio}&final={final}`
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};

//e a funcao sempre retornara o provider
//o value fica o objeto que sera exportado
