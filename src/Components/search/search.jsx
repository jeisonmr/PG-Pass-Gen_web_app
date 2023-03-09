import { fontSize, textAlign } from "@mui/system";
import React from "react";


function Search() {
  const search = {
    fontSize: "35px",
    color: "var(--cl-1)",
    background: "var(--cl-4)",

    width: "57rem",
    height: "80px",
    borderStyle: "dashed",
    border: "1px dashed var(--cl-1)",

    margin: "40px 0 15px 0",
    padding: " 0 10px",
    textAlign: "center",

  };

  return (
    <>
      <input style={search} className="foc" type="text" />
    </>
  );
}

export default Search;
