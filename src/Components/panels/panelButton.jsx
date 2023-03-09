import React, { useState } from "react";
import Switch from "/src/Components/switch/Switch";

function PanelSwitch(props) {
  
  const { title } = props;
  const [btnGo, setBtnGo] = useState(true)

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
    fontSize : "20px",
    color: "var(--cl-3)"
  };

  return (
    <>
      <div style={panelConf}>
        <button style={buttonStyle} onClick={setBtnGo}>
          {title}
        </button>
      </div>
    </>
  );
}

export default PanelSwitch;
