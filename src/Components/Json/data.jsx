import moon from "/public/img/moon.webp";
import sun from "/public/img/sun.webp";
import down from "/public/img/download.webp";
import github from "/public/img/github.webp";
import password from "/public/password.webp";
import huella from "/public/huella.webp";
import security from "/public/candado.webp";

const data = {
  title: "Password Generator",
  subtitle: "¿Cómo es una contraseña segura?",
  description: [
    {
      svg: password,
      title: 'Larga',
      data: 'Cuanto más larga es una contraseña, más segura es. Una contraseña segura debe tener al menos 10 caracteres.'
    },
    {
      svg: security,
      title: 'Compleja',
      data: 'Las contraseñas seguras utilizan una combinación de letras mayúsculas y minúsculas, números y símbolos para formar una cadena de caracteres impredecible que no se parezca a palabras o nombres.',
    },
    {
      svg: huella,
      title: 'Única',
      data: 'Cada cuenta debe tener una contraseña segura y única para reducir la vulnerabilidad en caso de hackeo.',
    }
  ],
   
  opciones: [
    {
      svg: password,
      title: "Incluye Mayusculas",
      case: "MAY",
    },
    {
      svg: password,
      title: "Incluye Minusculas",
      case: "MIN",
    },
    {
      svg: password,
      title: "Incluye Numeros",
      case: "NUM",
    },
    {
      svg: password,
      title: "Incluye Caracteres",
      case: "CAR",
    },
  ],
  ask: 'Preguntas frecuentes sobre el Generador de contraseñas',
  subask: '¿Tiene alguna pregunta sobre el Generador de contraseñas aleatorias? ¡Encontrará las respuestas más abajo!',
  copyright: "Copyright © 2023 - Desarrollado por Jeison Muñoz |  @jeisonmr  con ❤️",
  images: [moon, sun, down, github],
  git: "https://github.com/jeisonmr",
};

export default data;
