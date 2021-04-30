const chooseandswap = (A) => {
  let str = A.split("");
  let chars = new Array(26).fill(-1);
  let a, b;
  let flag = true;
  for (i in str) {
    let index = A.charCodeAt(i) - 97;
    chars[index] === -1 ? (chars[index] = i) : null;
  }
  for (let j = 0; j < str.length && flag; j++) {
    let index = A.charCodeAt(j) - 97;
    for (let k = 0; k <= index && flag; k++) {
      if (chars[k] > chars[index]) {
        a = j;
        b = k;
        flag = false;
      }
    }
  }
  let char1 = str[a];
  let char2 = str[chars[b]];
  for (l in str) {
    if (str[l] === char1) {
      str[l] = char2;
    } else if (str[l] === char2) {
      str[l] = char1;
    }
  }
  return str.join("");
};

console.log(chooseandswap("abba"));
