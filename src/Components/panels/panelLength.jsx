import { React, useState } from "react";
import { useDispatch } from "react-redux";


function PanelLength(props) {
  const { title } = props;
  const  [valueRange, setValueRange] =  useState(10);
  const dispatch = useDispatch();


  const eventRange = (e) =>{
    // let value = e.target.value;
    // actualizarValor(value);
    return setValueRange( e.target.value);

  }

  dispatch({type: "SET_RANGE", payload: valueRange})
  // const actualizarValor = (value) =>{
  // }

  


  // Estilos
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
// End Estilos
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

export default PanelLength;
