import React from "react";
import DateInput from "./DateInput";

function DateRange() {
  return (
    <div>
      <DateInput label="inicio" />
      <DateInput label="final" />
    </div>
  );
}

export default DateRange;
