import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import Toggle from "../switch/Switch";


function Navbar() {
  const navBar = {
    width: "100%",
    height: "60px",
    backgroundColor: "var(--cl-5)",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    position: "fixed",
    top : "0",
    zIndex : "999",
}

  return (
    <nav style={navBar}>
      <Toggle />
      <Toggle />
    </nav>
  );
}

export default Navbar;
