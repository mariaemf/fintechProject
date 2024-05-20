import React from "react";

interface IDateInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function DateInput({ label, ...props }: IDateInput) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} type="date" name={label} {...props} />
    </div>
  );
}

export default DateInput;
