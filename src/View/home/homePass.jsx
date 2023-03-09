import { height } from "@mui/system";
import React from "react";
import PanelSwitch from "../../Components/panels/panelSwitch";
import PanelButton from "../../Components/panels/panelButton";
import PanelLength from "../../Components/panels/panelLength";
import Data from "/src/Components/Json/data";
import NavBar from "/src/Components/navbar/Navbar";
import Search from "/src/Components/search/search";
import imgDown from "/public/img/download.webp"
import "/src/Styles/root.css";

function Pass() {
  const title = {
    fontFamily: "var(--font-1)",
    fontSize: "50px",
    textAlign: "center",
    paddingTop: "70px",
    color: "var(--cl-3)",
  }
  const titleSon = {
    color: "var(--cl-1)",
  }
  const homePass = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "var(--cl-1)",
    fontFamily: "var(--font-1)",
    color: "var(--cl-3)",
  }

  const homePassSon = {
    backgroundColor: "var(--cl-3)",
  }

  const panelContainer = {
    backgroundColor : "var(--cl-5)",
    width : "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  }

  const panelColumnLeft = {
    width : "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  }
  const panelColumnRight = {
    width : "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }

  const imgStyle = {
    width: "40px",
    height: "40px"
  }

  return (
    <>
      <div style={homePass}>
        <NavBar />
        <h1 style={title}>{Data.title}</h1>
        <Search />
        <main style={panelContainer}>
          <div style={panelColumnLeft}>
          <PanelSwitch title="Incluye Mayusculas"/>
          <PanelSwitch title={"Incluye Minusculas"}/>
          <PanelSwitch title={"Incluye Numeros"}/>
          <PanelSwitch title={"Incluye Caracteres"}/>
          </div>
          <div style={panelColumnRight}>
          <PanelLength title={"Nivel "}/>
          <PanelButton title={"GO!"}/>
          </div>
        </main>
        <img src={imgDown} alt="Bajar" style={imgStyle} />
      </div>
    </>
  );
}



export default Pass;
