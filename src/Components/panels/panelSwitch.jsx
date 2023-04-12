import React, { useState } from "react";
import  Toggle  from "/src/Components/switch/Switch";

function PanelSwitch({title, tipo}) {
  // const { title } = props;
  // const [mensaje, setMensaje] = useState(false);

  //------------------------------------------------------------------------
  const panelConf = {
    width: "28rem",
    height: "70px",
    backgroundColor: "var(--cl-4)",
    borderRadius: "10px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-Around",
    alignItems: "center",
    fontSize: "10px",
  };

  return (
    <>
      <div style={panelConf}>
        {title}
        <Toggle tipo={tipo}/>
      </div>
    </>
  );
}

export default PanelSwitch;
