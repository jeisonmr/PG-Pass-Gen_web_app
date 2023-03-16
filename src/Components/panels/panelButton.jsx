import React, { useState, useContext } from "react";
import { SwitchContext } from "../../Context/SwitchContext";

function PanelButton() {
  // const check = useContext(SwitchContext);
  const { toggle_1 } = useContext(SwitchContext);

  function getValue() {
    console.log(toggle_1);
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
