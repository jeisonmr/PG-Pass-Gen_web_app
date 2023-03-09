import React from "react";
import Data from "/src/Components/Json/data";
import iconWin from "/public/img/windows.webp";
import iconMac from "/public/img/macos.webp";
import imageTop from "/public/img/ondaTop.svg";
import imageBottom from "/public/img/ondaBottom.svg";

function Download() {
  const downView = {
    width: "100%",
    height: "140vh",
    background: "var(--cl-2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };
  const svgTop = {
    width: "100%",
    position: "absolute",
    top: "0",
  };
  const svgBottom = {
    width: "100%",
    position: "absolute",
    bottom: "0",
  };
  const title = {
    fontFamily: "var(--font-1)",
    fontSize: "50px",
    textAlign: "center",
    paddingTop: "70px",
    color: "var(--cl-3)",
  };
  const subtitle = {
    fontFamily: "var(--font-1)",
    fontSize: "15px",
    textAlign: "center",
    padding: "40px 20px 10px 20px",
    color: "var(--cl-3)",
  };
  const btnDown = {
    width: "150px",
    height: "50px",
    margin: "30px 10px",
    background: "var(--cl-4)",
    borderRadius: "5px",
    border: "none",
  };
  const imgIcon = {
    width: "35px",
    height: "35px",
  };

  return (
    <>
      <section style={downView} id="download">
        <img style={svgTop} src={imageTop} alt="" />
        <h2 style={title}>{Data.subtitle}</h2>
        <p style={subtitle}>{Data.description}</p>
        <div>
          <button style={btnDown}>
            <img style={imgIcon} src={iconWin} alt="Icono de Windows" />
          </button>
          <button style={btnDown}>
            <img style={imgIcon} src={iconMac} alt="Icono de MacOS" />
          </button>
        </div>
        <img style={svgBottom} src={imageBottom} alt="" />
      </section>
    </>
  );
}

export default Download;
