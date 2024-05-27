import React from "react";
import MesBtn from "./mesBtn";

function Meses() {
  return (
    <div className="flex">
      <MesBtn n={-1} />
      <MesBtn n={-2} />
      <MesBtn n={0} />
    </div>
  );
}

export default Meses;
