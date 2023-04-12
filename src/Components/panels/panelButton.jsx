import React, { useState, useContext } from "react";
import { SwitchContext } from "/src/Context/SwitchContext";
import { useSelector } from "react-redux";

function PanelButton() {
  const may = useSelector((state) => state.mayusculas.data);
  const min = useSelector((state) => state.minusculas.data);
  const num = useSelector((state) => state.numeros.data);
  const car = useSelector((state) => state.caracteres.data);
  const range = useSelector((state) => state.rango.data);

  function getValue() {
    console.table(`
          Mayusculas : ${may}
          Minusculas : ${min}
          Numeros    : ${num}
          Caracteres : ${car}
          Rango      : ${range}`);
  }

  // ---------------------------------------------------------------------------
  const panelConf = {
    width: "28rem",
    height: "70px",
    backgroundColor: "var(--cl-4)",
    borderRadius: "10px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-Around",
    alignItems: "center",
  };
  const buttonStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    border: "none",
    background: "var(--cl-6)",
    fontFamily: "var(--font-1)",
    fontSize: "20px",
    color: "var(--cl-3)",
  };

  return (
    <>
      <div style={panelConf}>
        <button style={buttonStyle} onClick={getValue}>
          Go!
        </button>
      </div>
    </>
  );
}

export default PanelButton;
