// Importación de subcomponentes.
import Data from "/src/Components/Json/data";
import github from "/public/img/github.webp";
import './footer.css'
import { Ask } from "../../Components/acordeon/ask";
function Footer() {

  return (
    <section className={"footerView"}>
      <h2 className="title_3">{Data.ask}</h2>
      <span className="subtitle_3">{Data.subask}</span>
      {/* Render del logo y descripción */}
      <div className="acordeonData">
      <Ask/>
      </div>
      
      <a href={Data.git} target="_blank">
        <img className={"gitIcon"} src={github} alt="" />
      </a>
      <p>{Data.copyright}</p>
    </section>
  );
}

export default Footer;
