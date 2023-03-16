import { height } from "@mui/system";
import React, { useState } from "react";
import PanelSwitch from "../../Components/panels/panelSwitch";
import PanelButton from "../../Components/panels/panelButton";
import PanelLength from "../../Components/panels/panelLength";
import Data from "/src/Components/Json/data";
import NavBar from "/src/Components/navbar/Navbar";
import Search from "/src/Components/search/search";
import imgDown from "/public/img/download.webp";
import DownloadSection from "../download/download";
import "/src/Styles/root.css";

function Pass() {
  // Estilos
  const homePass = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--cl-1)",
    fontFamily: "var(--font-1)",
    color: "var(--cl-3)",
  };
  const homePassSon = {
    backgroundColor: "var(--cl-3)",
  };
  const title = {
    fontFamily: "var(--font-1)",
    fontSize: "50px",
    textAlign: "center",
    paddingTop: "70px",
    color: "var(--cl-3)",
  };
  const titleSon = {
    color: "var(--cl-1)",
  };
  const panelContainer = {
    backgroundColor: "var(--cl-5)",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  };
  const panelColumnLeft = {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  };
  const panelColumnRight = {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  const imgStyle = {
    width: "20px",
    height: "20px",
    position: "absolute",
    bottom: "0",
  };

  const [value, setValue] = useState(null);

  const send = () => {
    setValue(console.log(value));
  };

  return (
    <>
      <section style={homePass}>
        <NavBar />
        <div>
          <h1 style={title}>{Data.title}</h1>
          <Search />
          <main style={panelContainer}>
            <div style={panelColumnLeft}>
              <PanelSwitch title={"Incluye Mayusculas"} color={"primary"} />
              <PanelSwitch title={"Incluye Minusculas"} color={"primary"} />
              <PanelSwitch title={"Incluye Numeros"} color={"primary"} />
              <PanelSwitch title={"Incluye Caracteres"} color={"primary"} />
            </div>
            <div style={panelColumnRight}>
              <PanelLength title={"Nivel "} />
              <PanelButton/>
            </div>
          </main>
        </div>
        <a href={`#download`}>
          <img src={imgDown} alt="Bajar" style={imgStyle} />
        </a>
      </section>
    </>
  );
}

export default Pass;
