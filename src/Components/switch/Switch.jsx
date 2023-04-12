import { useState } from "react";
import Switch from "@mui/material/Switch";
import { useDispatch } from "react-redux";

const Toggle = ({ tipo }) => {
  const [check, setCheck] = useState(false);
  const [mod, setMod] = useState(tipo);
  const dispatch = useDispatch();

  function toggleChange(e) {
    setCheck(e.target.checked);
  }

  function sendData() {
    // console.log(check, mod)
    actualizarValor({ check, mod });
  }

  const actualizarValor = ({ check, mod }) => {
    switch (mod) {
      case "MAY":
        dispatch({ type: "SET_MAY", payload: check });
        break;
      case "MIN":
        dispatch({ type: "SET_MIN", payload: check });
        break;
      case "NUM":
        dispatch({ type: "SET_NUM", payload: check });
        break;
      case "CAR":
        dispatch({ type: "SET_CAR", payload: check });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Switch
        checked={check}
        onChange={toggleChange}
        onClick={sendData}
        inputProps={{ "aria-label": "controlled" }}
      />
    </>
  );
};

export default Toggle;
