const needle = (needle, haystack) => {
  for (let i = 0, matches = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[matches]) matches++;
    else matches = 0;
    if (matches === needle.length) return i + 1 - needle.length;
  }

  return -1;
};

needle("redux", "react-redux");

const sumArray = (arr, number) => {
  for (let n = 0; n < arr.length; n++) {
    for (let k = 0; k < n; k++) {
      if (arr[k] + arr[n] === number) {
        return true;
      }
    }
  }

  return false;
};

sumArray([2, 4, 5, 9], 9);
