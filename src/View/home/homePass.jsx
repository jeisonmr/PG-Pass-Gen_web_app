// Importación del Hook useState
import { useState } from "react";

// Importación de los commponentes.
import PanelSwitch from "../../Components/panels/panelSwitch"; //Switch.
import PanelButton from "../../Components/panels/panelButton"; //Boton Go!
import PanelLength from "../../Components/panels/panelLength"; //Range Nivel.

// Importación de la información del objeto.
import Data from "../../Components/Json/data";

// Importación de subcomponentes.
import Search from "/src/Components/search/search"; //Input Text
import imgDown from "/public/img/download.webp"; //Imagen sección descargar app.

import "/src/Styles/root.css";

function Pass() {
  // Estilos del componente Pass
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

  return (
    <>
      <section style={homePass}>
        <div>
          <h1 style={title}>{Data.title}</h1> {/* Renderiza el titulo */}

          <Search /> {/* Input: Se renderiza la contraseña generada */}

          <main style={panelContainer}>
            {/* Renderiza un conjunto de componentes Switch */}
            <div style={panelColumnLeft}>
              {Data.opciones.map((i) => (
                <PanelSwitch key={i.title} title={i.title} color={"primary"} tipo={i.case} />
              ))}
            </div>

            {/* Renderiza los componentes (Rango de niveles y el Boton Go!) */}
            <div style={panelColumnRight}>
              <PanelLength title={"Nivel "} />
              <PanelButton />
            </div>
          </main>
        </div>
        
        {/* Renderiza la imagen down */}
        <a href={`#download`}>
          <img src={imgDown} alt="Bajar" style={imgStyle} />
        </a>
      </section>
    </>
  );
}

export default Pass;
