import React, { useState } from "react";
import { SwitchContext } from "./SwitchContext";

function SwitchProvider({ children }) {
  const [toggles, setToggles] = useState({
      toggle_1: false,
      toggle_2: false,
      toggle_3: false,
      toggle_4: false,
      toggle_5: false,
      toggle_6: false,
  });

  const setToggle = (toggleName) => (value) =>
  setToggles((prevState) => ({...prevState, [toggleName]: value}));

  return (
    <SwitchContext.Provider 
    value={{ 
      ...toggles,
      setToggle_1: setToggle(false),
      setToggle_2: setToggle(false),
      setToggle_3: setToggle(false),
      setToggle_4: setToggle(false),
      setToggle_5: setToggle(false),
      setToggle_6: setToggle(false),
       }}>
      {children}
    </SwitchContext.Provider>
  );
}
export default SwitchProvider;
