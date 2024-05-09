import React from "react";

interface IDateInput {
  label: string;
}
function DateInput({ label, ...props }: IDateInput) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id="inicio" type="date" />
    </div>
  );
}

export default DateInput;
