import React from "react";
import Switch from "/src/Components/switch/Switch";

function PanelSwitch(props) {
  
      const { title } = props;

  const panelConf = {
    width: "28rem",
    height: "70px",
    backgroundColor: "var(--cl-4)",
    borderRadius: "10px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-Around",
    alignItems: "center",
    fontSize :"10px",
  };

  return (
    <>
      <div style={panelConf}>
        <p>{title}</p>
        <Switch />
      </div>
    </>
  );
}

export default PanelSwitch;
