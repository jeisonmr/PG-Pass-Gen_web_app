const numericPass = (long) => {
  const numList_1 = new Uint32Array(1);
  const numList_2 = new Uint32Array(1);

  window.crypto.getRandomValues(numList_1);
  window.crypto.getRandomValues(numList_2);

  const numList_3 = [].concat(numList_1[0], numList_2[0]);

  return numList_3;
};

const sendPass = (mod, long) => {
  let type = "";
  switch (mod) {
    case 0:
      type = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return alfaCaracterPass(type, long);
    case 1:
      type = "abcdefghijklmnopqrstuvwxyz";
      return alfaCaracterPass(type, long);
    case 2:
      return numericPass(long);
    case 3:
      type = "!#$%&/(=?)¡¿'-_[+}:{";
      return alfaCaracterPass(type, long);

    default:
      break;
  }
};

const alfaCaracterPass = (type, long) => {
  let code = "";
  for (let i = 0; i < long; i++) {
    code += type.charAt(Math.floor(Math.random() * type.length));
  }
  return code;
};

export default {
  alfaCaracterPass,
  numericPass,
  sendPass
};
