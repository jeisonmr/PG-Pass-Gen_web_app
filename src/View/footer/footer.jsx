// Importación de subcomponentes.
import Data from "/src/Components/Json/data";
import github from "/public/img/github.webp";
import './footer.css'
function Footer() {

  return (
    <section className={"footerView"}>
      {/* Render del logo y descripción */}
      <a href={Data.git} target="_blank">
        <img className={"gitIcon"} src={github} alt="" />
      </a>
      <p>{Data.copyright}</p>
    </section>
  );
}

export default Footer;
