import React, { PropsWithChildren, createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

//definindo qual sera a interface de value
type IDataContext = {
  loading: boolean;
  error: string | null;
  data: IVenda[] | null;
};

type IVenda = {
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

//criando o provider, onde iremos envolver toda aplicacao
export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

//e a funcao sempre retornara o provider
//o value fica o objeto que sera exportado
