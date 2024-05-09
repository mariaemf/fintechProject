import React from "react";
import { useData } from "../Context/DataContex";
import DateRange from "./DateRange";

function Header() {
  return (
    <div>
      <DateRange />
    </div>
  );
}

export default Header;
