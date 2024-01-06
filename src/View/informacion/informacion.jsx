//Importación de la información del objeto
import Data from "/src/Components/Json/data";

// Importación de subcomponentes.
import imageTop from "/public/img/ondaTop.svg"; //Curva top
import imageBottom from "/public/img/ondaBottom.svg"; //Curva bottom
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

//Importación de estilos.
import './informacion.css';

function Download() {


  return (
    <>
    {/* Renderizado de la sección Descargar */}
      <section className={"downView"} id="download">
        
        <img className={"svgTop"} src={imageTop} alt="" /> {/* Imagen top */}
          <h2 className="title_2">{Data.subtitle}</h2>
        <section className="infoContent">
        {
          Data.description.map(i => (
            <div className="infoData">
              <img src={i.svg} alt={i.title} />
              <h3>{i.title}</h3>
              <p>{i.data}</p>
            </div>

          ))
        }
        </section>
        
        <img className={"svgBottom"} src={imageBottom} alt="" /> {/* Imagen bottom */}
      </section>
    </>
  );
}

export default Download;
