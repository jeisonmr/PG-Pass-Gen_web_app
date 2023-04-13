import { useSelect } from "@mui/base";
import { fontSize, textAlign } from "@mui/system";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

function Search() {
  // const [searchValue, setSearchValue] = useState();
  const searchPass = useSelector((state) => state.search.data);
  // setSearchValue(searchPass);
  const pass = useRef(null);

  const copyPass = () => {
    pass.current.select();
    document.execCommand("copy");
  };

  const search = {
    fontSize: "35px",
    color: "var(--cl-3)",
    background: "var(--cl-4)",

    width: "57rem",
    height: "80px",
    borderStyle: "dashed",
    border: "1px dashed var(--cl-1)",

    textAlign: "center",
  };
  const containerSearch = {
    margin: "40px 0 15px 0",
    padding: " 0 10px",
  };

  return (
    <div onClick={copyPass} style={containerSearch}>
      <input
        style={search}
        className="search"
        type="text"
        value={searchPass}
        ref={pass}
      />
    </div>
  );
}

export default Search;
