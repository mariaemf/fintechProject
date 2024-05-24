import DateInput from "./DateInput";
import { useData } from "../Context/DataContex";

function DateRange() {
  const { inicio, setInicio, final, setFinal } = useData();
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault}>
      <DateInput
        label="inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      {inicio}
      <DateInput
        label="final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
      {final}
    </form>
  );
}

export default DateRange;
