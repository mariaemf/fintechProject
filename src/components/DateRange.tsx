import React, { useState } from "react";
import DateInput from "./DateInput";

function DateRange() {
  const [inicio, setInicio] = useState("");
  const [final, setFinal] = useState("");
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
