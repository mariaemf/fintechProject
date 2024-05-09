import { useEffect, useRef, useState } from "react";

export default function useFetch<T>(
  url: RequestInfo | URL,
  options?: RequestInit
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  //passando q o error pode ser string ou null

  //salvando options no useRef
  const optionsRef = useRef(options);
  optionsRef.current = options;
  //definindo que o mesmo e igual a oprtions,
  //assim toda vez que o hook rodar e se options alternar, ele salva
  //com o valor novo

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    //criando a funcao fetchData
    const fetchData = async () => {
      //definindo o loading
      setloading(true); //quando comeca o fetch definimos o mesmo como true
      setData(null); //limpa caso haja um valor anterior e esteja fazendo um novo fetch

      //try tenta fazer o fetchinicial
      try {
        //options.current se refere ao valor armazenad em oprtionsRef
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        //lidando caso haja um erro direto da api, verificando se ela esta ok
        if (!response.ok) throw new Error(`Error : ${response.status}`);
        //caso haja um erro direro da api ele ignora todo codigo abaixo
        //dentro do ( ) estamos passando o erro e o valor do mesmo

        //convertenndo os dados para json
        const json = (await response.json()) as T; //informando q o json q retorna e igual ao produto

        //dentro do if so definiremos o setData como json se o signal n for abortado
        if (!signal.aborted) setData(json); //setData = json

        console.log(response);
      } catch (error) {
        //se der algum erro, e acionado o cath
        //verificando a instancia do erro
        if (!signal.aborted && error instanceof Error) setError(error.message);
        //o erro so sera verificado caso o sinal nao tenha sido abortado
      } finally {
        if (!signal.aborted) setloading(false);
      }
    };
    fetchData(); //ativando a funcao fetchData

    //quando retornar,
    return () => {
      controller.abort();
    };
  }, [url]);
  //na array de dependencia estamos informando que toda vez que a
  //url mudar, esse efeito e ativado

  return { data, loading, error };
}

//customHook de useFetch
