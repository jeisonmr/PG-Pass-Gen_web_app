import React from "react";
import "../../View/footer/footer.css";
export const Ask = () => {
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            ¿Qué hace segura una contraseña?{" "}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p className="acordeonText">
              Crear una contraseña sólida es una tarea difícil, sobre todo si
              necesita disponer de una contraseña segura para varios sitios. Se
              hace difícil memorizar las contraseñas con entropía criptográfica
              que combinan caracteres con símbolos especiales. Es una de las
              razones por las que muchas personas utilizan la misma contraseña
              para varios sitios, a pesar de que sepan que no es seguro. Si sus
              contraseñas se hackean, su información queda expuesta al público.
              Escribir las contraseñas a mano también es un gran error por el
              riesgo de una brecha de seguridad. El Generador de contraseñas
              seguras crea contraseñas con un mínimo de 16 caracteres, que
              incluyen al menos un número, símbolos y algunos caracteres en
              mayúsculas. No guarde nunca estas contraseñas aleatorias en los
              navegadores web, ya que son fácilmente accesibles. Utilice tanto
              letras mayúsculas como minúsculas en la contraseña. En la era
              digital actual, resulta fundamental crear una contraseña aleatoria
              para cada sitio en el que guarde su información confidencial. Las
              características fundamentales que hacen segura una contraseña son
              la singularidad, la longitud, las letras mayúsculas y minúsculas,
              los caracteres especiales, los símbolos y los números. Aunque esto
              le parezca complicado, puede utilizar la herramienta Generador de
              contraseñas de PG. El Generador de contraseñas de PG crea
              contraseñas indescifrables. El práctico generador de contraseñas
              automático le permite incluso establecer la longitud de la
              contraseña y las combinaciones de caracteres para crear una
              contraseña personalizada. Funciona en la máquina del usuario,
              genera opciones de contraseñas para los sitios y no almacena las
              contraseñas en su servidor.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            ¿Existe una forma segura de almacenar las contraseñas?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p className="acordeonText">
              Generar contraseñas aleatorias es una cosa, y recordarlas es otra.
              Si utiliza una contraseña aleatoria para cada cuenta, será difícil
              que recuerde todas las letras y números creados al azar. Así que,
              es probable que se pregunte si hay una forma segura de guardar las
              contraseñas creadas con el Generador de contraseñas seguras. La
              tecnología avanzada le permite guardar sus contraseñas con
              facilidad. Además, puede usar un administrador de contraseñas
              seguro y fiable para mantener su información en privado. No
              obstante, hay que evitar siempre los sitios web fraudulentos.
              También debe evitar compartir su contraseña con otras personas
            </p>
            <p className="acordeonText">
              La mayoría de la gente tiene varias cuentas digitales, como
              aplicaciones bancarias y sitios de juegos. No es fácil memorizar
              tantas contraseñas, pero usar la misma contraseña nos expone a una
              gran vulnerabilidad. Entonces, ¿existe una forma segura de
              almacenar distintas contraseñas? Puede guardar sus contraseñas de
              forma tradicional en una unidad USB con tecnología biométrica. No
              obstante, corre el riesgo de que alguien pueda coaccionarle para
              que desbloquee su USB. Utilice siempre un administrador de
              contraseñas seguro para mantener la información confidencial en un
              almacenamiento cifrado. La criptografía de los administradores de
              contraseñas hace que éstas sean inaccesibles para los hackers.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            ¿Cuáles son las diez peores contraseñas?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p className="acordeonText">
              Estas son la diez peores contraseñas del año. Las contraseñas
              comunes ponen de manifiesto lo malos que somos los humanos a la
              hora de generar caracteres aleatorios. ¡Mejor use un generador
              algorítmico como el de más arriba!
            </p>
            <ul>
              <li className="acordeonText">123456</li>
              <li className="acordeonText">Contraseña</li>
              <li className="acordeonText">admin</li>
              <li className="acordeonText">Qwerty</li>
              <li className="acordeonText">54321</li>
              <li className="acordeonText">123456789</li>
              <li className="acordeonText">Dejameentrar</li>
              <li className="acordeonText">Futbol</li>
              <li className="acordeonText">TeQuiero</li>
              <li className="acordeonText">password</li>
            </ul>
            <p className="acordeonText">
              Recuerde que las contraseñas creadas por humanos no son seguras.
              La mente humana no puede competir con un servidor que calcula
              miles de millones de combinaciones por segundo.
            </p>
            <p className="acordeonText">
              Las contraseñas hackeadas contienen palabras y frases comunes.
              Evite los ataques de diccionario con una contraseña segura. Añada
              esta página a sus marcadores para poder generar caracteres
              aleatorios cuando lo necesite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
