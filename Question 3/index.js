const longestPalin = (S) => {
  let start = 0;
  let end = 1;
  let l, h;
  S = S.split("");
  for (let i = 1; i < S.length; i++) {
    l = i - 1;
    h = i;
    while (l >= 0 && h < S.length && S[l] === S[h]) {
      if (h - l + 1 > end) {
        start = l;
        end = h - l + 1;
      }
      l--;
      h++;
    }

    l = i - 1;
    h = i + 1;
    while (l >= 0 && h < S.length && S[l] === S[h]) {
      if (h - l + 1 > end) {
        start = l;
        end = h - l + 1;
      }

      l--;
      h++;
    }
  }
  return S.slice(start, start + end).join("");
};

console.log(longestPalin("abc"));
