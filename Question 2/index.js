const printLargest = (arr) => {
  return arr
    .sort((a, b) => {
      let ab = "" + a + b;
      let ba = "" + b + a;
      if (parseInt(ab) >= parseInt(ba)) {
        return -1;
      } else {
        return 1;
      }
    })
    .join("");
};

console.log(printLargest([54, 546, 548, 60]));
