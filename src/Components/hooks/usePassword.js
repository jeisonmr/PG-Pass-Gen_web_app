import { useState } from "react";

const [may, setMay] = useState({});
// const [min, setMin] = useState(false);
// const [num, setNum] = useState(false);
// const [car, setCar] = useState(false);

const genPass = (mod, long, num) => {
  mod ? alfaCaracterPass(mod, long) : null;
  num ? numericPass() : null;

  const random = may + min + num + car;
  let password = "";
  for (let i = 0; i < 20; i++) {
    password += random.charAt(Math.floor(Math.random() * random.length));
  }
  return password;
};

const numericPass = () => {
  const numList_1 = new Uint32Array(1);
  const numList_2 = new Uint32Array(2);
  window.crypto.getRandomValues(numList_1);
  window.crypto.getRandomValues(numList_2);
  console.table(numList_1[0]);
  console.table(numList_2[0]);
  setNum(numList_1 + numList_2);
};

const sendPass = (mod) => {
  const type = "";
  switch (mod) {
    case 0:
      type = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      setMay(alfaCaracterPass(type));
    case 1:
      type = "abcdefghijklmnopqrstuvwxyz";
      setMin(alfaCaracterPass(type));
    case 2:
      type = "!#$%&/(=?)¡¿'-_[+}:{";
      setCar(alfaCaracterPass(type));
    default:
      break;
  }
};

const alfaCaracterPass = (mod, long) => {
  let code = "";
  for (const i in long) {
    code += type.charAt(Math.floor(Math.random() * type.length));
  }
  return code;
};


export default{
    alfaCaracterPass,
    numericPass,
    sendPass,
    genPass
}