import { Children, React, useState, useContext } from "react";
import Switch from "@mui/material/Switch";
import BtnGo from "../panels/panelButton";
import { SwitchContext } from "../../Context/SwitchContext";

const Toggle = ({ children }) => {
  const title = children;
  const {} = useContext(SwitchContext);

  const [check, setCheck] = useState(false);
  const [description, setDescription] = useState(title);

  function toggleChange(e) {
    setCheck(e.target.checked);
  }

  function sendData() {
    console.log(check, description);
    return check, description;
  }

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
