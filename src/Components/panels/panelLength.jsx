import { React, useState } from "react";
import Switch from "/src/Components/switch/Switch";

function PanelSwitch(props) {
  const { title } = props;
  const  [valueRange, setValueRange] =  useState(10);

  const eventRange = (e) =>{
  setValueRange(e.target.value);
  }
  const panelConf = {
    width: "28rem",
    height: "70px",
    backgroundColor: "var(--cl-4)",
    borderRadius: "10px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-Around",
    fontSize: "10px",
  };

  const rangeConf = {
    width: "80%",
    margin: "0 auto",
  };
  const value = {
    margin: "0 20px",
  };

  return (
    <>
      <div style={panelConf}>
        <input
          type="range"
          style={rangeConf}
          onChange={eventRange}
          min={4}
          max={20}
        />
        <p style={value}>{title  + valueRange}</p>
      </div>
    </>
  );
}

export default PanelSwitch;
