//Importación de la información del objeto
import Data from "/src/Components/Json/data";

// Importación de subcomponentes.
import imageTop from "/public/img/ondaTop.svg"; //Curva top
import imageBottom from "/public/img/ondaBottom.svg"; //Curva bottom
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

//Importación de estilos.
import './download.css';

function Download() {

  // Estilos del componente Donwload.
  // const downView = {
  //   width: "100%",
  //   height: "140vh",
  //   background: "var(--cl-2)",
  //   display: "flex",
  //   flexDirection: "column",
  
  //   justifyContent: "center",
  //   alignItems: "center",
  //   position: "relative",
  // };
  // const svgTop = {
  //   width: "100%",
  //   position: "absolute",
  //   top: "0",
  // };
  // const svgBottom = {
  //   width: "100%",
  //   position: "absolute",
  //   bottom: "0",
  // };
  // const title_2 = {
  //   fontFamily: "var(--font-1)",
  //   fontSize: "50px",
  //   textAlign: "center",
  //   paddingTop: "70px",
  //   color: "var(--cl-3)",
  // };
  // const subtitle = {
  //   fontFamily: "var(--font-1)",
  //   fontSize: "15px",
  //   textAlign: "center",
  //   padding: "40px 20px 10px 20px",
  //   color: "var(--cl-3)",
  // };
  // const btnDown = {
  //   width: "35px",
  //   height: "35px",
  //   margin: "30px 10px",
  //   background: "var(--cl-3)",
  //   borderRadius: "50%",
  //   border: "none",
  // };
  // const imgIcon = {
  //   width: "35px",
  //   height: "35px",
  // };

  return (
    <>
    {/* Renderizado de la sección Descargar */}
      <section className={"downView"} id="download">
        <img className={"svgTop"} src={imageTop} alt="" /> {/* Imagen top */}
        <h2 className={"title_2"}>{Data.subtitle}</h2> {/* Renderizado del titulo */}
        <p className={"subtitle"}>{Data.description}</p> {/* Render del subtitulo */}
        <div>
          {/* Renderizado de los botones */}
          <button className={"btnDown"}>
            <DownloadForOfflineIcon fontSize="large" color={""}/>
          </button>
        </div>
        <img className={"svgBottom"} src={imageBottom} alt="" /> {/* Imagen bottom */}
      </section>
    </>
  );
}

export default Download;
