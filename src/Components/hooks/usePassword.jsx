import { useState } from "react";

const [cha, setCha] = useState(false);
const [num, setNum] = useState(false);
const [may, setMay] = useState(false);
const [min, setMin] = useState(false);

const generatePassword = () => {
  // cha ? setCha(true) : setCha(false);
  // num ? setNum(true) : setNum(false);
  // may ? setMay(true) : setMay(false);
  // min ? setMin(true) : setMin(false);

  const random = charPass() + numberPass() + mayPass() + minPass();
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += random.charAt(Math.floor(Math.random() * random.length));
  }
  console.log(password + data);
};

const generatorPass = (cha, num, may, min) => {
  (cha ? charPass() : null)
  (num ? numberPass() : null)
  (may ? mayPass() : null)
  (min ? minPass() : null);
};

//   Caracteres
const charPass = () => {
  const type = "!#$%&/(=?)¡¿'-_[+}:{";
  let code = "";
  for (let i = 0; i < 10; i++) {
    code += type.charAt(Math.floor(Math.random() * type.length));
  }
  return code;
};
//  Numericos
const numberPass = () => {
  const num = new Uint32Array(1);
  window.crypto.getRandomValues(num);
  return num[0];
};
// Mayuculas
const mayPass = () => {
  const type = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";
  for (let i = 1; i <= 10; i++) {
    code += type.charAt(Math.floor(Math.random() * type.length));
  }
  return code;
};
// Minusculas
const minPass = () => {
  const type = "abcdefghijklmnopqrstuvwxyz";
  let code = "";
  for (let i = 1; i <= 10; i++) {
    code += type.charAt(Math.floor(Math.random() * type.length));
  }
  return code;
};
