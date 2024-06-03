import { useData } from "../Context/DataContex";

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function nomeMeses(n: number) {
  //pegando data de hoje
  const date = new Date();
  //definindo a nova data
  date.setMonth(date.getMonth() + n);
  //pegando o nome do mes
  //INTL => objeto de internacionalizacao
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long", //para nao abreviar e dar o nome inteiro
  }).format(date);
}
//para formatar as datas
//date recebe objeto tipo date
function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

function MesBtn({ n }: { n: number }) {
  //Essas funcoes sao exportadas do contexto
  const { setInicio, setFinal } = useData();

  //adc funcionalidade ao botao

  function setMes(n: number) {
    const date = new Date();
    //definindo a nova data
    date.setMonth(date.getMonth() + n);

    //passando argumentos ano e mes e dia
    //aqui estamos pegando o primeiro dia
    const firstDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDay(),
      1
    );
    console.log(firstDay);

    //aqui estamos pegando o ultimo dia do mes
    //passanod o proximo mes +1 e o dia anterior
    // e o valor do dia 0, demonstrando que e o dia anterior do proximo MesB
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDay() + 1,
      0
    );
    console.log(lastDay);
    //usando formatDate p/ demonstrar as datas ajustadas
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button style={style} onClick={() => setMes(n)}>
      {nomeMeses(n)}
    </button>
  );
}

export default MesBtn;

//nesse botao queremos que ele receba uma
//propriedade que e o N
//quando passado n -0 (mes atual)
//n -1 e o mes anteriro
