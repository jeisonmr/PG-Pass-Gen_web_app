import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Data from "../hooks/usePassword";

function PanelButton() {
  const [mayPass, setMayPass] = useState();
  const [minPass, setMinPass] = useState();
  const [numPass, setNumPass] = useState();
  const [carPass, setCarPass] = useState();

  const dispatch = useDispatch();

  const may = useSelector((state) => state.mayusculas.data);
  const min = useSelector((state) => state.minusculas.data);
  const num = useSelector((state) => state.numeros.data);
  const car = useSelector((state) => state.caracteres.data);
  const range = useSelector((state) => state.rango.data);
  const { sendPass } = Data;

  const genPass = (long) => {
    const random = mayPass + minPass + numPass + carPass;
    let password = "";
    for (let i = 0; i < long; i++) {
      password += random.charAt(Math.floor(Math.random() * random.length));
    }
    console.log(password);
    dispatch({type: "SET_SEARCH", payload: password})
  };


  function getValue() {
    console.table(`
          Mayusculas : ${may}
          Minusculas : ${min}
          Numeros    : ${num}
          Caracteres : ${car}
          Rango      : ${range}`);

    setMayPass(may ? sendPass(0, range) : "");
    setMinPass(min ? sendPass(1, range) : "");
    setNumPass(num ? sendPass(2, range) : "");
    setCarPass(car ? sendPass(3, range) : "");

    genPass(range);
    // showValue();
  }

  // const showValue = () =>{
  //   console.table(mayPass, minPass, ...numPass, carPass);
  // }

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
